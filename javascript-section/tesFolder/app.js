console.log('connected.');


(function(global,e){

    var score1 = document.getElementById('scr1'),
        score2 = document.getElementById('scr2'),

        playerCount = document.getElementById('playerCount'),
        numberCount = document.getElementById('numberCount'),

        player1 = document.getElementById('p1'),
        player2 = document.getElementById('p2'), 
        gameover = false,
        reset = document.getElementById('reset');

        
    
    
    player1.addEventListener('click', function(e){
        
        
        if(!gameover){

            if(parseInt(score1.textContent) < Number(numberCount.value) ){

                score1.innerText++

                if(parseInt(score1.textContent) === parseInt(numberCount.value)){
                    gameover = true;
                    score1.classList.add('winner');
                }
            }
        }  



    })
    player2.addEventListener('click', function(e){

        if(!gameover){

            if(parseInt(score2.textContent) < Number(numberCount.value) ){

                score2.innerText++

                if(parseInt(score2.textContent) === parseInt(numberCount.value)){
                    score2.style.color = 'green';
                    gameover = true;
                }
            }
        }  



    })
    
    numberCount.addEventListener('change', function(){
        
       playerCount.innerHTML = numberCount.value
    })
    

    reset.addEventListener('click', function(){
        
        score2.classList.remove('winner');
        score1.classList.remove('winner');
        score1.textContent = 0;
        score2.textContent = 0;
        numberCount.value  = 0;
        playerCount.textContent = 0;
        gameover = false;
    })



}(window));







