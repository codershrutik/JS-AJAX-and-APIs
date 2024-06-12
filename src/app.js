// "https://swapi.dev/api/people/1"

const req = new XMLHttpRequest();

req.onload = function(){
    console.log("It loaded");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function(){
    console.log("Error!");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();

fetch("https://swapi.dev/api/people/1")
.then((res) => {
    console.log("RESOLVED",res);
})
.vatch((e) =>{
    console.log("ERROR",e);
})