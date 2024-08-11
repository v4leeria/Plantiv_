import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function UncontrolledExample() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item key="1">
          <img
            src="https://images.pexels.com/photos/22610794/pexels-photo-22610794/free-photo-of-modelo-estampado-planta-cacerola.jpeg"
            alt="Compras a nivel nacional"
            className="d-block "
          />
          <Carousel.Caption className="textsCarousel">
            <h3>Compras a nivel nacional</h3>
            <p>Envíos gratis</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key="2">
          <img
            src="https://images.pexels.com/photos/5604376/pexels-photo-5604376.jpeg"
            alt="Comparte con la comunidad"
            className="d-block "
          />
          <Carousel.Caption className="textsCarousel">
            <h3>Comparte con la comunidad</h3>
            <p>Amantes de las plantas por Chile</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item key="3">
          <img
            src="https://images.pexels.com/photos/4505161/pexels-photo-4505161.jpeg"
            alt="Publica tus plantas"
            className="d-block "
          />
          <Carousel.Caption className="textsCarousel">
            <h3>Publica tus plantas</h3>
            <p>No dudes en compartir vida y belleza</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
