var plusBtn = $('.fa-plus'),
    lists = $('li')


plusBtn.on('click', function(){
    $('input[type="text"]').fadeToggle();
})

$('ol').on('click', 'li' , function(){

    if($(this).css('color') === 'rgb(51, 51, 51)'){
        $(this).addClass('completed');
    }
    else {
        $(this).removeClass('completed')
    }
})


$('ol').on('click','span', function(){
    $(this).parent().fadeOut(500,function(e){
        $(this).remove();
        
    })

})

$('input[type="text"]').on('keypress',  function(e){
    
    var todoVal = $(this).val();
    if(e.which === 13){
    
    $('ol').append('<li class="todos text-left p-2"> <span class="slider"><i class="fa fa-trash-o"></i></span>' + todoVal + '</li>');
        $(this).val('');
    }
     
})