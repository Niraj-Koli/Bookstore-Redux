import React from "react";

import classes from "./Header.module.css";

import CartButton from "../../Cart/CartButton/CartButton";

function Header() {
    return (
        <header className={classes.header}>
            <h1>Book Store</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
