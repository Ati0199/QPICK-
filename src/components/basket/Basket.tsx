import "./Bakset.css";
import EmptyBasket from "../empty-basket/EmptyBasket";
import { type IProd } from "../../types";

interface IProps {
  product: IProd[];
}

export default function Basket({ product }: IProps) {
  const prodTotalprice = (prod: IProd[]) => {
    return prod.map((item) => item.price).reduce((prev, curr) => prev + curr);
  };

  if (!product.length) return <EmptyBasket />;

  return (
    <>
      <div className="prod_service">
        {product.map((prod, i) => {
          return (
            <div key={i} className="prod-service-info">
              <div className="prod_count-block">
                <img src={`/${prod.path}`} alt="" />
                <div className="prod_count_block">
                  <button className="prod_count-btn">-</button>
                  <span className="prod_count">1</span>
                  <button className="prod_count-btn">+</button>
                </div>
              </div>
              <div>
                <h2 className="prod_name">{prod.productName}</h2>
                <span className="prod_price">{prod.price} ₸</span>
              </div>
              <span className="prod_price-single">{prod.price} ₸</span>
            </div>
          );
        })}

        <div className="prod_service-delivery"></div>
      </div>
      <div className="prod_proccesed">
        <div className="prod_proccesed-info">
          <p>ИТОГО</p>
          <span className="prod_total-price">
            ₸ {prodTotalprice(product)}
            {/*count*/}
          </span>
        </div>
        <a className="btn">Перейти к оформлению</a>
      </div>
    </>
  );
}
