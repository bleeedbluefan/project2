var num = 0;
document.getElementById("catButton").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://cat-fact.herokuapp.com/facts";
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json) {
            console.log(json);
            let results = [];
            let text = "";
            for (let i = 0; i < 5; i++) {
                results[i] = json[i].text;
            }
            text +="<p class='cat-text'>" + json[num].text + "</p>";
            num = num + 1;
            if (num == 5) {
                num = 0;
            }
            document.getElementById("catButton").innerHTML = text;
            document.getElementById("catButton").style.backgroundImage="url(/images/cat" + num + ".jpeg)";
        });
});