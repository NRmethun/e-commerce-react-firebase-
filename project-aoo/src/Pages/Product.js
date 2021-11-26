import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './ContextApi/StateProvider';
function Product({ id, title, price, rating, image }) {
    const [{basket},dispatch ] =useStateValue() ;  
    const addToBasket =()=>{
        // add item to basket 
        dispatch({
            type: 'ADD_TO_BASKET' ,
            item: {
                id:id,
                title:title,
                image:image ,
                price : price ,
                rating : rating ,

            },
        }) ;
    } ;
    return (
        <div className="product">

            <div className="product_info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>

                </p>

                <div className="product__rating" >
                    {
                        Array(rating).fill()
                            .map((i) => (
                                <p> <StarIcon />  </p>
                            ))
                    }
                </div>

            </div>


            <img src={image} alt="not found" />
            <button onClick={addToBasket}>add to basket</button>

        </div>
    )
}

export default Product
