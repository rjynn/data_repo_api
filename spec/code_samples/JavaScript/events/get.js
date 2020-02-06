var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "http://127.0.0.1:8000/vibrantminds2/api/events/"
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url);
xmlhttp.send();
xmlhttp.onreadystatechange = (e) => {
    console.log(xmlhttp.responseText)
}
