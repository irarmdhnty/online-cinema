import React, { useContext, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Usercontext/Usercontex";

import { API } from "../config/api";

const ListFilm = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [user, setUser] = useState(null);

  const getUserProfile = async () => {
    const response = await API.get(`/user/${state.user.id}`);
    console.log(response.data.data);
    setUser(response.data.data);
  };

  useEffect(() => {
    getUserProfile();
  }, [state]);
  
  return (
    <Container>
      <h2 className="text-start mt-5 text-light mb-5">My List Film</h2>

      <div class="row row-cols-1 row-cols-md-3 g-5">
        {user?.transaction?.map((item) => (
          <div class="col" className="w-25">
          {item.status === "success" && (
            <div class="card mb-5 border border-none">
              <Image
                src={item?.film?.image}
                key={item?.id}
                onClick={() => navigate(`/transaction/${item.id}`)}
                className="w-100"
              />
            </div>
          )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ListFilm;
