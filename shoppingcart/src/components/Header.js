import React from 'react';

function Header(props) {
    const {cartCounter} = props;
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                Cart{''}
                {cartCounter ? (
                    <button className="badge">{cartCounter}</button>
                ): ('')} 
                </a> {' '}
                <a href="#/signin"> SignIn</a>
            </div>
        </header>
    );
}

export default Header;