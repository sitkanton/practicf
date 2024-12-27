import './CategoryCard.scss';
import {Link} from "react-router-dom";

export default function CategoryCard({title, link, image}) {
    return (
        <div className="CategoryCard">
            <Link to={`/${link}`}>
                <img src={image} alt={title}/>
            </Link>
            <Link to={link}>{title}</Link>
        </div>
    );
}
