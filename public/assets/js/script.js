$('document').ready(function(){

    function searchFilm(){
        $.ajax({
            type: 'get',
            url: 'http://www.omdbapi.com',
            dataType: 'json',
            data: {
                'apikey' : '2bc94c8f',
                's' :  $('#search_film').val()
            },
            success: function(result){
                $('#list-pencarian').html('');
                if(result.Response == "True"){
                    let films = result.Search;

                    $.each(films,function (i, data){
                        $('#list-pencarian').append(`
                            <div class="col-md-4">
                                <div class="card mb-3">
                                    <img src="`+ data.Poster +`" class="card-img-top" style="width: 100%; height: 400px; ">
                                    <div class="card-body">
                                    <h5 class="card-title">`+ data.Title +`</h5>
                                    <p class="card-text">`+  data.Year +`</p>
                                    <a href="#" class="card-link" data-id="`+ data.imdbID +`" data-toggle="modal" data-target="#exampleModal">Lihat Detail</a>
                                    </div>
                                </div>
                            </div>
                        `);
                    });
                }
                else{
                    console.log(result);
                    $('#list-pencarian').html(`
                    <div class="col">
                        <h1 class="text-center">` + result.Error + `</h1>
                    </div>
                    `);
                }

                $('#search_film').val('');
            }
        });
    }

    //NAVBAR
    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        console.log('oke');
    });

    //SEARCH
    $('#search_film_button').on('click',function(){

        searchFilm();

    });
    $('#search_film').on('keyup',function(e){
        if(e.which == 13){
            searchFilm();
        }
    });

    //DETAIL FILM
    $('#list-pencarian').on('click','.card-link',function(){

        $.ajax({
            type: 'get',
            url: 'http://www.omdbapi.com',
            dataType: 'json',
            data: {
                'apikey' : '2bc94c8f',
                'i' : $(this).data('id')
            },
            success: function(result){
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5">
                                <img src="`+result.Poster+`"></img>
                            </div>
                            <div class="col-md-7">
                                <table class="table">
                                    <tbody>
                                    <tr>
                                        <th scope="row">Judul</th>
                                        <td>`+result.Title+`</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rilis</th>
                                        <td>`+result.Released+`</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Genre</th>
                                        <td>`+result.Genre+`</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Writer</th>
                                        <td>`+result.Writer+`</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Aktor</th>
                                        <td>`+result.Actors+`</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Plot</th>
                                        <td>`+result.Plot+`</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `);
            }
        });

    });

});
