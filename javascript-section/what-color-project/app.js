(function(global) {

    var game = {
        counter: 6,
        setter: true,
        randomColor: function(){
            var r = Math.floor(Math.random() * 256),
                g = Math.floor(Math.random() * 256),
                b = Math.floor(Math.random() * 256)

            return 'rgb(' + r + ', ' + g + ', ' + b + ')'; 
        },

        arrColors: function(){

            var arr = []

            for(let i = 0 ; i < this.counter ; i++){
                arr.push(this.randomColor())
            }
            return arr;
        },

        squares : document.querySelectorAll('.square'),
        displayColor : document.querySelector('#mainColor'),
        error : document.querySelector('#error'),
        headerColor: document.querySelector('#mainHeader'),
        newColorsBtn: document.querySelector('#newColors'),
        mode: document.querySelectorAll('.buttons'),

        modeBtn : function(){

            for(let i = 0 ; i < game.mode.length ; i++){

                game.mode[i].addEventListener('click' , function(){

                    game.mode[i].innerHTML === 'Easy' ? game.counter = 3 : game.counter = 6 ;

                    game.reset();
                })
            }
        },


        
        
        init: function(){

            var allColors = this.arrColors();
            var xColor =  allColors[Math.floor(Math.random()*game.counter)]

            console.log(game.counter);

            for(let i = 0 ; i < this.squares.length ; i++ ){

                this.squares[i].style.backgroundColor = allColors[i];


                this.squares[i].addEventListener('click', function(){

                    console.log('-------LENGTH----------- 2nd ' + allColors.length )

                    var clickedColor = this.style.backgroundColor
                    
                    if(clickedColor === xColor  ) {

                        console.log("MY COLOR " + xColor);
                        console.log("ARRAYS OF COLOR" + clickedColor);

                        game.error.classList.add('bgCorrect')

                        game.error.innerHTML = 'Correct!';

                        game.newColorsBtn.innerHTML = 'Play Again?';

                        game.headerColor.style.backgroundColor = xColor;

                        for(let i = 0 ; i < game.squares.length ; i++){
                            game.squares[i].style.backgroundColor = xColor;
                        }
                    }
                    
                    else {
                        console.log("-- MY COLOR ---  " + xColor);
                        console.log("--CLICKED COLOR-- " + clickedColor);

                        game.error.classList.add('bgWrong')
                        game.error.innerHTML = 'Try Again!'
                        game.squares[i].style.backgroundColor = '#333'
                    }


                })/*click Event*/

            }/*1st for loop*/

            for(let i = 0 ; i < game.squares.length ; i++){

                if(allColors[i]){
                    game.squares[i].style.display = 'inline-block'

                }
                else {
                    game.squares[i].style.display = 'none'
                }

            }

            this.displayColor.innerHTML = xColor;
        },

        newColors: document.querySelector('#newColors').addEventListener('click', function(){

            game.reset();
        }),

//        randomer: function(arrClrs){
//
//            var x = arrClrs[Math.floor(Math.random() * this.squares.length)]
//
//            return x;
//        },

        
        
        
        reset : function(){

//             game.arrColors();
            
//            game.randomer(allColors)
            
//            console.log(game.randomer(this.allColors) + ' randomer')

            console.log(game.counter);
            //                      console.log(game.xColors);
            game.headerColor.style.backgroundColor = 'steelblue'
            game.error.innerHTML = '';
            game.error.classList.remove('bgWrong');
            game.error.classList.remove('bgCorrect');
            game.newColorsBtn.innerHTML = 'New Colors'

//            for(let i = 0 ; i < this.squares.length ; i++ ){
//
//                this.squares[i].style.backgroundColor = this.allColors[i]
//            }

                        game.init();

        },

    }

    game.modeBtn(); 
    game.init();
    global.game = game;

}(window));