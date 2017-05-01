(function(global,$){ 

var log = function(a){
    console.log(a);
}   

global.log = log;
    
var person = function(fname,lname,lang){
    
    return new person.x(fname,lname,lang)
    
}


var supportedLang = ['en','ta',]

person.x = function(fname,lname,lang){
    
    this.fname = fname || 'Firstname'; 
    this.lname = lname || 'Lastname'; 
    this.lang = lang || 'en'; 
}

var msg = '';

person.prototype = {

    getFullname: function(){
    return this.fname + ' ' + this.lname;    
    
    },
    
    validate: function(){
        
        if(this.lang.indexOf(this.supportedLang)){
            console.log('Boom!');
        }
        else {
            
            console.log("Looks like there's some errors.")
        }
        
    },
    
    
    
    logMsg: function(logIn){
        
         log('user:' + this.fname);
    
}(msg),
     
}
    

person.x.prototype = person.prototype;    
    
global.person = global.G$ =  person;



})(window,jQuery);
