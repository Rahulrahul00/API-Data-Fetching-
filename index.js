async function getData() {

    const data = await fetch('https://dummyjson.com/users');
    const records = await data.json();

    let tabDetails = '';

    records.users.map(item =>{
        tabDetails += `<tr>
                   <td>${item.firstName}</td>
                   <td>${item.lastName}</td>
                   <td><img src = "${item.image}" width="50"  height="50"</td>
                   <td>${item.age}</td>
                   <td>${item.gender}</td>
                   <td class="email-column">${item.email}</td>
                  <td onclick='eyeView(${JSON.stringify(item)})'><i class="fa-solid fa-eye"></i></td>
                </tr>`
    });

   document.getElementById("tBody").innerHTML = tabDetails;


    // console.log(data)
    
}




    function eyeView(item){
        alert(`User:${item.firstName} ${item.lastName} profile : ${item.image} Age : ${item.age}`)
    }


