import airbnbLogo from "../images/airbnb.png";
function NavBar() {
  return (
    <nav className="NavBar">
      <img src={airbnbLogo} className="LogoImage"></img>
    </nav>
  );
}
export default NavBar;
