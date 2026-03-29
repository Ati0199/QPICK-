import "./FooterMenu.css";
import { Link } from "react-router-dom";

export default function FooterMenu() {
  return (
    <div className="footer_refs">
      <div className="footer_menu">
        <ul>
          <li>
            <Link className="f_link" to={"/favorite"}>
              Избранное
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="f_link" to={"/basket"}>
              Корзина
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="f_link" to={"/contact"}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer_service-tr">
        <p>Условия сервиса</p>
      </div>
    </div>
  );
}
