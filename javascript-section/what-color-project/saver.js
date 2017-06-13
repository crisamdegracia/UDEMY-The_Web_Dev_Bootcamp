var numOfSquares = 6,
    colors = [],
    pickedColor ,
    squares = document.querySelectorAll('.square'),
    error = document.querySelector('#error'),
    colorDisplay = document.querySelector('#mainColor'),
    mainHeader = document.querySelector('#mainHeader'),
    reset = document.querySelector('#newColors'),
    mode = document.querySelectorAll('.buttons');

init();

function init(){

    setupModeButton();

    setupSquares();

    resetFunc();    

}


function setupSquares(){

    for(let i = 0 ; i < squares.length ; i++){
        /*sets all the random color to the squares*/
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click', function(){

            var clickedColor = this.style.backgroundColor;

            /*if clicked color is equal to the random picked colr*/
            if( clickedColor === pickedColor){

                error.classList.add('bgCorrect');
                error.classList.remove('bgWrong')
                error.innerHTML = 'Correct!';
                mainHeader.style.background = clickedColor;
                changeColor(clickedColor);
                reset.innerHTML = 'Play Again?'

            }
            else {

                this.style.backgroundColor = '#333'
                error.classList.add('bgWrong');
                error.innerHTML = 'Try Again!';
                error.classList.remove('bgCorrect')

            }
        })
    }
    
    colorDisplay.innerHTML = pickedColor;
}




function setupModeButton(){

    //mode button event listener easy and hard.
    for(let i = 0 ; i < mode.length ; i++){
        mode[i].addEventListener('click', function(){

            //remove the active state
            mode[0].classList.remove('bgBtn');
            mode[1].classList.remove('bgBtn');

            //set the class when its clicked
            this.classList.add('bgBtn');

            //if easy button was clicked numofsquare is = 3 else numofsquares is 6;
            this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;

            resetFunc();

        })
    }
}


//put an events to ease and hard button
function resetFunc(){

    //creates a random colors base of how many numofsquares value is
    colors = generateRandomColors(numOfSquares);

    //creates a random picked color 
    pickedColor = pickColor();


    error.textContent = '';

    colorDisplay.innerHTML = pickedColor;

    mainHeader.style.backgroundColor = 'steelblue';


    for(let i = 0 ; i < squares.length ; i++){
        /*
        it will check each color that passes from the number of num squares 3 ot 6
        then if the index of color[3] which has no generated color it will go to else statement then the index that did not get a generated color would be style.display = 'none';
        tricky!!
        */
        if(colors[i]){        

            squares[i].style.display = 'inline-block';

            squares[i].style.backgroundColor = colors[i];
        } 

        else {
            squares[i].style.display = 'none';
        }
    }    
    reset.textContent = 'New Colors';
}



reset.addEventListener('click', function(){

    resetFunc();


})


function changeColor(color){

    for( let i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){

    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}


function generateRandomColors(num){

    var arr = [];

    for(let i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;

}

function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}