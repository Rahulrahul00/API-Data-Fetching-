

let products = document.querySelector('.products');
let categorySelect = document.getElementById('category-select');



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
                     <p class="product-description">${description.length > 40 ? description.substring(0, 40).concat('...') : description }
                        <span class="toggle-description" data-full-text="${description}">more</span>
                     </p>
                     <div class="product-price-container">
                         <h3 class="product-price">Rs ${price}</h3>
                         <a href="#!" data-productId="${item.id}" class="add-to-cart">Add To Cart</a>
                     </div>
                         
                     </div>
                   
                 </div>  
               `;

               products.querySelectorAll('.toggle-description').forEach(toggle =>{
                    toggle.addEventListener('click', function(){
                        const  fullText = this.getAttribute('data-full-text');
                        const isExpanded = this.classList.toggle('expanded');

                        if (isExpanded) {
                            this.previousSibling.textContent = fullText;
                            this.textContent = '...less';
                            this.style.color = "#a963fe";
                          } else {
                            this.previousSibling.textContent = fullText.substring(0, 40) + '...';
                            this.textContent = 'more';
                            this.style.color = "#a963fe";
                          }
                    })
               });
         });


    }


// Filter by category  

async function fetchCategory(){

    try{
        const response = await fetch('https://dummyjson.com/products/categories');
        if(!response) throw new Error('Failed to fetch categories');

        const categories = await response.json();
        categoryDropDown(categories);
       
    }catch (error){
        console.error(error);
        categorySelect.innerHTML = `<option value="">Failed to load category</option>`;


    }
}

let categoryDropDown =(categories) =>{
    categorySelect.innerHTML = `<option value="">All</option>`; //reset the dropdown
    categories.forEach(category =>{
       categorySelect.innerHTML += `<option  class="optCat" value="${category.slug}">${category.name}</option>`
    })


}

// filtered product by category

categorySelect.addEventListener('change', async(event)=>{

    const category = event.target.value;

    if(category){
        try{
            const response = await fetch (`https://dummyjson.com/products/category/${category}`);
            const data = await response.json();
            searchItems(data.products); 
        } catch(error){
            console.error(error);
            products.innerHTML = `<p>Failed to load product. Please try again later.</p>`;
        }
    }else{
        productData();
        
    }

});



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
fetchCategory();





     
        
        // const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);


     
    

    
    



