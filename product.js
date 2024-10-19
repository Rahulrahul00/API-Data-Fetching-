
let products = document.querySelector('.products')

async function productData() {

    const data = await fetch('https://dummyjson.com/products');
   
   

    const store = await data.json();

    // console.log(store);

   store.products.forEach(items =>{


   let description = items.description;
   let title = items.title;
   let price = items.price;
      
  
              products.innerHTML += `
    <div class="product">
             <img src="${items.images[0]}" class="product-img">

        <div class="product-content">
            <h2 class="product-title">${title.length >10 ? title.substring(0, 10).concat('...') : title}</h2>
            <h4 class="product-category">${items.category}</h4>
            <p class="product-description">${description.length > 40 ? description.substring(0, 40).concat('...more') : description }</p>
            <div class="product-price-container">
                <h3 class="product-price">Rs ${price}</h3>
                <a href="#!" data-productId="${items.id}" class="add-to-cart">Add To Cart</a>
            </div>
                
            </div>
          
        </div>  
      `
});

// search products



document.getElementById("search").addEventListener('click', async ()=>{

    let searchInput = document.getElementById('search-input').value;

    if(searchInput.trim() !== ''){

     
        
        const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);


        const searchData = await searchResponse.json();

        if(searchData.products.length > 0){
            renderProducts(searchData.products);
        }else{
            products.innerHTML = '<p> No products found.</p>';
        }

    }else{
        productData();
    }



});

    

    
    
}


