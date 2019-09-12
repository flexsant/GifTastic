// Array of ocean topics
var oceantopics = ["Sharks", "Surf Spots", "Under The Sea", "Sea Creatures", "Aquatic Animals"];

// function re-renders HTML to show content
function displayOceanInfo() {
    var oceanTerm = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + oceanTerm + "&api_key=icfGwOjla120r9Qqx0fKp5KYkO5fZURI&q=ocean&limit=25&offset=0&rating=G&lang=en";
// Ajax call for specific ocean button clicked by user
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

            
    });
}



// Function for dispalying ocean topics data
    function renderButtons() {
        $("#buttons-view").empty();

        // Looping through the array of ocean topics
        for (var i = 0; i < oceantopics.length; i++) {

            // Dynamically generates new buttons for each ocean topic in array. $("<button>") === beginning and end tag aka: (<button></button>)
            var newButton = $("<button>");

            // Adding a class of ocean-btn
            newButton.addClass("ocean-btn");

            // Adding a data attribute
            newButton.attr("data-name", oceantopics[i]);

            // Initial button text
            newButton.text(oceantopics[i]);

            // Adding buttons to the buttons-view div
            $("#buttons-view").append(newButton);
        }
    }

    // Function for when an ocean topics button is pressed
    $("#add-ocean").on("click", function(event) {
        event.preventDefault();

        // Grabs the user input
        var ocean = $("#ocean-input").val().trim();

        // Adding ocean topics from user input to array
        oceantopics.push(ocean);

        // calling function to add to array
        renderButtons();

        // event listener to all elements with ocean-btn
       

        //calling function to display initial buttons
        renderButtons();


    })
    // User click registered via ocean button
    $(document).on("click", ".ocean-btn", displayOceanInfo);

    // Function that creates gif motion 
    $(document).on("click", ".ocean-gif",  function() {
        console.log("YOYOYOYOYO")
       
        // Use the .attr() method for this.
          var state = $(this).attr("data-state");
          console.log(state)
        // If else statement that renders gif movement from still to animate
          if (state === "still") {
            var animateURL = $(this).attr("data-animate");
            $(this).attr("src", animateURL);
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        
      });
//calling function to display initial buttons
renderButtons() 