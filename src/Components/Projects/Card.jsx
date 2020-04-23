import React from "react";
import { Button } from "reactstrap";
import ReactPlayer from "react-player";

//import Banner from "../../Components/Images/Banner.jpg";

const Card = (props) => {
  return (
    <div className="card text-centre">
      <div className="overflow">
        {/* <img src={props.imgsrc} alt="banner" className="card-img-top" /> */}
        <ReactPlayer url={props.player} className="card-img-top" />
      </div>
      <div className="card-body text-dark"></div>
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text text-secondary">
        I'm a junior full stack developer, looking to learn and work on creative
        and innovative ideas. I aim to create high-performance websites and
        applications that look beautiful on all devices and browsers.
      </p>
      <Button color="link">link</Button>
    </div>
  );
};

export default Card;
