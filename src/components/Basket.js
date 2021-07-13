import React from 'react'

export default function Basket(props){
    const {cartItems, onAdd,  onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);
    const taxPrice = itemsPrice * 70;
    const totalPrice= itemsPrice + taxPrice;




    return (<aside className="block col-1">
        <h2> Carrito</h2>
        <div>
            {cartItems.length === 0 && <div>Carrito vacio</div>}
        </div>
        {cartItems.map((item)=> (
        <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button onClick={() => onAdd(item)} className="add"> + </button>
                <button onClick={() => onRemove(item)} className="remove"> - </button>
            </div>
            <div className="col-2" text-right>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>))    
        }
        {cartItems.length !== 0 && (
        <> 
        <hr></hr>
        <div className="row">
            <div className="col-2">Precios de los productos </div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div> 
            <div className="row">
              <div className="col-2">Impuestos</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
            <div className="col-2"><strong>Total a pagar</strong>
             </div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
            </div> 
            <hr />
            <div className="row">
            <button onClick={() => alert('Compra realizada')}>
                Comprar
              </button>

            </div>

        </>
        )
        }

        
        
        
    </aside>);
}