var numOfSquares = 6, 
    colors = generateRandomColors(numOfSquares),
    pickColor = pickedColor(),
    squares = document.querySelectorAll('.square'),
    colorDisplay = document.querySelector('#mainColor'),
    error = document.querySelector('#error'),
    mainColor = document.querySelector('#mainHeader'),
    restart = document.querySelector('#newColors'),
    difficulties = document.querySelectorAll('.buttons');


init();

function init(){

    modeBtn();
    setupSquares();
    reset();

}



function modeBtn(){

    for(let i = 0 ; i < difficulties.length ; i++){
        difficulties[i].addEventListener('click',function(){

            difficulties[0].classList.remove('bgBtn');
            difficulties[1].classList.remove('bgBtn');
            this.classList.add('bgBtn');

            this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;

            reset();
        })

    }

}



function setupSquares(){

    for(let i = 0 ; i < squares.length ; i++){

        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click' , function(){

            var clickedColor = this.style.backgroundColor;


            if(clickedColor === pickColor){

                error.classList.add('bgCorrect');

                error.innerHTML = 'Correct!';

                mainHeader.style.backgroundColor = clickedColor;

                restart.innerHTML = 'Play Again?';

                for(let i = 0 ; i < squares.length ; i++){
                    squares[i].style.backgroundColor = clickedColor;
                }

            }
            else {

                this.style.backgroundColor = '#333';
                error.classList.add('bgWrong');
                error.classList.remove('bgCorrect');
                error.innerHTML = 'Try Again!'
            }
        })
        colorDisplay.innerHTML = pickColor;  
    }


}


restart.addEventListener('click' , function(){
    reset();
})



function reset(){

    colors = generateRandomColors(numOfSquares);
    pickColor = pickedColor();
    colorDisplay.innerHTML = pickColor;
    error.innerHTML = '';
    mainColor.style.backgroundColor = 'steelblue';
    restart.innerHTML = 'New Colors';


    for(let i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
    }



    for(let i = 0 ; i < squares.length ; i++){

        if(colors[i]){

            squares[i].style.display = 'inline-block';

        }
        else {

            squares[i].style.display = 'none';

        }

    }


}


function generateRandomColors(num){

    var arr = [];

    for(let i = 0 ; i < num ; i++){

        arr.push(randomColors());
    }

    return arr;
}

function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}


function randomColors(){

    var r = Math.floor(Math.random() * 256 );
    var g = Math.floor(Math.random() * 256 );
    var b = Math.floor(Math.random() * 256 );

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}