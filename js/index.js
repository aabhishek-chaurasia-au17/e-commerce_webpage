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
        rating: 3,
        inCart: 0
    },
    {
        img: 'image/product-2.png',
        alt: 'product img',
        name: 'fresh Onion',
        price: "₹60 Kg",
        rating: 4,
        inCart: 0
    },
    {
        img: 'image/product-3.png',
        alt: 'product img',
        name: 'fresh Meat',
        price: "₹140 Kg",
        rating: 5,
        inCart: 0
    },
    {
        img: 'image/product-4.png',
        alt: 'product img',
        name: 'fresh cabbage',
        price: "₹30 Kg",
        rating: 3,
        inCart: 0
    },
    {
        img: 'image/product-5.png',
        alt: 'product img',
        name: 'fresh potato',
        price: "₹100 Kg",
        rating: 4,
        inCart: 0
    },
    {
        img: 'image/product-6.png',
        alt: 'product img',
        name: 'fresh avocado',
        price: "₹90 Kg",
        rating: 3,
        inCart: 0
    },
    {
        img: 'image/product-7.png',
        alt: 'product img',
        name: 'fresh Carrot',
        price: "₹120 Kg",
        rating: 4,
        inCart: 0
    },
    {
        img: 'image/product-8.png',
        alt: 'product img',
        name: 'fresh sweet lemon',
        price: "₹50 Kg",
        rating: 3.5,
        inCart: 0
    },
]


function renderProduct(){
    let productHTML = ''
    productData.forEach((element, index) => {
        const {img, alt, name, price, rating} = element || {}
        let starts = productRating(rating)
        let stringifiedObj = JSON.stringify(element);
        productHTML += `<div class='box'>
                            <img src="${img}" class="img1" alt="${alt}">
                            <h3>${name}</h3>
                            <div class="price">${price}</div>
                            <div class="stars" id='star'>
                            ${starts}
                            </div>
                            <button class="btn" onclick='addToCart(${stringifiedObj})'>add to cart</button>
                        </div>`
    productRating(rating)
    })
    productdiv.innerHTML = productHTML
    
}
renderProduct()

function productRating(rating) {
    let num = Math.floor(rating)
    let starHtml = ""
    for(let i = 0; i < num; i++){
        starHtml += `<i class="fas fa-star"></i>` 
    }
    if(rating % 1 !== 0) {
        starHtml += `<i class="fas fa-star-half-alt"></i>`
    }
    
    return starHtml
}

function onLoadCartNumber(){
    let productNumber = localStorage.getItem('cartNumber')

    if(productNumber){
        document.querySelector('#cart-btn').innerText = productNumber;
    }
}

function addToCart(product) {
    
    let productNumber = localStorage.getItem('cartNumber')
    productNumber = +productNumber
    
    if(productNumber){
        localStorage.setItem('cartNumber', productNumber + 1)
        document.querySelector('#cart-btn').innerText = productNumber + 1
    }else{
        localStorage.setItem('cartNumber', 1)
        document.querySelector('#cart-btn').innerText = 1
    }

    setItem(product)
}

function setItem(product) {
    
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    console.log(cartItems[product]);

    // if(cartItems != null){
    //     cartItems[product.name].inCart += 1;
    // }else{
        
    // }

    product.inCart = 1;
    cartItems = {
        [product.name]: product
    }

    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

onLoadCartNumber()



