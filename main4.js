const baseURL = "https://swapi.co/api/";
function getData(type, cb) { //we create a function with the parameter cb, stands for 'callback' function, which is a function that we will pass in
    
    var xhr = new XMLHttpRequest();  //creates a new instance of the XMLHttpRequest object
    xhr.open("GET", baseURL + type + "/" ); // xhr.open() method, with which we pass the argument 'GET' first (Remember, GET and POST are the most often methods to communicate with a web server), second argument ist the StarWars API using the URL
    xhr.send(); // xhr.send() to send the request

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { //readyState of 4 means the operation has been completed and HTTP status of 200 means OK status
            cb(JSON.parse(this.responseText)); // here is cb! it is a function that passes the returned data to JSON.parse method to create real objects with the data (not strings)
        }
    };
}

function writeToDocument(type) {
    getData(type, function(data) {
        var el = document.getElementById('data');
        el.innerHTML = ' ';
        data = data.results; // we are going to overwrite our existing data variable with data.results
        data.forEach(function(item) { // and we do that for each element in data, we run this function that takes 'item'
            el.innerHTML += '<p>' + item.name + '</p>';
        });   
    })
}