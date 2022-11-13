import React from "react";
import { Container, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import film1 from "../assets/film1.svg";
import { API } from "../config/api";

const ListFilm = () => {
  const navigate = useNavigate();
  let { data: list, refetch } = useQuery("listCache", async () => {
    const response = await API.get(`/transactions/user`);
    return response.data.data;
  });
  return (
    <Container>
      <h2 className="text-start mt-5 text-light mb-5">List Film</h2>

      <div class="row row-cols-1 row-cols-md-3 g-5">
        {list?.map((item) => (
          <div class="col" className="w-25">
            <div class="card mb-5 border border-none">
              <Image
                src={item?.film?.image}
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

export default ListFilm;
