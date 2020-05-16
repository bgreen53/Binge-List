$(function() {
    $(".chg-binge").on("click", function(event) {
      var id = $(this).data("id");
      var newBinge = $(this).data("binge");
  
      var newIsBinged = {
        isbinged: newBinge
      };
  
      // Send the PUT request.
      $.ajax("/api/shows/" + id, {
        type: "PUT",
        data: newIsBinged
      }).then(
        function() {
          console.log("changed isbinged to", newIsBinged);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $(".delete-show").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/shows/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted show", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  