$(function() {
  console.log("sanity check");
  $('#searchBar').on('submit', function(event){
    event.preventDefault();
    var movieTitle = $('#searchBar').val();
    var url = 'http://www.omdbapi.com/?t=' + movieTitle
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: url
    })


  })

}());
