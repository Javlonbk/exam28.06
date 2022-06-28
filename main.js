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
function reRender(data) {
 
    let index = 0;
    $('.cards').html('');
    data.map(obj => {

        let cardItem = `
                    <div class="card-item">
                        <i class="fa-regular fa-heart heart"></i>
                         <img src="${obj.img}" alt="">
                         <p>${obj.name}</p>
                         <button onclick='addKorzina(${index})'>Korzinka</button>
                    </div>
        `

        $('.cards').append(cardItem)
    })
    index++
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