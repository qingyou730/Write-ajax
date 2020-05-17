
function ajax(options) {
    var url = options.url;
    var type = options.type;
    var success = options.success;

    var xhr;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    if(type == "GET") {
        xhr.open(type, url, true);
    }else{
        xhr.open(type, url, true);
        xhr.setRequestHeader('Content-type','application/x-www-from-urlencoded');
        xhr.send();
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
           success(xhr.responseText)
        }
    }
    xhr.send();
}

ajax({
    url: "http://developer.duyiedu.com/edu/testAjaxCrossOrigin",
    type: "GET",
    success: function (data) {
        console.log(data);
    }
});