
let products = document.querySelector('.products')

async function productData() {

    const data = await fetch('https://dummyjson.com/products');
   
   

    const store = await data.json();

    // console.log(store);

   store.products.forEach(items =>{


   let description = items.description;
  
              products.innerHTML += `
    <div class="product">
             <img src="${items.images[0]}" class="product-img">
            <h2 class="product-title">${items.title}</h2>
            <h4 class="product-category">${items.category}</h4>
            <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat('...more') : description }</p>
            <div class="product-price-container">
                <h3 class="product-price">${items.price}</h3>
                <a href="#" data-productId="${items.id}" class="add-to-cart"></a>
            </div>
        </div>
`

        console.log(store);
    
    });
    
}