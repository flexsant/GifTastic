# GifTastic

## Screen Shot
<img src="assets.png" alt="screenshot">

## Technologies Used
- API - used GIPHY api to access library of gifs 
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - allows dynamic interaction between user and computer data entry
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary
This application allows the user to dynamically place new buttons on the browser. Once buttons have been dsiplayed user can click button to generate a list of 25 top rated gifs, with a PG-13 rating, taken from GIPHYs API. 

## Code Snippet
'''JQuery

     $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);
        // EMptying input bar
        $("#oceans-views").empty();
        for(var i = 0; i < response.data.length; i ++){
            // Div to hold ocean topic
            var oceanDiv = $("<div >");
            // Grabbing URL for image poster
            var imgURL = response.data[i].images.original_still.url;
            var rating = response.data[i].rating
            var p = $("<p>").text("Rating: " + rating)
            // Element to hold image
            var image = $("<img>").attr("src", imgURL);

            image.attr("data-still", response.data[i].images.original_still.url);
            image.attr("data-animate", response.data[i].images.original.url);
            image.attr("data-state", "still");
            image.attr("class", 'ocean-gif')
            // Appending image
            oceanDiv.append(p);
            oceanDiv.append(image);
            // Placing ocean topic images on top of the previous 
            $("#oceans-views").prepend(oceanDiv);

        }

## Author Links
[GitHub](https://github.com/flexsant)