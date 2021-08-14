import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34u8acNielR-lRLPA-A8NcXLqXqmfqCKylQ&usqp=CAU"
                />

                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating} />
                    ))}
                    {/* <CheckoutProduct id={} image={} title={} price={} rating={}/> */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
