const cors = require('cors');
app.use(cors());
document.getElementById("email-Submit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("email-Input").value;
    if (value === "")
    return;
    console.log(value);
    
    const url = "https://api.mailboxvalidator.com/v1/validation/single?email=" + value + "&key=9FBWDG72P5UFD579OH0U&format=json";
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json) {
            console.log(json);
            

        });
});