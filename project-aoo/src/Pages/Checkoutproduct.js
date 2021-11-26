import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import "./Checkoutproduct.css" 
import {useStateValue} from './ContextApi/StateProvider'
function Checkoutproduct({id,title,image,price,rating}) {
   const [{basket},dispatch ] =useStateValue() ;
   console.log(id,title,image,price,rating) ;
   const removeFromBasket = () =>
    {
        // remove item from basket ...
        console.log('from remove ', id )
        dispatch({

            type:'REMOVE_FROM_BASKET' ,
            id:id , 


        })

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
             src={image} alt="no img" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}</p> 
                
                <p className="checkoutProduct__price"> 
                   <small>$</small> 
                   <strong>{price}</strong>
                </p> 
                <div className="checkoutProduct__rating"> 
                   {Array(rating).fill().map((_)=>
                      <p> <StarIcon/></p>
                   )}

                </div> 
                <button onClick={removeFromBasket}> 
                    remove from basket</button>
            </div>
        </div>
    )
}

export default Checkoutproduct
