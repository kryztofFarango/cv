
$("#form1").submit(function(event) {
     var ajaxRequest;

    /* Stop form from submitting normally */
    event.preventDefault();

    /* Clear result div*/
    $("#result").html('');

    if($('#comments').val() == "" || $('#subject').val() == ""  || $('#first_name').val() == ""  || $('#email').val() == "" )
    {
        $("#result").html('Completa los datos que faltan para enviar el correo');
        return false;
    }

    /* Get from elements values */
    var values = { //Fetch form data
            'comments'     : $('#comments').val(),
            'subject'     : $('#subject').val(),
            'first_name'     : $('#first_name').val(),
            'last_name'     : $('#last_name').val(),
            'email'     : $('#email').val(),
        };

    /* Send the data using post and put the results in a div */
    /* I am not aborting previous request because It's an asynchronous request, meaning 
       Once it's sent it's out there. but in case you want to abort it  you can do it by  
       abort(). jQuery Ajax methods return an XMLHttpRequest object, so you can just use abort(). */
       ajaxRequest= $.ajax({
            url: "sendMail.php",
            type: "POST",
            data: values
        });

      /*  request cab be abort by ajaxRequest.abort() */

     ajaxRequest.done(function (response, textStatus, jqXHR){
          // show successfully for submit message
          $("#result").html('Gracias por contactarnos');
     });

     /* On failure of request this function will be called  */
     ajaxRequest.fail(function (){

       // show error
       $("#result").html('Ha ocurrido un error por favor inténtalo más tarde');
     });
   });
   
   
   
   
   
   
