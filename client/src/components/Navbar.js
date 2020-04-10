import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navar() {
    return (
        <header class="navbar"
        style={{
            backgroundColor: "grey",
        }}
        >
                <a style={{
                    color: "black"
                }} href="..." class="navbar-brand mr-2">Google Books</a>
                <NavLink style={{
                    color: "black"
                }} to="/search" class="btn btn-link">Search</NavLink>
                <NavLink style={{
                    color: "black"
                }} to="/saved" class="btn btn-link">Saved</NavLink>
        </header>
    );
}