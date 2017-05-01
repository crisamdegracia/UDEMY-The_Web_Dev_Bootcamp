console.log('connected!');
'use strict';
var mainColor = document.querySelector('#mainColor'),
    newColors = document.getElementById('newColors'),
    error = document.querySelector('#error'),
    easy = document.querySelector('#easy'),
    hard = document.querySelector('#hard'),
    square = document.querySelectorAll('.square'),
    buttons = document.querySelectorAll('.buttons'),
    mainColor = document.querySelector('#mainColor'),
    saved;

  
//when page loads squares it loads random colors..
window.addEventListener('load', function () {

    var counter = 0;

    while (counter !== 6) {

        var forRandom = '1234567890abcdef',
            res = '#';


    for (let i  = 0 ; i < 6 ; i++){

        res += forRandom[Math.floor(Math.random()*forRandom.length)]

    }
    for(let i = 0 ; i < square.length ; i++){

        square[counter].style.backgroundColor = res;

    }
        
    counter++
    }
 mainColor.innerHTML = res;
});



// when its pressed it will change the square colors
newColors.addEventListener('click', function(){

    //it checks the index of square for its value
    var counter = 0;


    //adding up the color for the index of squares
    while( counter !== 6 ){

        var forRandom = 'abcdef1234567890';
        var res = '#';
        var l = 0;
        for( ; l < 6 ; l++ ){

            res += forRandom[Math.floor(Math.random()*forRandom.length)]
           
        } 
        //square index base from counter which is zero and res means the value of the random colors
        square[counter].style.backgroundColor = res;
       
          counter++;  
       

    }
   
   mainColor.innerHTML = res;
})

/*------REMOVES the 3 childs and their length is also 3.*/

easy.addEventListener('click' , function(){
    
    while(parentSquare.children.length !== 3){
        
    parentSquare.removeChild(parentSquare.children[3])
    }
    console.log(parentSquare.children.length)
})

hard.addEventListener('click', function(){
    
    parentSquare.addBack('.square')
    
})














