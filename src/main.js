$(function() {

  console.log("sanity check");
  $('#searchButton').on('click', function(event){
    event.preventDefault();
    var movieTitle = $('#searchBar').val();
    $('titleHolder').append(movieTitle)
    var url = 'http://www.omdbapi.com/?t=' + movieTitle
    console.log(url);
    // var url = 'http://www.omdbapi.com/?t=jaws'
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: url
    }).done(function(results){
      var genre = results.Genre
      console.log(genre);
      var posterUrl = results.Poster
      $("#movieImage").attr('src', posterUrl);
      var seperateGenres = genre.split(',');
      for (var i = 0; i < seperateGenres.length; i++) {
        $('#selectBar').append('<option>'+ seperateGenres[i] + '</option>')
      }



    })
})
});
