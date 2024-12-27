import './Header.scss';
import ButtonCard from "../buttonCard/ButtonCard.jsx";

export default function Header() {
    return (
        <div className="Header">
            <div className='shadow'></div>
            <div className="container">
                <div className="content">
                    <h1>Amazing Discounts on Firework Products!</h1>
                    <div className='btn'>
                        <ButtonCard
                            title='Check Out'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
