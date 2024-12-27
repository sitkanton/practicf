import './Sale.scss'
import Title from "../title/Title.jsx";
import ProductCard from "../productCard/ProductCard.jsx";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


export default function Sale() {
    const navigate = useNavigate();
    const discountedProducts = useSelector((state) =>
        state.products.allProducts.filter((product) => product.discount)
    );

    return (
        <section className="Sale container">
            <Title
                title="Sale"
                subtitle="All sales"
                onClick={() => navigate('/sales')}
            />
            <div className="Sale__cards">
                {
                    discountedProducts.slice(0, 4).map((item, index) => (
                        <ProductCard
                            key={index}
                            product={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
