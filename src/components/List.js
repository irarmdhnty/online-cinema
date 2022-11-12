import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";

const List = () => {
  const navigate = useNavigate();

  let { data: filmList } = useQuery("filmListCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  return (
    <Container>
      <h2 className="text-start mt-5 text-light mb-5">List Film</h2>

      <div class="row row-cols-1 row-cols-md-3 g-5">
        {filmList?.map((item) => (
          <div class="col" className="w-25">
            <div class="card mb-5 border border-none">
              <Image
                src={item?.image}
                key={item?.id}
                onClick={() => navigate(`/detail/${item.id}`)}
                className="w-100"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default List;
