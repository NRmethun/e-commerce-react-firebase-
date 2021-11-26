import React from 'react'
import { useStateValue } from './ContextApi/StateProvider';
import './Checkout.css'
import Subtotal from './Subtotal';
import Checkoutproduct from './Checkoutproduct';
import CurrencyFormat  from 'react-currency-format';
function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout"> 
            <div className="checkout__left">

            
            <img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/MaloneLP/9XYZ_header.jpg" alt="not found" />
            {basket?.length === 0 ?
                (
                    <div>  <h2> Your Shopping Basket is empty</h2>
                        <p>You have no item in your basket.
                            to buy somthing  click
                            "Add to basket btn behind each product "
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping basket  </h2>
                        {basket.map(item =>

                        (
                            <Checkoutproduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))

                        }
                    </div>
                )
            } 
            </div>  
            {basket.length > 0 &&  (
                 <div className="checkout__right">
                     <Subtotal />

                 </div>
            ) }

        </div>
    )
}

export default Checkout
