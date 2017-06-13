var todos = $('.todos'),
    trash = $('span'),
    input = $('input'),
    plusBtn = $('.fa-plus')


$('ol').on('click', 'li' , function(){

    if($(this).css('color') === 'rgb(51, 51, 51)') {

        $(this).toggleClass('completed')
    }

    else {
        $(this).removeClass('completed')
    }

})
//
//$('ol').on('click', 'span' ,function(e){
//
//    $(this).parent().fadeOut(500, function(){
//        $(this).remove();
//    });
//    e.stopPropagation();
//})


$('input[type="text"]').on('keypress', function(e){

    if(e.which === 13){

        var todoText = $(this).val()
        $(this).val('')
        $('ol').append(' <li class="todos text-left p-2"> <span class="slider"><i class="fa fa-trash-o"></i></span>' + todoText + '</li>')

        e.stopPropagation();
    }
    else {
        console.log(todos.length)
    }

})



plusBtn.on('click' , function(){
    
    $('input[type="text"]').fadeToggle();
})