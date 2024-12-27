import './CartCard.scss';
import AddCounter from "../addCounter/AddCounter.jsx";
import {useDispatch} from 'react-redux';
import {addCart, deleteCart} from '../../store/products/productsSlice.js';

export default function CartCard({product, deleteProduct}) {
    const dispatch = useDispatch()
    const {id, title, quantity, initialPrice, discountPrice, img, totalPrice} = product;

    const handleQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            dispatch(deleteCart(id))
        } else {
            const totalPrice = discountPrice ? discountPrice * newQuantity : initialPrice * newQuantity;
            dispatch(
                addCart({
                    id,
                    quantity: newQuantity,
                    totalPrice: totalPrice,
                })
            );

        }
    }

    return (
        <div className='CartCard'>
            <div className="CartCard__img">
                <img src={img} alt={title}/>
            </div>
            <div className='CartCard__info'>
                <h4>{title}</h4>
                <div className="price">
                    <AddCounter
                        count={quantity}
                        handleDecrement={() => handleQuantity(id, quantity - 1)}
                        handleIncrement={() => handleQuantity(id, quantity + 1)}
                    />
                    <h2>${discountPrice ? totalPrice : (initialPrice * quantity)}</h2>
                    {
                        discountPrice !== initialPrice && <h5>${initialPrice * quantity}</h5>
                    }
                </div>
            </div>
            <span onClick={deleteProduct}>&#x2715;</span>
        </div>
    );
}

