var xhr = new XMLHttpRequest();  //creates a new instance of the XMLHttpRequest object
var data;

xhr.open("GET", "https://swapi.co/api/"); // xhr.open() method, with which we pass the argument 'GET' first (Remember, GET and POST are the most often methods to communicate with a web server), second argument ist the StarWars API using the URL

xhr.send(); // xhr.send() to send the request

function setData (jsonData) { //we create a function to call later when the data is retrieved from the server in a new variable
    data = jsonData; // this is also called deserializing our JSON
    console.log(data);
}
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //readyState of 4 means the operation has been completed and HTTP status of 200 means OK status
        document.getElementById("data").innerHTML = this.responseText;
        setData (JSON.parse(this.responseText)); //function setData is called, which we created before and data is passed to JSON.parse method to create real objects with the data (not strings)
    }
};

console.log(data);

