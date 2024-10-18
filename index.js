async function getData() {

    const data = await fetch('https://dummyjson.com/users');
    const records = await data.json();
   
    const newImages =[
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://media.licdn.com/dms/image/v2/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=sqDxbsOL6qHX3U123nNUJ1EWY6noIQIEN7DuCRBtSos',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://media.licdn.com/dms/image/v2/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=sqDxbsOL6qHX3U123nNUJ1EWY6noIQIEN7DuCRBtSos',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://media.licdn.com/dms/image/v2/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=sqDxbsOL6qHX3U123nNUJ1EWY6noIQIEN7DuCRBtSos',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://media.licdn.com/dms/image/v2/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=sqDxbsOL6qHX3U123nNUJ1EWY6noIQIEN7DuCRBtSos',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-gVEXndJvvIhbez7Cmd4m0FkJRmmLWrUGQ&s'

    ];

    let imageIndex = 0;

    let tabDetails = '';


    records.users.forEach(item =>{


          item.image = newImages[imageIndex];


          imageIndex++;

          if(imageIndex >= newImages.length){
            imageIndex = 0;
          }
        

        console.log(item);
        tabDetails += `<tr>
                   <td>${item.firstName}</td>
                   <td>${item.lastName}</td>
                   <td><img src = "${item.image}" width="50"  height="50"></td>
                   <td>${item.age}</td>
                   <td>${item.gender}</td>
                   <td class="email-column">${item.email}</td>
                  <td class="eye" onclick='eyeView(${JSON.stringify(item)})'><i class="fa-solid fa-eye fa-beat fa-lg"></i></td>
                </tr>`

    });
    

    

   document.getElementById("tBody").innerHTML = tabDetails;


    // console.log(data)
    
}




    function eyeView(item){

      let displayDiv = document.getElementById("displayDiv");
      let mainContent = document.getElementById("mainContent"); // Select the content to blur


      displayDiv.innerHTML = '';

      let employeDiv = document.createElement("div");
          employeDiv.classList.add('popup');

         // Adding the 'open-popup' class to the created popup element
          employeDiv.classList.add('open-popup');

          
       // set the content inside the popup
          employeDiv.innerHTML = `
                        <h6 class="profile"><img src="${item.image}" ></h6>
                        <h4>${item.firstName} ${item.lastName}</h4>
                        <h5 class="age">Age : ${item.age} </h5>
                        <h5 class="gender">Gender : ${item.gender} </h5>
                        <h5 class="phone">Phone : ${item.phone} </h5>
                        <h5 class="mail">Email : ${item.email}</h5>
                        <h5 class="bloodGroup">bloodGroup : ${item.bloodGroup}</h5>
                        <button class="closeBtn" onclick="closePopup()">Close</button>

                        
                        

          `;
             
          
            displayDiv.appendChild(employeDiv);    
            
            
            setTimeout(() => {
              employeDiv.classList.add('open-popup'); // Add 'open-popup' class after a tiny delay
              mainContent.classList.add('blurred'); // Add the blur effect to the main content
            }, 10);
          
            

        // alert(`User:${item.firstName} ${item.lastName} profile : ${item.image} Age : ${item.age}`)
    }


    function closePopup() {
      // Find the active popup and remove the 'open-popup' class
      let activePopup = document.querySelector('.popup.open-popup');
      let mainContent = document.getElementById("mainContent");
      if (activePopup) {
        activePopup.classList.remove('open-popup');

        mainContent.classList.remove('blurred');

        setTimeout(() => {
          activePopup.remove(); // Remove element after transition completes
        }, 400);
      }
    }