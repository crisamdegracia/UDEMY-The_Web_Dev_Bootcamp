var todos = $('.todos'),
    trash = $('span'),
    input = $('input')

trash.css({display:'none'})

todos.on('click', function(){

    if($(this).css('color') === 'rgb(51, 51, 51)') {

        $(this).toggleClass('completed')
    }

    else {
        $(this).removeClass('completed')
    }

})

trash.on('click', function(e){
    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})


$('input[type="text"]').on('keypress', function(e){
    
    if(e.which === 13){
        
        var todoText = $(this).val()
         $(this).val('')
        $('ol').append('<li>' + todoText + '</li>')
       
        e.stopPropagation();
    }
    else {
        console.log(todos.length)
    }
   
})

todos.on('mouseenter', function(){
    
    $(this).children().fadeIn(200);
    
})

todos.on('mouseleave', function(){
    
    $(this).children().fadeOut(200);
    
})