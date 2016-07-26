$(function() {
    var moviesIndex = [];
    var posterUrl = [];
    var seperateGenres = [];
    var combinedArray = [];
    var selectedByGenre = [];
    var posterPics = [];

    console.log("sanity check");
    $('#searchButton').on('click', function(event) {
        event.preventDefault();
        var movieTitle = $('#searchBar').val();
        $('titleHolder').append(movieTitle)
        var url = 'http://www.omdbapi.com/?t=' + movieTitle
        console.log(url);
        // var url = 'http://www.omdbapi.com/?t=jaws'
        var promise = Promise.resolve($.ajax({
            method: 'GET',
            dataType: 'json',
            url: url
        })).then(function(results) {
            moviesIndex.push(results);
            console.log(moviesIndex);
            var genre = results.Genre;
            posterUrl.push(moviesIndex[0].Poster)
            $("#images").prepend('img src="' + posterUrl[0] + '" />');
            seperateGenres.push(genre.split(','));
            var combinedArray = [].concat.apply([], seperateGenres);
            console.log(combinedArray);
            var uniqueGenre = combinedArray.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
            $('#selectBar').empty();
            for (var h = 0; h < uniqueGenre.length; h++) {
                $('#selectBar').append('<option>' + uniqueGenre[h] + '</option>')
            }

            console.log(seperateGenres);
            $("#selectBar").on('change',function(event) {
            event.preventDefault();
            selectedByGenre = [];
            for (var i = 0; i < moviesIndex.length; i++) {
                    if (seperateGenres[i].includes($('#selectBar').val())) {
                        console.log("true");
                        selectedByGenre.push(moviesIndex[i])
                    }
                }
                console.log(selectedByGenre.length);

            for (var k = 0; k < selectedByGenre.length; k++) {
                  posterPics.push(selectedByGenre[k].Poster)
                // posterUrl[k] = selectedByGenre[k].Poster;
            } //add loop to create img for each
            console.log(posterUrl[k]);
            for (var i = 0; i < posterUrl[k].length; i++) {
              $('.images').append('<img src="' + posterUrl[k] + '"> ')
            }

          });




        })
    })
});
