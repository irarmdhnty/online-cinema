import React from "react";
import { Container, Image } from "react-bootstrap";
import { useQuery } from "react-query";

import film1 from "../assets/film1.svg";
import { API } from "../config/api";

const ListFilm = () => {
  let { data: list, refetch } = useQuery("listCache", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });
  return (
    <Container>
      <h1 className="text-light mb-5">My List Film</h1>

      <Image src={film1} />
    </Container>
  );
};

export default ListFilm;
