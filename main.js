let products = []
async function getProducts() {

    let response = await fetch('http://myjson.dit.upm.es/api/bins/emgj')
        .then(response => response.json())
        .then((res) => {
            reRender(res)
            res.map(obj => {
                products.push(obj)
            })
        })
        .catch(err => console.log('Request Failed', err))
   

}
getProducts()
let index = 0;
function reRender(data) {
 
    $('.cards').html('');
    data.map(obj => {

        let cardItem = `
                    <div class="card-item">
                        <i onclick='addHeart(${index})' class="heart-cart fa-regular fa-heart heart"></i>
                         <img src="${obj.img}" alt="">
                         <p>${obj.name}</p>
                         <button onclick='addKorzina(${index})'>Korzinka</button>
                    </div>
        `

        $('.cards').append(cardItem)
        index++
    })
}
reRender(products)

function searchBar(val) {
    
    let searchResult = products.filter(obj => {
        return obj.name.includes(val.value)
    })
     
    console.log(searchResult)
    reRender(searchResult)
}


// <--- Add Carzina --->

let korzinkaProducts = []
let arr = []
function addKorzina(index) {
    
    arr.push(products[index])

    korzinkaProducts =  arr.filter((x, inx) => {
        return arr.indexOf(x) === inx
    })

    $('.badge-cart').text(korzinkaProducts.length)

}

let Hearts = []
let arr2 = []
function addHeart(index) {
    
    arr2.push(products[index])

    Hearts =  arr2.filter((x, inx) => {
        return arr2.indexOf(x) === inx
    })

    $('.badge-heart').text(Hearts.length)


   heartCart = document.querySelectorAll('.heart-cart');

   heartCart[index].classList.add('fa-solid')
   heartCart[index].classList.remove('fa-regular')

}


