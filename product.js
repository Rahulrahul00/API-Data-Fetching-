
let products = document.querySelector('.products')

async function productData() {

    const data = await fetch('https://dummyjson.com/products');
   
   

    const store = await data.json();

    searchItems(store.products);  // Render products to display all products

}

    // console.log(store);

    let searchItems = (items) =>{
        products.innerHTML = ''; //clear the previous products


        items.forEach(item =>{
            
            let description = item.description;
            let title = item.title;
            let price = item.price;
               
           
                       products.innerHTML += `
             <div class="product">
                      <img src="${item.images[0]}" class="product-img">
         
                 <div class="product-content">
                     <h2 class="product-title">${title.length >10 ? title.substring(0, 10).concat('...') : title}</h2>
                     <h4 class="product-category">${item.category}</h4>
                     <p class="product-description">${description.length > 40 ? description.substring(0, 40).concat('...more') : description }</p>
                     <div class="product-price-container">
                         <h3 class="product-price">Rs ${price}</h3>
                         <a href="#!" data-productId="${item.id}" class="add-to-cart">Add To Cart</a>
                     </div>
                         
                     </div>
                   
                 </div>  
               `;
         });


    }

   

// search products when user click the search button

document.getElementById('searchBtn').addEventListener('click', async ()=>{

    let searchInput = document.getElementById('search-input').value;

    if(searchInput.trim() !== ''){

        const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);
        const searchData = await searchResponse.json();

        if(searchData.products.length > 0){
            searchItems(searchData.products); //display the seatch result


        }else{
            products.innerHTML ='<p>No product found.</P>';
        }
    }else{
        productData(); // reload all products if search input is empty
    }

    // console.log(searchInput);

});

productData();





     
        
        // const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);


     
    

    
    



