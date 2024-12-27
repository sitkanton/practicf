import './Categories.scss'
import Title from "../title/Title.jsx";
import CategoryCard from "../categoryCard/CategoryCard.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {allCategoriesSelector} from "../../store/categories/categoriesSlice.js";

export default function Categories() {
    const navigate = useNavigate();
    const categories = useSelector(allCategoriesSelector);

    return (
        <section className="Categories container">
            <Title
                title="Categories"
                subtitle="All categories"
                onClick={() => navigate('/categories')}
            />
            <div className="Categories__cards">
                {
                    categories.slice(0,4).map((item, index) => (
                        <CategoryCard
                            key={index}
                            title={item.title}
                            image={item.img}
                            link={`categories/${item.link}`}
                        />
                    ))
                }
            </div>
        </section>
    )
}
