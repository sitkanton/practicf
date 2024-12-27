import './Categories_Page.scss'
import Title from "../../components/title/Title.jsx";
import CategoryCard from "../../components/categoryCard/CategoryCard.jsx";
import {useSelector} from "react-redux";
import {allCategoriesSelector} from "../../store/categories/categoriesSlice.js";

export default function Categories_Page() {
    const categories = useSelector(allCategoriesSelector);
    return (
        <div className="CategoriesPage container">
            <Title
                title="Categories"
            />
            <div className="CategoriesPage__cards">
                {
                    categories.map(item => (
                        <CategoryCard
                            key={item.id}
                            title={item.title}
                            image={item.img}
                            link={`categories/${item.link}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}