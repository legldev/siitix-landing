import mainlogo from "../../assets/mainbg.png";

function Header() {
  return (
    <div className="mainbg">
      <img src={mainlogo} alt="logo" className="logo" />
    </div>
  );
}

export default Header;
