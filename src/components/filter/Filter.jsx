import "./Filter.scss";
import {useEffect, useState} from "react";
import {
    filterReducer,
} from "../../store/products/productsSlice.js";
import {useDispatch} from "react-redux";
import ChevronBottomIcon from "@assets/ChevronBottomIcon.jsx";

export default function Filter({input}) {
    const dispatch = useDispatch();

    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const [check, setCheck] = useState(false);
    const [selectedOption, setSelectedOption] = useState("default");

    const handlePriceFromChange = (e) => {
        setPriceFrom(e.target.value);
    };

    const handlePriceToChange = (e) => {
        setPriceTo(e.target.value);
    };

    const filterCheck = () => {
        let newCheck = !check;
        setCheck(newCheck);
    };

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    };

    useEffect(() => {
        dispatch(filterReducer({from: priceFrom, to: priceTo, check, selectedOption}));
    }, [priceFrom, priceTo, selectedOption, check])

    return (
        <div className="filters">
            <div className="filter">
                <h3>Price</h3>
                <input
                    type="number"
                    value={priceFrom}
                    placeholder="from"
                    onChange={handlePriceFromChange}
                />
                <input
                    type="number"
                    placeholder="to"
                    value={priceTo}
                    onChange={handlePriceToChange}
                />
            </div>

            {
                input ? <div className="filter">
                    <label className="custom-checkbox">
                        Discounted Items
                        <input type="checkbox" onChange={filterCheck} checked={check}/>
                        <span/>
                    </label>
                </div> : null
            }

            <div className="filter">
                <div className="custom-select">
                    <ChevronBottomIcon/>
                    <label className="select">
                        Sorted
                        <select value={selectedOption} onChange={handleOptionChange}>
                            <option value="default">by default</option>
                            <option value="newest">newest</option>
                            <option value="high-low">price: high-low</option>
                            <option value="low-high">price: low-high</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
}
