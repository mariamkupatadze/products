
let productDiv = document.querySelector(".products")
$(".loading").hide()

$(".showProductsBtn").click(function(){
    $(".loading").show()
    
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/products?limit=100",
        // data: "data",
        // dataType: "dataType",
        success: function (response) {
            $(".loading").hide()
            let products = response.products
            for(const product of products) {
                productDiv.innerHTML += createCard(product)
            }
        }
    });
})

function createCard(product) {
let card = `
  <div class="card  text-center">
        <h2>${product.brand} </h2>
        <p>${product.title}  </p>
        <p>${product.category} </p>
        <img src="${product.thumbnail}" alt="">
        <h2>Price: ${product.price} $</h2>
        <h5>stock: ${product.stock} </h5>
        <p>${product.description} </p>
  </div>
`
return card
}