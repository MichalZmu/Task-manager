$(document).ready(function(){
    
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
    dd='0'+dd
    } 

    if(mm<10) {
    mm='0'+mm
    } 
    today = mm+'/'+dd+'/'+yyyy;
    var counter = 1;
    

    $('button.btn.btn-primary').click(function(){
        var text = $('textarea#mytextarea').val();
        $('#my-table').append('<tr><td class="dateColumn">'+today+'</td><td class="textColumn">'+text+'</td><td class = "buttonColumn" ><button type="button" class="btn btn-success">Edit</button> <button type="button" class="delete-button btn btn-danger">Delete</button></td></tr>');
        $('textarea#mytextarea').val('');
        counter++;
        
    });
    
    
    /*$('button.btn.btn-danger').click(function(){
        $(this).parents('tr').remove();  
    });*/
    
    $(document).on('click', 'button.btn.btn-danger' , function() {
        $(this).parents('tr').remove();  
      });
    
    $(document).on('click', 'button.btn.btn-success' , function() {
        var text = $(this).parent().parent().find('td.textColumn').text();
        console.log(text);
        $(this).parent().parent().find('td.textColumn').html('<input type="text" class="form-control" id="usr">');
        //$(this).parent().parent().find('td.buttonColumn').html('<button type="button" id="editButton" class="btn btn-success">Ready?</button>');
        $(this).parent().parent().find('td.textColumn').find('input').val(text);
        $(this).parent().parent().find('td.buttonColumn').html('<button type="button" class="btn btn-warning">Ready?</button>');
                      
      });
    
    
     $(document).on('click', 'button.btn.btn-warning' , function() {
            var textAfter = $(this).parent().parent().find('td.textColumn').find('input.form-control').val();
            console.log(textAfter);
            $(this).parent().parent().find('td.textColumn').html(textAfter);
            $(this).parent().parent().find('td.buttonColumn').html('<button type="button" class="btn btn-success">Edit</button> <button type="button" class="delete-button btn btn-danger">Delete</button>');
        });

    //$('button.btn.btn-danger').on( "click", function( event ) {
    //$( event.target ).closest( "tr" ).remove();
    //});

    
    
});