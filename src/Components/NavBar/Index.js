import React from "react";
import './navbar.css';


function Navbar(){
    return( 
        <>
        <nav class="navbar navbar-expand-lg navbar-light NavBar">
            <div class="container-fluid">
                <a class="" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="" aria-current="page" href="#">Home 2</a>
                    </li>
                    <li class="nav-item">
                    <a class="" href="#">coisas legais</a>
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