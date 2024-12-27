import {createSlice} from "@reduxjs/toolkit";

const categoriesList = [
    {id: 1, title: "49 Залпов", img: "/category1.png", link: "49"},
    {id: 2, title: "64 Залпа", img: "/category2.png", link: "64"},
    {id: 3, title: "25 Залпов", img: "/category3.png", link: "25"},
    {id: 4, title: "36 Залпов", img: "/category4.png", link: "36"},
    {id: 5, title: "48 Залпов", img: "/category5.jpg", link: "48"},
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: categoriesList,
    reducers: {},
    selectors: {
        allCategoriesSelector: state => state,
        categoryNamesSelector: state => {
            return state.map(category => {
                return {title: category.title, link: category.link};
            });
        }
    }
})

export const selectCategoryName = (link) => (state) =>
    state.categories.find((category) => category.link === link).title;

export const { allCategoriesSelector, categoryNamesSelector } = categoriesSlice.selectors
export default categoriesSlice.reducer;