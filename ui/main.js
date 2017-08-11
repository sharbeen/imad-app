var button = document.getElementById('counter');

button.onclick = function(){
    //Make a request to counter end point
    //create a request object
    var request = new XMLHttpRequest();
    
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readystate === XMLHttprequest.DONE){
          //take some action
          if(request.status === 200)
          {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
          }
      }  
      //not done yet
    };
    //make the request
    //render the variable in the correct span
    
    request.open('GET','http://chappisurf.imad.hasura-app.io/counter',true);
    request.send(null);
};