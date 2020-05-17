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
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newShow = {
        title: $("#showAdd").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/shows", {
        type: "POST",
        data: newShow
      }).then(
        function() {
          console.log("added new show");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
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
  