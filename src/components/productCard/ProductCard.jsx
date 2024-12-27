import './ProductCard.scss';
import {Link} from "react-router-dom";
import ButtonCard from "../buttonCard/ButtonCard.jsx";
import {useDispatch, useSelector} from 'react-redux';
import {addCart, selectIsProductInCart} from '../../store/products/productsSlice.js';

export default function ProductCard({product}) {
    const salePrice = (price, discount) => {
        return Math.ceil(price * (100 - discount) / 100);
    };

    const dispatch = useDispatch()

    const {id, title, initialPrice, discount, img} = product;

    const isAdded = useSelector(selectIsProductInCart(id))

    const handeAddCart = () => {
        const productAdd = {
            id: id,
            title: title,
            initialPrice: initialPrice,
            discountPrice: salePrice(initialPrice, discount),
            quantity: 1,
            totalPrice: salePrice(initialPrice, discount),
            img: img
        }
        dispatch(addCart(productAdd))
    }

    return (
        <div className="ProductCard">
            <div className="ProductCard__image">
                {
                    discount &&
                    <div className="discount">
                        <p>-{discount}%</p>
                    </div>
                }
                <div className="btn">
                    <ButtonCard
                        title={isAdded ? 'Added' : 'Add to cart'}
                        added={isAdded}
                        onClick={handeAddCart}
                    />
                </div>
                <img src={img} alt={title}/>
            </div>
            <div className="ProductCard__title">
                <Link to={`/products/${id}`}>{title}</Link>
                <div className="price">

                    <h2>${discount ? salePrice(initialPrice, discount) : initialPrice}</h2>
                    {
                        discount && <h5>${initialPrice}</h5>
                    }
                    {isAdded}
                </div>
            </div>
        </div>
    );
}
