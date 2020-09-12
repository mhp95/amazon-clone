import React from "react";
import "./Home.css";
import Product from "./components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.overons.kpn/images/news/_1280xAUTO_crop_center-center_none/Amazon-Prime-Video.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={3}
          />
          <Product
            id="2"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={3}
          />
          <Product
            id="3"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={3}
          />
          <Product
            id="5"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            price={29.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
