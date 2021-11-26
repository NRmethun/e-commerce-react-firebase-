import React from 'react'
import './Subtotal.css' 
import CurrencyFormat  from 'react-currency-format';
import { SportsBasketball } from '@material-ui/icons';
import { useStateValue } from './ContextApi/StateProvider';
import { getBasketTotal } from './ContextApi/reducer';

function Subtotal() {
    const [{basket},dispatch] =useStateValue() ;
    return (
        <div className="subtotal"> 
        {/* pricing */} 
        <CurrencyFormat 
        renderText={(value)=> (
            <>
               <p>
                   Subtotal ({basket.length} item):
                   <strong>{` ${value}`}</strong> 
               </p> 
               <small className="subtotal__gift" >
                   <input type="checkbox" /> 
                   this order contains a gift
               </small>
            </>
        ) }
           
           decimalScale={2} 
           value={getBasketTotal(basket)} 
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
        />
        <button> proceed to checkout </button>
            
        </div>
    )
}

export default Subtotal
