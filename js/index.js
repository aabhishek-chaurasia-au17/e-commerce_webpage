let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active'); 
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

const productdiv = document.querySelector('#product')

const productData = [
    {
        img: 'image/product-1.png',
        alt: 'product img',
        name: 'fresh orange',
        price: "₹40 Kg",
    },
    {
        img: 'image/product-2.png',
        alt: 'product img',
        name: 'fresh Onion',
        price: "₹60 Kg",
    },
    {
        img: 'image/product-3.png',
        alt: 'product img',
        name: 'fresh Meat',
        price: "₹140 Kg",
    },
    {
        img: 'image/product-4.png',
        alt: 'product img',
        name: 'fresh cabbage',
        price: "₹30 Kg",
    },
    {
        img: 'image/product-5.png',
        alt: 'product img',
        name: 'fresh potato',
        price: "₹100 Kg",
    },
    {
        img: 'image/product-6.png',
        alt: 'product img',
        name: 'fresh avocado',
        price: "₹90 Kg",
    },
    {
        img: 'image/product-7.png',
        alt: 'product img',
        name: 'fresh Carrot',
        price: "₹120 Kg",
    },
    {
        img: 'image/product-8.png',
        alt: 'product img',
        name: 'fresh sweet lemon',
        price: "₹50 Kg",
    },
]


function renderProduct(){
    let productHTML = ''
    productData.forEach((element, index) => {
        const {img, alt, name, price} = element || {}
        
        productHTML += `<div class='box'>
                            <img src="${img}" class="img1" alt="${alt}">
                            <h3>${name}</h3>
                            <div class="price">${price}</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <a href="#" class="btn">add to cart</a>
                        </div>`

    })
    productdiv.innerHTML = productHTML
}

renderProduct()