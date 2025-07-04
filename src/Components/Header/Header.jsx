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
<<<<<<< HEAD
        
        <h1>
          Lojas
        </h1>
        
=======

        <h1>
          Lojas
        </h1>

>>>>>>> 33dad7a (Projeto site de vendas)
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
<<<<<<< HEAD
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
=======

            <Link to={"/CreatePerfil"} href="">
              {" "}
              <li className="icons-itens">
                <button>
                  <span className="material-symbols-outlined">person</span>
                </button>
              </li>
            </Link>



            <Link to={"/Carrinho"} href="">
              {" "}
              <li className="icons-itens">
                <button>
                  <span className="material-symbols-outlined">shopping_cart</span>
                </button>
              </li>
            </Link>
>>>>>>> 33dad7a (Projeto site de vendas)
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
<<<<<<< HEAD
          <Link to={"/contatos"} href="contact">
            {" "}
            <li className="category-itens">Contato</li>{" "}
          </Link>
          <Link to={""} href="">
=======
          <Link to={"/Contacts"} href="contact">
            {" "}
            <li className="category-itens">Contato</li>{" "}
          </Link>
          <Link to={"/Ajuda"} href="">
>>>>>>> 33dad7a (Projeto site de vendas)
            {" "}
            <li className="category-itens">Politica e privacidade</li>{" "}
          </Link>
        </ul>
      </section>

      {
<<<<<<< HEAD
        openProfile && <DropdownHeader/>
      }
    
=======
        openProfile && <DropdownHeader />
      }

>>>>>>> 33dad7a (Projeto site de vendas)
    </header>
  );
}
