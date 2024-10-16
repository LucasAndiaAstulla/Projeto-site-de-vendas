import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

import Logo from "../assets/Logo.svg";
import DropdownHeader from "./DropdowHeader/DropdownHeader";

export default function index() {

  const [openProfile, setOpenProfile] = useState(false)

  return (
    <header id="header">
      <section className="navegation">
        <div id="logo">
          <a href="/" className="brand">
            <img src={Logo} alt="Logo" className="logoPage" />
          </a>
        </div>
        
        <h1>
          Lojas
        </h1>
        
        <nav>
          <input
            type="text"
            id=""
            placeholder=" O que você está procurando?"
            className="search_input"
          />
          <button className="search_Button">
            <span className="material-symbols-outlined">search</span>
          </button>
        </nav>

        <div className="icons">
          <ul>
            <li className="icons-itens">
              <button>
                <span className="material-symbols-outlined">person</span>
              </button>
            </li>
            <li className="icons-itens">
              <button>
                <span className="material-symbols-outlined">shopping_cart</span>
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="menu-banner">
        <ul>
          <Link to={"/categorias"} href="">
            {" "}
            <li className="category-itens" onClick={() => setOpenProfile((prev) => !prev)}>Categorias</li>{" "}
          </Link>
          <Link to={""} href="">
            {" "}
            <li className="category-itens">Novidades</li>{" "}
          </Link>
          <Link to={""} href="">
            {" "}
            <li className="category-itens">Promoções</li>{" "}
          </Link>
          <Link to={"/contatos"} href="contact">
            {" "}
            <li className="category-itens">Contato</li>{" "}
          </Link>
          <Link to={""} href="">
            {" "}
            <li className="category-itens">Politica e privacidade</li>{" "}
          </Link>
        </ul>
      </section>

      {
        openProfile && <DropdownHeader/>
      }
    
    </header>
  );
}
