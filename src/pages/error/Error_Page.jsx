import "./ErrorPage.scss"
import {useNavigate} from "react-router-dom";
import ButtonCard from "../../components/buttonCard/ButtonCard.jsx";

export default function Error_Page() {
    const navigate = useNavigate();

    return (
        <div className="ErrorPage container">
            <img src="/404.png" alt="404 Error"/>
            <h1>Page Not Found</h1>
            <p>We’re sorry, the page you requested could not be found.
                Please go back to the homepage.</p>
            <div className="ErrorPage__btn">
                <ButtonCard title='Go Home' onClick={() => navigate('/')}/>
            </div>
        </div>
    );
}