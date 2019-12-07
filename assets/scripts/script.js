window.onload = function(){
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=the%20forest&api-key=k3kGuvYljef3Q0Qbg1if75Jro8NCpwvV"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
console.log(response)
})}