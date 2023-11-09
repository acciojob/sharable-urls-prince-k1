// your code here
let heading = document.querySelector('h3');
let Name = document.getElementById('name');
let year = document.getElementById('year');

let btn = document.getElementById('button');

btn.addEventListener('click', () => {
    let nameVal = Name.value;
    let yearVal = year.value;
    if(nameVal != "" && yearVal != ""){
        heading.innerText = `https://localhost:8080/?name=${nameVal}&year=${yearVal}`;
    }
    else if(nameVal != "" && yearVal =="" ){
        heading.innerText = `https://localhost:8080/?name=${nameVal}`;
    }
    else if(nameVal == "" && yearVal !="" ){
        heading.innerText = `https://localhost:8080/?year=${yearVal}`;
    }
    Name.value = "";
    year.value = "" ;
})