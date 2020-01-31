function getData(cb) { //we create a function with the parameter cb, stands for 'callback' function, which is a function that we will pass in
    
    var xhr = new XMLHttpRequest();  //creates a new instance of the XMLHttpRequest object
    xhr.open("GET", "https://swapi.co/api/"); // xhr.open() method, with which we pass the argument 'GET' first (Remember, GET and POST are the most often methods to communicate with a web server), second argument ist the StarWars API using the URL
    xhr.send(); // xhr.send() to send the request

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { //readyState of 4 means the operation has been completed and HTTP status of 200 means OK status
            cb(JSON.parse(this.responseText)); // here is cb! it is a function that passes the returned data to JSON.parse method to create real objects with the data (not strings)
        }
    };
}

function printDataToConsole(data) {
    console.log(data); //this will parse itself in as a function, and the 'data' argument will be jSON.parse(this.responseText) from getData() function
}

getData(printDataToConsole); //we are parsing the printDataToConsole function itself so we do not need the () brackets

// we do not need a timeout here because we are explicitly invoking our getData function
// we are checking if readystate is 4 and only then the callback function is invoked