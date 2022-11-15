import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import convertRupiah from "rupiah-format";

import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";

const Details = () => {
  const params = useParams().id;

  let { data: films } = useQuery("filmCache", async () => {
    const response = await API.get(`/film/${params}`);
    return response.data.data;
  });

  let { data: trx } = useQuery("trxCache", async () => {
    const response = await API.get(`/transactions`);
    const filter = response.data.data.filter(
      (p) => (p.film_id == params) & (p.status == "success")
    );
    return filter;
  });

  // Create config Snap payment page with useEffect here ...
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-ULpNL5SmaAnXZbXc";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = useMutation(async () => {
    try {
      // Get data from product
      const data = {
        film_id: films.id,
        // BuyerId: films.user.id,
        price: films.price,
      };

      // Data body
      const body = JSON.stringify(data);
      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Create variabel for store token payment from response here ...
      const response = await API.post("/transaction/create", data);

      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
        },
        onPending: function (result) {
          /* You may add your own implementation here */
        },
        onError: function (result) {
          /* You may add your own implementation here */
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });

      // Init Snap for display payment page with token here ...
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Image src={films?.image} className="w-50" />
        </Col>
        <Col>
          <Row>
            <Col>
              <h1 className="text-light">{films?.title}</h1>
            </Col>
            <Col className="text-end">
            {trx.length === 0 ? (
              <Button
                className="btn-color fw-bold"
                onClick={() => handleBuy.mutate()}
              >
                Buy Now
              </Button>
            ) : null}
            </Col>
          </Row>
          <div className="embed-responsive embed-responsive-16by9">
           

            <div onClick={() => alert("test")}>
              <iframe
                width="600"
                height="315"
                src={films?.filmUrl}
                title="YouTube video player"
                frameborder="0"
                style={{ pointerEvents: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
           
          </div>
          <h5 className="text-light">{films?.category?.name}</h5>
          <h5 className="text-color">{convertRupiah.convert(films?.price)}</h5>
          <p className="text-light">{films?.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
