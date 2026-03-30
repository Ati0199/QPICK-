import "./Product.css";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../../../../service/service";

import ProductDescr from "./product-descr/ProductDescr";

// types
import { type IHeadphonesData } from "../../../../types";

interface IProps {
  toggleOnBasket: (id: string) => void;
}
export default function Product({ toggleOnBasket }: IProps) {
  const [headphone, setHeadphone] = useState<IHeadphonesData>();
  const { headphonesId } = useParams<string>();
  const [clicked, setClicked] = useState(false);
  const s = useMemo(() => new Service(), []);

  useEffect(() => {
    if (!headphonesId) return;
    s.getHeadphone(headphonesId).then(setHeadphone);
  }, [headphonesId]);

  const onDiscount = (price: number): number => {
    return price - (price * headphone?.discount!) / 100;
  };

  if (!headphone) return <div>loading</div>;
  return (
    <div className="product_block">
      <div>
        <div className="headphone headphone_single">
          <div className="headphone_img">
            <img src={`/${headphone.path}`} alt={headphone.productName} />
          </div>
          <div className="headphone_info">
            <span className="headphones_name">{headphone.productName}</span>
            <span className="headphone_price">
              {headphone.discount
                ? onDiscount(headphone.price)
                : headphone.price}
              ₸
              {headphone.discount ? (
                <div
                  style={{
                    textDecorationLine: "line-through",
                    color: "#FFCE7F",
                    fontSize: "13px",
                  }}
                >
                  {headphone.price}₸
                </div>
              ) : null}
            </span>
            <div className="headphone_rating">
              <img src="/prod_rating.svg" alt="" />
              <span>{headphone.rating}</span>
            </div>
          </div>
        </div>
        <div className="prod_btns">
          <a className="btn">Купить!</a>
          <a
            style={
              headphone.onBasket || clicked
                ? { backgroundColor: "#ffaa4d" }
                : { backgroundColor: "#101010" }
            }
            onClick={() => {
              setClicked((prev) => !prev);
              toggleOnBasket(headphone.id);
              s.onBasket(headphone.id, !headphone.onBasket);
            }}
            className="btn"
          >
            {`${headphone.onBasket || clicked ? "Добавлен в корзину" : "Добавить в корзину!"} `}
          </a>
        </div>
      </div>

      <div className="product_info">
        <h2>Описание и характеристики</h2>

        <ProductDescr data={headphone.description} />
      </div>
    </div>
  );
}
