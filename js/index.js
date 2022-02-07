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

document.querySelector('#cart-btn').onmouseover = () =>{
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
        price: 40,
        rating: 3,
        inCart: 0
    },
    {
        img: 'image/product-2.png',
        alt: 'product img',
        name: 'fresh Onion',
        price: 66,
        rating: 4,
        inCart: 0
    },
    {
        img: 'image/product-3.png',
        alt: 'product img',
        name: 'fresh Meat',
        price: 140,
        rating: 4.5,
        inCart: 0
    },
    {
        img: 'image/product-4.png',
        alt: 'product img',
        name: 'fresh cabbage',
        price: 35,
        rating: 3,
        inCart: 0
    },
    {
        img: 'image/product-5.png',
        alt: 'product img',
        name: 'fresh potato',
        price: 100,
        rating: 3.5,
        inCart: 0
    },
    {
        img: 'image/product-6.png',
        alt: 'product img',
        name: 'fresh avocado',
        price: 85,
        rating: 3,
        inCart: 0
    },
    {
        img: 'image/product-7.png',
        alt: 'product img',
        name: 'fresh Carrot',
        price: 130,
        rating: 4,
        inCart: 0
    },
    {
        img: 'image/product-8.png',
        alt: 'product img',
        name: 'fresh sweet lemon',
        price: 55,
        rating: 3.5,
        inCart: 0
    },
]


function renderProduct(){
    let productHTML = ''
    if(productdiv){
    productData.forEach((element, index) => {
        const {img, alt, name, price, rating} = element || {}
        let starts = productRating(rating)
        let stringifiedObj = JSON.stringify(element);
        
        productHTML += `<div class='box'>
                            <img src="${img}" class="img1" alt="${alt}">
                            <h3>${name}</h3>
                            <div class="price">₹${price} Kg</div>
                            <div class="stars" id='star'>
                            ${starts}
                            </div>
                            <button class="btn" onclick='addToCart(${stringifiedObj})'>add to cart</button>
                        </div>`
    })
    productdiv.innerHTML = productHTML
    }
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
        document.querySelector('#show-cart-num').innerText = productNumber;
    }
}

function addToCart(product) {
    
    let productNumber = localStorage.getItem('cartNumber')
    productNumber = +productNumber
    
    if(productNumber){
        localStorage.setItem('cartNumber', productNumber + 1)
        document.querySelector('#show-cart-num').innerText = productNumber + 1
    }else{
        localStorage.setItem('cartNumber', 1)
        document.querySelector('#show-cart-num').innerText = 1
    }

    setItem(product)
    totalCost(product)
}

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    
    if(cartItems != null){
        if(cartItems[product.name] == undefined){
            cartItems = {
            ...cartItems, [product.name]: product
            }
        }
        
        cartItems[product.name].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost')
    
    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + product.price)
    }else{
        localStorage.setItem('totalCost', product.price)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost')
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('#shopping-cart-item')
    let grantTotal = document.querySelector('#cartTotal')

    if(cartItems){
        let cartHtml = ""
    
        Object.values(cartItems).map((item, index) => {
            const {img, alt, name, price, inCart} = item || {}
            
            cartHtml += `<div class="box">
                                <img src="${img}" alt="${alt}">
                                <div class="content">
                                <h3>${name}</h3>
                                <span class="price">${price}/-</span>
                                <span class="quantity">qty : ${inCart} </span>
                            </div>
                        </div>`
        })
        productContainer.innerHTML = cartHtml
        grantTotal.innerHTML =  `total : ${cartCost}/-`
    }
}

onLoadCartNumber()
displayCart()


