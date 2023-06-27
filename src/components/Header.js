import Nav from "./Nav";
import logo from "../assets/Logo.svg";

function Header() {
    return (
        <header>
            <img src={logo} alt="logo"></img>
            <Nav></Nav>
        </header>
    )
}

export default Header;