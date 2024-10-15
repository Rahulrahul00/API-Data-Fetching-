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
                   <td>${item.email}</td>


        </tr>`
    });

   document.getElementById("tBody").innerHTML = tabDetails;


    // console.log(data)
    
}

