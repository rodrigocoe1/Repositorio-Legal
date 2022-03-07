import React from "react";
import './navbar.css';
import  a from '../Imagens/a.jpg'; 
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar(){
    return( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light NavBar">
            <div class="container-fluid">
                <Sitelegal src={a}/>
                <Link to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="" aria-current="page" href="#">Home 2</a>
                    </li>
                    <li class="nav-item">
                    <Link to="/Coisas_Legais">Coisas legais</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Coisas Bem Legais
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Coisas MUUUIIITOOOOO LEGAIS</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;

const Sitelegal = styled.img`
    width:25px;
    height:25px;
`;