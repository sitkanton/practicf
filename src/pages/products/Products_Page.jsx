import Title from "../../components/title/Title.jsx";
import {useSelector} from "react-redux";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Filter from "../../components/filter/Filter.jsx";


export default function Products_Page() {
    const filtered = useSelector((state) => state.products.filteredProducts)


    return (
        <div className="Sale container">

            <Title title="All Products"/>
            <Filter input={true}/>
            <div className="Sale__cards">
                {
                    filtered.map(item => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))
                }
            </div>
        </div>

    )
}
