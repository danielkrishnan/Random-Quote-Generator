//get a quote from the API
function getQuote() {
   
   //console.log("clicked!");
   
   $.ajax({
     type: "GET",
     dataType: "json",
     url: "https://thesimpsonsquoteapi.glitch.me/quotes",
     success: function(data) {
       
       $("#quote-content").text(data[0].quote);
       $("#quote-author").text("- " + data[0].character);
       //console.log(data);
     },
     
     cache:false
   });   
}

//load a quote when the page loads
window.onload = getQuote();

 
//load a new quote when clicking this button
$("#getQuote").on("click", getQuote);

//share to twitter

$(".twitter-share").on("click", function(){
  
    var url = "https://twitter.com/intent/tweet?text=";
    var quoteUrl = $("#quote-content").text().replace(" ", "%20") + " -" + " " + $("#quote-author").text().replace(" ", "%20");
 
  url += quoteUrl;  
  
  $(".twitter-share").attr("href", url);
  
  
});