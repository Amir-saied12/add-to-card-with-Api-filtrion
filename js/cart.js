// ----------------------------------
//         viod class & id
// ----------------------------------
let tBody = document.getElementById('tBody')
let row2 = document.getElementById('row2')
let cartData = Array.from(JSON.parse(localStorage.getItem('products')) || [])
console.log(cartData);
// ----------------------------------
//        display product API
// ----------------------------------

function render(){
    let tableBody = ""
    for (let i = 0; i < cartData.length; i++) {
        tableBody +=`
        <tr>
            <td>${cartData[i].recipe_id}</td>
            <td>${cartData[i].publisher}</td>
            <td>${cartData[i].social_rank} $</td>
            <td>${cartData[i].title}</td>
            <td class="w-9"><img src="${cartData[i].image_url}" alt="sora ll montag"></td>
            <td>${cartData[i].count}</td>
            <td><button class="btn btn-danger" onclick="del_row(${i})">remove</button></td>
        </tr>`
        tBody.innerHTML = tableBody
    }
};
render()
if (cartData.length != 0) {
    row2.style.display ="block"
}else{
    row2.style.display ="none"
}
function del_row(i) {
    cartData.splice(i,1)
    localStorage.setItem('products',JSON.stringify(cartData))
    render()
}
function del_all() {
    cartData.splice(0)
    localStorage.setItem('products',JSON.stringify(cartData))
    render()
}