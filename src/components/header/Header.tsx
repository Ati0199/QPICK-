import "./Header.css";

import Logo from "./logo/Logo";
import PhoneBrend from "./phone_brend/PhoneBrend";
import HeaderButtons from "./header_buttons/HeaderButtons";

interface IProps {
  favCount: number;
  onBasketCount: number;
}

export default function Header({ favCount, onBasketCount }: IProps) {
  return (
    <div className="container">
      <div className="header">
        <div className="header_lp">
          <Logo />
          <PhoneBrend />
        </div>
        <HeaderButtons favCount={favCount} onBasketCount={onBasketCount} />
      </div>
    </div>
  );
}
