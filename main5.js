
function getData(url, cb) { //we create a function with the parameter cb, stands for 'callback' function, which is a function that we will pass in
    
    var xhr = new XMLHttpRequest();  //creates a new instance of the XMLHttpRequest object
    xhr.open("GET", url ); // xhr.open() method, with which we pass the argument 'GET' first (Remember, GET and POST are the most often methods to communicate with a web server), second argument ist the StarWars API using the URL
    xhr.send(); // xhr.send() to send the request

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { //readyState of 4 means the operation has been completed and HTTP status of 200 means OK status
            cb(JSON.parse(this.responseText)); // here is cb! it is a function that passes the returned data to JSON.parse method to create real objects with the data (not strings)
        }
    };
}

function getTableHeaders(obj) {
    var tableHeaders = []; // we initialize a new array by making it empty
    Object.keys(obj).forEach(function(key) { //we iterate through all items in the object
        tableHeaders.push(`<th>${key}</th>`); // we push those key names to the variable tableHeaders
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    var tableRows = [];
    var el = document.getElementById('data');

    getData(url, function(data) {

        var pagination ='';
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous);
        }

        data = data.results; // we are going to overwrite our existing data variable with data.results
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var cellData = item[key].toString(); //converts cell data into strings
                var truncatedData = cellData.substring(0,15); //takes only the first 15 characters from every cell content
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g,"");
        
    });  
};
