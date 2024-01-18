// ----------------------------------
//         viod class & id
// ----------------------------------
let copy = document.getElementById('row')
let navLink = document.querySelectorAll('.nav-item .nav-link')
let cart = JSON.parse(localStorage.getItem('products')) || []
let products =[]

// ----------------------------------
//          => API fetch 
// ----------------------------------
async function api(sendApi) {
    const dataApi = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${sendApi}`)
    let apiData = await dataApi.json()
    containerApi = apiData.recipes
    products = containerApi
    displayPro()
    console.log(products);
};
api("corn")


// ----------------------------------
//          display API
// ----------------------------------
function displayPro() {
    let base = ""
    for (let i = 0; i < containerApi.length; i++) {
        base +=`
        <div class="col-lg-4">
        <div class="card my-3">
        <img src="${containerApi[i].image_url}" alt="sora">
        <div class="card-body">
        <h4 class="bg-danger">${containerApi[i].publisher}</h4>
                <h6>${containerApi[i].title}</h6>
                <div class="row justify-content-around">
                <button class="btn btn-outline-warning">view details</button>
                <button class="btn btn-warning" onclick="addToCart(${i})">add to cart</button>
                </div>
            </div>
            </div>
            </div>`
        }
        copy.innerHTML = base
    }
    
// ----------------------------------
//          filtrion API
// ----------------------------------
navLink.forEach((element) => {
    element.addEventListener('click',function(e) {
        api(e.target.textContent)
    })
});

// ----------------------------------
//          ADD TO CART
// ----------------------------------
let count =0;
function addToCart(i) {
    let addProduct = products[i]; // بينشأ عنصر جديد
    let choosen = cart.find((item) => item.recipe_id == addProduct.recipe_id)
    if (choosen) {
        choosen.count ++;
    } else {
        cart.push({...addProduct , count : 1})
    }
    localStorage.setItem('products',JSON.stringify(cart)) // بيخزن العناصر اللي انشأتها
}