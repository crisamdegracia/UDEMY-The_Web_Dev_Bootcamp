<div class="container mainContainer">
    <div class="row">
        <div class="col-md-8">
        <h2>Your Tweets</h2>     
        
              <?php displayTweets('yourtweets'); ?>      
        </div>
        
        
        <div class="col-md-4" id="widget">
           <h2> Who's That Pokemon</h2>
           
           <?php displaySearch(); ?>
           <br>
           
           <h1> WOOOO!</h1>
           <?php displayTweetBox(); ?>
            
        </div>    
        
    </div>
    
    
</div>
