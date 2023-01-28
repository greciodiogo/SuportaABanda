import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useNavigate()
  const handleClickAbout = () => {
    router('/about')
  }
  
  return (
    <div className="header" id="header">
      {/* <img src={Logo} alt="" className="logo" /> */}
      <h2 className="novo-logo">🛠 Suporta a Banda</h2>
      {(menuOpened===false && mobile===true)? (
        <div
          style={{ backgroundColor: "#35a994", color:"white", padding: "0.5rem", borderRadius: "5px" }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            className="bars"
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Página Principal
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Porquê Nós?
            </Link>
          </li>
          <li >
            <Link
              onClick={handleClickAbout}
            >
              Sobre Nós
            </Link>
          </li>
          {/* <NavLink text="Porquê Nós?" to="reasons" /> */}
          {/* <NavLink text="Planos" to="plans" /> */}
          {/* <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li> */}
        </ul>
      )}
    </div>
  );
};


const NavLink = ({text,to,setMenuOpened}) => (
  <li>
   <Link
     onClick={() => setMenuOpened(false)}
     // activeClass="active"
     to={to}
     spy={true}
     smooth={true}
     >
   {text}
 </Link>
</li>
)

export default Header;
