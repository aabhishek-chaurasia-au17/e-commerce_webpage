let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onmouseover = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active'); 
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onmouseover = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onmouseover = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onmouseover = () =>{
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
        rating: 3
    },
    {
        img: 'image/product-2.png',
        alt: 'product img',
        name: 'fresh Onion',
        price: "₹60 Kg",
        rating: 4
    },
    {
        img: 'image/product-3.png',
        alt: 'product img',
        name: 'fresh Meat',
        price: "₹140 Kg",
        rating: 5
    },
    {
        img: 'image/product-4.png',
        alt: 'product img',
        name: 'fresh cabbage',
        price: "₹30 Kg",
        rating: 3
    },
    {
        img: 'image/product-5.png',
        alt: 'product img',
        name: 'fresh potato',
        price: "₹100 Kg",
        rating: 4
    },
    {
        img: 'image/product-6.png',
        alt: 'product img',
        name: 'fresh avocado',
        price: "₹90 Kg",
        rating: 3
    },
    {
        img: 'image/product-7.png',
        alt: 'product img',
        name: 'fresh Carrot',
        price: "₹120 Kg",
        rating: 4
    },
    {
        img: 'image/product-8.png',
        alt: 'product img',
        name: 'fresh sweet lemon',
        price: "₹50 Kg",
        rating: 3
    },
]


function renderProduct(){
    let productHTML = ''
    productData.forEach((element, index) => {
        const {img, alt, name, price, rating} = element || {}
        let starts = productRating(rating)
        
        productHTML += `<div class='box'>
                            <img src="${img}" class="img1" alt="${alt}">
                            <h3>${name}</h3>
                            <div class="price">${price}</div>
                            <div class="stars" id='star'>
                            ${starts}
                            </div>
                            <button class="btn" onclick="addToCart(${index})">add to cart</button>
                        </div>`
    productRating(rating)
    })
    productdiv.innerHTML = productHTML
    
}
renderProduct()

function productRating(rating) {
    let starHtml = ""
    for(let i = 0; i < rating; i++){
        starHtml += `<i class="fas fa-star"></i>` 
    }
    return starHtml
}



function addToCart(index) {
    let productNumber = localStorage.getItem('itemNumber')

    productNumber = parseInt(productNumber);

    if(productNumber){
        localStorage.setItem('cartNumber', productNumber + 1)
    }else{
        localStorage.setItem('cartNumber', 1)
    }
}



