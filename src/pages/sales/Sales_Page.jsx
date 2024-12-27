import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Filter from "../../components/filter/Filter.jsx";
import {onlyDiscountedProducts} from "../../store/products/productsSlice.js";

export default function Sales_Page() {
    const discountedProducts = useSelector(onlyDiscountedProducts);
    return (
        <div className="Sale container">
            <Title title="Discounted items"/>
            <Filter input={false}/>
            <div className="Sale__cards">
                {
                    discountedProducts.map((item, index) => (
                        <ProductCard
                            key={index}
                            product={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}