import Logo from "../header/logo/Logo";
import FooterMenu from "./footer-menu/FooterMenu";
import FooterSocial from "./footer-social/FooterSocial";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Logo />
      <FooterMenu />
      <FooterSocial />
    </div>
  );
}
