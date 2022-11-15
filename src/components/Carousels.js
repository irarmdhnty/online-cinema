import React from "react";
import { Button, Carousel } from "react-bootstrap";

import carousel1 from "../assets/carousel1.svg";
import carousel2 from "../assets/carousel2.jpeg";
import carousel3 from "../assets/carousel3";

const Carousels = () => {
  return (
    <Carousel variant="transparant">
      <Carousel.Item>
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption className="bg-carousel text-start">
          <p className="bg-carousel mb-3 fs-1 fw-bold">
            {" "}
            <span className="text-danger bg-carousel">Dead</span> Pool
          </p>
          <h4 className="fw-bold bg-carousel">Action</h4>
          <h5 className="text-color fw-bold bg-carousel">Rp.99,000</h5>
          <p className="w-75 bg-carousel">
            Hold onto your chimichangas, folks. From the studio that brought you
            all 3 Taken films comes the block-busting, fourth-wall-breaking
            masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s
            perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL
            is a giddy slice of awesomeness packed with more twists than
            Deadpool’s enemies’ intestines and more action than prom night.
            Amazeballs!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="First slide" />
        <Carousel.Caption className="bg-carousel text-start">
          <p className="bg-carousel mb-3 fs-1 fw-bold">Trolls</p>
          <h4 className="fw-bold bg-carousel">Family</h4>
          <h5 className="text-color fw-bold bg-carousel">Rp.150,000</h5>
          <p className="w-75 bg-carousel">
            Queen Poppy later receives a letter from Barb, inviting her to bring
            her "string" to unite the trolls. Former King Peppy explains there
            were once six magical lyre strings that represented major tribes of
            music - Pop, Hard Rock, Techno, Funk, Classical, and Country.
            However, the six tribes took their strings and went their separate
            ways. Peppy, Branch, and the others don't trust Barb's invitation,
            but Poppy decides to sneak out with her string, to prove Barb is the
            same as any other troll. Branch (who is trying to confess his love)
            and Biggie (who stowed away) accompany her. At the same time, a
            giraffe-like Pop Troll named Cooper finds old illustrations of
            trolls his shape, and sets off to find them, eventually getting
            beamed up into a spaceship.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel3} alt="First slide" />
        <Carousel.Caption className="bg-carousel text-start">
          <p className="bg-carousel mb-3 fs-1 fw-bold">Tom & Jerry</p>
          <h4 className="fw-bold bg-carousel">Comedy</h4>
          <h5 className="text-color fw-bold bg-carousel">Rp.100,000</h5>
          <p className="w-75 bg-carousel">
            The series features comic fights between an iconic set of
            adversaries, a house cat (Tom) and a mouse (Jerry). The plots of
            each short usually center on Tom's numerous attempts to capture
            Jerry and the mayhem and destruction that follows. Tom rarely
            succeeds in catching Jerry, mainly because of Jerry's cleverness,
            cunning abilities, and luck. However, on several occasions, they
            have displayed genuine friendship and concern for each other's
            well-being. At other times, the pair set aside their rivalry in
            order to pursue a common goal, such as when a baby escapes the watch
            of a negligent babysitter, causing Tom and Jerry to pursue the baby
            and keep it away from danger, in the shorts Busy Buddies and Tot
            Watchers respectively. Despite their endless attacks on one another,
            they have saved each other's lives every time they were truly in
            danger, except in The Two Mouseketeers, which features an
            uncharacteristically morbid ending.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
