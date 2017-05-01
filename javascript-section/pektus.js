(function(global){

    
    var list = function(){
        todo.forEach(function(x,i){

            log( i + 1 + ': ' + x);
        })       

        log('-----------');

    },
        newInput = function(){
            var newtodo = prompt('what do you wanna add?');    
            todo.push(newtodo);

        },

        delMe = function(){

            //ask for index then convert it to integer.

            var deleteme = Number(prompt('what number do you want to delete?')-1);


            //if number exist in index
            if(todo.indexOf(todo[deleteme]) !== -1){

                //logs deleted
                log(todo[deleteme] + ' - has been removed.');

                //deletes the item in the index
                todo.splice(deleteme , 1);
            }
        },

        log = function(a){
            console.log(a);
        }


    global.list = list; 
    global.newInput = newInput;
    global.delMe = delMe;
    global.log = log ;

}(window));
