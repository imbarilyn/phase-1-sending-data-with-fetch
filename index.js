// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",

// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(resp => resp.json())
// .then(dog => console.log(dog))
const para = document.createElement("p");
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    })
    .then(resp => resp.json())
    .then((user) => {
        console.log(user);
        para.textContent = user.id;
        document.body.appendChild(para);
    })
    .catch(e =>{
        alert("Error!!");
        para.textContent = e.message;
        document.body.appendChild(para);
    })
} 

submitData("Steve", "steve@steve.com"); 




