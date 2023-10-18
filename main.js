console.log("Starting my script");

function addPeople(){
    fetch("https://randomuser.me/api?results=3")

    .then(function(response){
        console.log("Request is fulfilled, we have a response");
        return response.json();
    })
    .then(function(data){
        console.log("The data we got is ", data);
    
        for (let index = 0; index < data.results.length; index++) {
            let newListItem = document.createElement("li");
            let user = data.results[index];
            let dob = new Date(user.dob.date);
            let formattedDob = `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`;
            
            newListItem.innerText = `Name: ${user.name.first} ${user.name.last}, Location:  ${user.location.city}, ${user.location.state}, ${user.location.country}, DOB: ${formattedDob}`;
            document.getElementById("info").appendChild(newListItem);
        }
    })
    .catch(function(error){
        console.error("Something faild",error.message);
    });
}

console.log("End my script");
