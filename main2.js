var xhr = new XMLHttpRequest();  //creates a new instance of the XMLHttpRequest object
var data;

xhr.open("GET", "https://swapi.co/api/"); // xhr.open() method, with which we pass the argument 'GET' first (Remember, GET and POST are the most often methods to communicate with a web server), second argument ist the StarWars API using the URL
xhr.send(); // xhr.send() to send the request

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //readyState of 4 means the operation has been completed and HTTP status of 200 means OK status
        data = JSON.parse(this.responseText); // data is passed to JSON.parse method to create real objects with the data (not strings)
    }
};

//we use the setTimeout function, which takes two parameters, the first is a callback function
// so we write in there first a function and then the second parameter is time in miliseconds
setTimeout (function() {
    console.log(data)
}, 5000) // this is plenty of time to allow our function to do its thing

