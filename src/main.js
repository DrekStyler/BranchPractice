$(function() {
  console.log("sanity check");
  $('#searchBar').on('submit', function(event){
    event.preventDefault();
    var movieTitle = $('#searchBar').val();

  })

}());
