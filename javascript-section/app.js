var todo = ['slice the ham','feed the dogs'];
var input = prompt('What you want to do?')


while(input !== 'quit'){

    if(input === 'list'){

        list(); 

    }

    else if(input === 'new'){

        newInput();

    }  
    else if (input === 'delete'){

        delMe();

    }  else {
        log('That number is not empty.')
    } 


    //reloop
    input = prompt('What you wanna do again?')
}

log('You have been disconnected.');

