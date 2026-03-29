import "./HeadphonesListItem.css";
import { Link } from "react-router-dom";
import Service from "../../../../service/service";

import { useToggleFavorite } from "../../../../App";
import { useMemo } from "react";
import { type IHeadphonesData } from "../../../../types";

interface IProps {
  headphones: IHeadphonesData;
}

export default function HeadphonesListItem({ headphones }: IProps) {
  const s = useMemo(() => new Service(), []);
  const toggleFavorite = useToggleFavorite();

  const onDiscount = (price: number): number => {
    return price - (price * headphones.discount) / 100;
  };

  const { id, discount, path, price, productName, rating, isFavorite } =
    headphones;

  return (
    <div className="headphone">
      <img
        onClick={() => {
          s.changeData(id, !isFavorite);
          toggleFavorite(id);
        }}
        className="headphone_fav"
        src={`${isFavorite ? "product_fav_checked.svg" : "product_fav.svg"}`}
        alt=""
      />
      <Link className="headphone_img" to={`/headphones/${id}/`}>
        <img src={`/${path}`} alt={productName} />
      </Link>
      <div className="headphone_info">
        <span className="headphones_name">{productName}</span>
        <span className="headphone_price">
          {discount ? onDiscount(price) : price} ₸
          {discount ? (
            <div
              style={{
                textDecorationLine: "line-through",
                color: "#FFCE7F",
                fontSize: "13px",
              }}
            >
              {price}₸
            </div>
          ) : null}
        </span>
        <div className="headphone_rating">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6661 17.6026L4.45543 21.9608L6.41572 13.8272L0 8.38856L8.42139 7.72087L11.6661 0L14.9107 7.72087L23.3333 8.38856L16.9164 13.8272L18.8767 21.9608L11.6661 17.6026Z"
              fill="#FFCE7F"
            />
          </svg>

          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
