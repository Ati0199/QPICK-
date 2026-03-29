import { Link } from "react-router-dom";
import "./EmptyBasket.css";
export default function EmptyBasket() {
  console.log(1);
  return (
    <div className="empty_basket-block">
      <img src="/big-basket.png" alt="" />
      <span>Корзина пуста</span>
      <p>Но это никогда не поздно исправить </p>
      <Link className="btn" to="/">
        В каталог товаров
      </Link>
    </div>
  );
}
