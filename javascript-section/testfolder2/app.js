 var counter = 6,
    color = generateRandomColor(counter),
    squares = document.querySelectorAll('.square'),
    pickColor = pickedColor(),
    colorDisplay = document.querySelector('#mainColor'),
    errormsg = document.querySelector('#error'),
    headColor = document.getElementById('mainHeader'),
    reset = document.querySelector('#newColors'),
    difficulties = document.querySelectorAll('.buttons')

colorDisplay.textContent = pickColor; 

ikenat();


function ikenat(){

    modeButton();
    restart();
    setupSquares();
}

function setupSquares(){

    for(let i = 0 ; i < squares.length ; i++){

        squares[i].style.backgroundColor = color[i];

        squares[i].addEventListener('click' , function(){

            var clickedColor = this.style.backgroundColor;


            if(clickedColor === pickColor ){

                error.classList.add('bgCorrect');

                error.textContent = 'Correct!';

                reset.textContent = 'Play Again?';

                headColor.style.backgroundColor = pickColor;

                for(let i = 0 ; i < squares.length ; i++){
                    squares[i].style.backgroundColor = pickColor;
                }


            }
            else {

                this.style.backgroundColor = "#333";
                error.classList.add('bgWrong');
                error.textContent = 'Try Again!';

            }


        })    

    }

}


reset.addEventListener('click' , function(){
    restart();
})

function restart(){

    color = generateRandomColor(counter);
    pickColor = pickedColor();
    console.log(pickColor)
    colorDisplay.innerHTML = pickColor;
    headColor.style.backgroundColor = 'steelblue';
    error.textContent = '';
    error.classList.remove('bgCorrect');
    reset.textContent = 'New Colors';


    for(let i = 0 ; i < squares.length ; i++){

        squares[i].style.backgroundColor = color[i];       

    }

    for(let i = 0 ; i < squares.length ; i++){

        if(color[i]){

            squares[i].style.display = 'inline-block'
        }

        else {
            squares[i].style.display = 'none';
        }



    }



}

function modeButton(){




    for(let i = 0 ; i < difficulties.length ; i++){

        difficulties[i].addEventListener('click', function(){
            console.log(counter)
            this.textContent === 'Easy' ? counter = 3 : counter = 6; 
restart();
            
        })
    }

}

function pickedColor(){

    var random = Math.floor(Math.random() * counter)
    console.log(random);
    return color[random];
}


function generateRandomColor(num) {

    var arr = [];

    for(let i = 0 ; i < num ; i++){
        arr.push(randomColor())
    }

    return  arr; 
}

function randomColor(){

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}