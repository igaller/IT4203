$(document).ready(function () {
    $("#myform").submit(function () {
        
        var search = $("#books").val();
        if (search == '') {
            alert("Search box is blank. Please try again.");
        } else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';
            
            
            $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response) {
                for (i = 0; i < response.items.length; i++)
                { 
                 console.log(result);
            }
    });
    
    return false;
        }
    });
});