import { useState, useEffect } from "react";
import "./user.css";
import axios from "axios";

const UserComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      {products.map((product, id) => (
        <div className="main-container">
          <div className="cards">
            <div className="card card-1">
              <div className="card__icon">
                <i className="fas fa-bolt"></i>
              </div>
              <p className="card__exit">
                <i className="fas fa-times"></i>
              </p>
              <h2 className="card__title" key={product.id}>
                {product.title}
              </h2>

              <p className="card__apply">
                <a className="card__link" href="#">
                  Php {product.price} <i className="fas fa-arrow-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserComponent;
