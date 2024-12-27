import {useEffect} from 'react'
import './Modal.scss'

export default function Modal({toggleModal}) {
    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target;
            if (target.className === 'Modal__background') {
                toggleModal();
            }
        }
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [toggleModal])

    return (
        <div className='Modal'>
            <div className='Modal__background'/>
            <div className="Modal__text">
                <h2>Congratulations!</h2>
                <p>Your order has been successfully placed on the website..</p>
                <p>A manager will contact you shortly to confirm your order.</p>
                <span onClick={toggleModal}>&#x2715;</span>
            </div>
        </div>
    )
}