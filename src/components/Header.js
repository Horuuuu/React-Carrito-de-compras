import React from 'react'

export default function Header(props){
    const {countCartItems} = props;
    return (
        <header className="row block center">
            <div>
                <h1>Carrito de compras React</h1>
            </div>
            <div>
                <a href="#">Carrito
                {''}
                {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ) : (
                    ''
                )}
                
                </a>{ ''}
            </div>
        </header>
    );
}