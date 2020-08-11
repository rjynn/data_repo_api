var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "https://vibrant-minds.org/vibrantminds2/api/events/"
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url);
xmlhttp.send();
xmlhttp.onreadystatechange = (e) => {
    console.log(xmlhttp.responseText)
}
