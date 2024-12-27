import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Filter from "../../components/filter/Filter.jsx";
import {selectCategoryName} from "../../store/categories/categoriesSlice.js";
import {useParams} from "react-router-dom";
import {selectProductByCategory} from "../../store/products/productsSlice.js";


export default function Category_Page() {
    const {title} = useParams()
    const category = useSelector(selectCategoryName(title));
    const filtered = useSelector(selectProductByCategory(title));

    return (
        <div className="Sale container">
            <Title title={category}/>
            <Filter input={true}/>
            <div className="Sale__cards">
                {
                    filtered.length > 0
                        ? filtered.map(item => (
                            <ProductCard
                                key={item.id}
                                product={item}
                            />
                        ))
                        : <h2 className="no-product">No products available</h2>
                }
            </div>
        </div>

    )
}
