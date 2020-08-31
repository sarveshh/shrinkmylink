function urlmatch() {
    var el_down = document.getElementById("validation"); 
    // var expression =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; 
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression); 
    var url = document.getElementById('fullUrl').value;

    var validation = "";
    if(url.match(regex)){
        validation = "Valid URL";
        $('#validation').removeClass("invalid");
        $('#validation').addClass("valid");
    }else{
        validation = "Invalid URL";
        $('#validation').removeClass("valid");
        $('#validation').addClass("invalid");
    }

    el_down.innerHTML = validation; 
};