import {createSlice} from '@reduxjs/toolkit';

const productsList = [
    {
        id: 1,
        title: 'Супер-Пупер',
        category: '49',
        description:
        'Зеленые хвосты, переходящие в зеленые жемчужины с красным мерцанием. Синие парчовые кометы с красными жемчужинами на концах. Красные хвосты, раскрывающиеся красными жемчужинами с белым мерцанием. Хвосты дракона в цветных пионах и трещащих хризантемах. В финале залп из висячих ив и цветных пионов в мерцающих стробах',
        discount: 50,
        initialPrice: 5000,
        img: '/product1.png',
        date: '2024-12-15',
    },
    {
        id: 2,
        title: 'Выше крыши',
        category: '49',
        description:
            'Золотая пальма с красным жемчугом переходит в парчовую хризантему с синим бисером. Белая хризантема с крупным зеленым жемчугом меняется на парчовую пальму с мерцающим стробоскопом. Зеленая хвостатая корона с синим жемчугом ярко разрывается на тысячу трещащих хризантем. Прекрасный двойной финал!',
        discount: 34,
        initialPrice: 5200,
        img: '/product2.png',
        date: '2024-09-04',
    },
    {
        id: 3,
        title: 'Зимняя Сказка',
        category: '25',
        description:
            'Зеленые хвосты, переходящие в зеленые жемчужины с красным мерцанием. Синие парчовые кометы с красными жемчужинами на концах. Красные хвосты, раскрывающиеся красными жемчужинами с белым мерцанием. Хвосты дракона в цветных пионах и трещащих хризантемах. В финале залп из висячих ив и цветных пионов в мерцающих стробах.',
        discount: 25,
        initialPrice: 5500,
        img: '/product3.png',
        date: '2024-06-12',
    },
    {
        id: 4,
        title: 'Кэшбек',
        category: '25',
        description:
            'Многообразие световых и звуковых эффектов на любой вкус, длительность и высота салюта, подкреплен свистящими форсами и красными, синими и зелеными сферами со скоростью света поднимут настроение Вашему празднику. Фиолетовый крупный жемчуг с белыми форсами меняется на крупный и мелкий трещащий дождь. Тысяча цветных хризантем без промедления меняют друг друга создавая яркий, цветастый, веселый новогодний кипишь.',
        discount: 17,
        initialPrice: 5100,
        img: '/product4.png',
        date: '2024-12-17',
    },
    {
        id: 5,
        title: 'Бомбический',
        category: '36',
        description:
            'Парчовая пальма с красным жемчугом переходит в корону с синим жемчугом, яркая пальма с мерцающим белым жемчугом переходит в корону с розовой, мерцающей хризантемой, прекрасный финал из парчовых корон.',
        discount: 26,
        initialPrice: 5600,
        img: '/product5.png',
        date: '2024-07-23',
    },
    {
        id: 6,
        title: 'Жара',
        category: '36',
        description:
            'С таким эффектом кайфовать будет очень легко. Золотые короны, парчовые пальмы, огромные хризантемы переплетаются с красным, синим и зеленым жемчугом. Чудесный финальный залп поддаст перца в ваш шикарный вечер',
        discount: 34,
        initialPrice: 6000,
        img: '/product6.png',
        date: '2024-10-12',
    },
    {
        id: 7,
        title: 'На Высоте',
        category: '64',
        description:
            'Свистящая комета разрывается на зеленый пион с трещащим облаком и мерцающими звездами, розовая пальма с зеленым жемчугом и в трещащем облаке переходит в парчовую корону и висячие пальмы в финале.',
        discount: null,
        initialPrice: 5000,
        img: '/product7.png',
        date: '2024-02-16',
    },
    {
        id: 8,
        title: 'Маленький принц',
        category: '48',
        description:
            'В этой батареи есть все, и залпы корон из красных и зеленых хвостатых комет, и цветные хризантемы, и парчовые пальмы, и даже спиральные хвосты в сопровождении свистящих комет',
        discount: null,
        initialPrice: 6000,
        img: '/product8.png',
        date: '2023-03-11',
    },
    {
        id: 9,
        title: 'Мал да удал',
        category: '48',
        description:
            'Красные хвосты с зеленым и белым стробоскопом переходит в зеленый хвост красной пальмы с треском. Синий хвост парчи с красной жемчужиной и красные хвосты с белыми стробами. Зеленый хвост голубой жемчужины с треском и свистом, синий хвост с красной жемчужиной и треском',
        discount: null,
        initialPrice: 5000,
        img: '/product9.png',
        date: '2024-09-25',
    },
    {
        id: 10,
        title: 'Солнце Ацтеков',
        category: '64',
        description:
            'Золотые мерцающие сферы, зеленые мерцающие сферы, синие мерцающие сферы, фиолетовые сферы, парчовые стрелы и белые мерцающие звездочки,  крупные жемчужины и изумруды, залп из разноцветных сфер.',
        discount: null,
        initialPrice: 5600,
        img: '/product10.png',
        date: '2024-01-14',
    },
    {
        id: 11,
        title: 'Зимушка-Зима',
        category: '64',
        description:
            'Красная хвостатая пальма с фиолетовым жемчугом, парчовая пальма с зелеными звездами, трещащие хризантемы, белые и голубые стробы, синий и зеленый пион с мерцающими огнями. Тигровые, хвостатые кометы и облако трещащих хризантем. Спиральные форсы и красивые хризантемы с трещащим густым облаком',
        discount: 18,
        initialPrice: 5800,
        img: '/product11.png',
        date: '2023-01-17',
    },
];

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: productsList,
        filteredProducts: productsList,
        cart: [],
    },
    reducers: {
        filterReducer: (state, action) => {
            const {from, to, check, selectedOption} = action.payload;


            state.filteredProducts = state.allProducts.filter((product) =>
                !from && !to
                    ? true
                    : product.initialPrice >= (from || 0) &&
                    product.initialPrice <= (to || 10000)
            );
            if (check) {
                state.filteredProducts = state.filteredProducts.filter((elm) =>
                    check === true ? elm.discount : true
                );
            }
            switch (selectedOption) {
                case 'newest':
                    state.filteredProducts = state.filteredProducts
                        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                        .filter((elm) => (action.payload === true ? elm.discount : true));
                    break;
                case 'high-low':
                    state.filteredProducts = state.filteredProducts.sort(
                        (a, b) =>
                            (b.discount
                                ? b.initialPrice * (1 - b.discount / 100)
                                : b.initialPrice) -
                            (a.discount
                                ? a.initialPrice * (1 - a.discount / 100)
                                : a.initialPrice)
                    );
                    break;
                case 'low-high':
                    state.filteredProducts = state.filteredProducts.sort(
                        (a, b) =>
                            (a.discount
                                ? a.initialPrice * (1 - a.discount / 100)
                                : a.initialPrice) -
                            (b.discount
                                ? b.initialPrice * (1 - b.discount / 100)
                                : b.initialPrice)
                    );
                    break;
                case 'default':
                    state.filteredProducts = state.filteredProducts.sort(
                        (a, b) => a.id - b.id
                    );
                    break;
            }
        },

        addCart: (state, action) => {
            if (!action.payload) {
                return;
            }
            const {quantity, totalPrice, id} = action.payload;
            const index = state.cart.findIndex((item) => item.id === id);
            if (index !== -1) {
                state.cart[index].quantity = quantity;
                state.cart[index].totalPrice = totalPrice;
            } else {
                state.cart.push(action.payload);
            }
        },

        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        emptyCart: (state) => {
            state.cart = [];
        }
    },

    selectors: {
        totalCartQuantity: state => state.cart.reduce((total, item) => total + item.quantity, 0),
        getTotalPrice: (state) => state.cart.reduce((total, item) => {
            return total + item.totalPrice;
        }, 0).toFixed(2).replace('.', ','),
        onlyDiscountedProducts: (state) => state.filteredProducts.filter((item) => item.discount)
    }
});

export const selectProductById = (id) => (state) =>
    state.products.allProducts.find((product) => product.id === id);

export const selectProductByCategory = (category) => (state) =>
    state.products.filteredProducts.filter(
        (product) => product.category === category
    );

export const selectIsProductInCart = (id) => (state) =>
    state.products.cart?.some(item => item.id === id)


export const {totalCartQuantity, getTotalPrice, onlyDiscountedProducts} = productsSlice.selectors;

export const {
    filterReducer,
    addCart,
    deleteCart,
    emptyCart
} = productsSlice.actions;
export default productsSlice.reducer;
