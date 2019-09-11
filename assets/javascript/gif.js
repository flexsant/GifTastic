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

    $(document).on("click", ".ocean-btn", displayOceanInfo);


    $(document).on("click", ".ocean-gif",  function() {
        console.log("YOYOYOYOYO")
        // STEP ONE: study the html above.
        // Look at all the data attributes.
        // Run the file in the browser. Look at the images.
    
        // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.
    
        // STEP TWO: make a variable named state and then store the image's data-state into it.
        // Use the .attr() method for this.
          var state = $(this).attr("data-state");
          console.log(state)
        // ============== FILL IN CODE HERE FOR STEP TWO =========================
    
        // CODE GOES HERE
          if (state === "still") {
            var animateURL = $(this).attr("data-animate");
            $(this).attr("src", animateURL);
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        // =============================================
    
        // STEP THREE: Check if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.
    
        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================
    
        // CODE GOES HERE
    
        // ==============================================
    
        // STEP FOUR: open the file in the browser and click on the images.
        // Then click again to pause.
      });

renderButtons() 