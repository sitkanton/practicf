import './Cart_Page.scss'
import {useState} from "react";
import Modal from "../../components/modal/Modal.jsx";
import Title from "../../components/title/Title.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import CartCard from "../../components/cartCard/CartCard.jsx";
import {deleteCart, emptyCart, getTotalPrice, totalCartQuantity} from "../../store/products/productsSlice.js";
import ButtonCard from "../../components/buttonCard/ButtonCard.jsx";
import {useForm} from 'react-hook-form';

export default function Cart_Page() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const cartList = useSelector((state) => state.products.cart)
    const toggleModal = () => {
        setIsOpen(!isOpen);

        if (isOpen && submitted) {
            dispatch(emptyCart())
            setSubmitted(false);
        }
    }

    const totalProducts = useSelector(totalCartQuantity)
    const totalPrice = useSelector(getTotalPrice)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm();


    const dispatch = useDispatch()
    const onSubmit = () => {
        setIsOpen(true);
        setSubmitted(true);
        reset();
    };
    const handleDelete = (id) => {
        dispatch(deleteCart(id))
    }
    return (
        <div className='CartPage container'>
            <Title title="Shopping cart" subtitle="Back to store" onClick={() => navigate('/')}/>
            {
                isOpen &&
                <Modal
                    isOpen={isOpen}
                    toggleModal={toggleModal}
                />
            }
            {
                !totalProducts ?
                    <div className="empty">
                        <p>Looks like you have no items in your basket currently.</p>
                        <div>
                            <ButtonCard
                                title='Continue Shopping'
                                onClick={() => navigate('/products')}
                            />
                        </div>
                    </div>

                    : <div className="Cart">
                        <div className="Cart__products">
                            {
                                cartList.map(product => (
                                    <CartCard
                                        key={product.id}
                                        product={product}
                                        deleteProduct={() => handleDelete(product.id)}
                                    />
                                ))
                            }
                        </div>
                        <div className="Cart__order">
                            <div className="title">
                                <h2>Order Details</h2>
                                <h3>{totalProducts} Items</h3>
                                <div>
                                    <h3>Total</h3>
                                    <h2>${totalPrice}</h2>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text"
                                       {...register('UserName', {
                                           required: "This field is required",
                                           minLength: {
                                               value: 3,
                                               message: 'Username must be at least 3 characters long',
                                           },
                                           maxLength: {
                                               value: 20,
                                               message: 'Username must be no more than 20 characters',
                                           },
                                       })}
                                       placeholder="Name"
                                />
                                {errors.UserName && (
                                    <span style={{color: '#282828'}}>{errors.UserName.message}</span>
                                )}
                                <input placeholder="Phone number"
                                       type="tel"
                                       {...register('PhoneNumber', {
                                           required: 'This field is required',
                                           pattern: {
                                               value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
                                               message: 'Enter a valid phone number',
                                           },
                                       })}/>
                                {errors.PhoneNumber && (
                                    <span style={{color: '#282828'}}>
								{errors.PhoneNumber.message}
							</span>
                                )}
                                <input placeholder="Email"
                                       type="email"
                                       {...register('Email', {
                                           required: 'This field is required',
                                           pattern: {
                                               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                               message: 'Enter a valid email address',
                                           },
                                       })} />
                                {errors.Email && (
                                    <span style={{color: '#282828'}}>{errors.Email.message}</span>
                                )}
                                <ButtonCard
                                    title={submitted ? 'The order is placed' : 'Order'}
                                    added={submitted}
                                />
                            </form>
                        </div>
                    </div>
            }
        </div>
    )
}