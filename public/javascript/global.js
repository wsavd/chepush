$(document).ready(function  () {
        $("#boards").on('click', function (e) {
	 		e.preventDefault();
            $.ajax({
                url: 'http://localhost:3001/board/',
                type: 'GET',
                contentType: 'application/json',
                /*succes: function(result){
                    var tbodyEl = $('tbody');

                    tbodyEl.html('');
                    $.each(result, function() {
                        tbodyEl.append('\
                        <tr>\
                            <td class="id">' + result.id + '</td>\
                            <td><input type="text" class="name" value="' + result.title + '"></td>\
                            <td>\
                                <button class="update-button">UPDATE/PUT</button>\
                                <button class="delete-button">DELETE</button>\
                            </td>\
                        </tr>\
                    ');
                    })
                },*/
                success: function(result) {
                    $.each(result, function(index){
                            console.log(result[index].title)
                    })
                    //var parsed0 = result[0].title,
                      //  parsed1 = result[1].title
                //console.log(parsed0);
                //console.log(parsed1);
                //$.each(parsed, function(key, value){
                   // console.log(key);
                    //console.log(key);
                //})
                },
                error: function (error) {
                    console.log(error);
                }
                });
	 	})
        
});