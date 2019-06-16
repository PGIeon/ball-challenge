
// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener
document.getElementById('background-btn').addEventListener('click', function(){

    var backgroundImage = document.getElementById('newimg')
    
    var newimg = document.getElementById('background').style.backgroundImage = "url('./assets/bbunny.jpg')";
})


// this is the code for changing a background image
// missing image url
// document.getElementById('background').style.backgroundImage = "url('./assets/background.jpg')";








// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 20;

    document.getElementById('ball').style.left = newPosition + 'px';
});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 20;

    document.getElementById('ball').style.left = newPosition + 'px';
});


 
document.getElementById('down').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.top;
 
    var newPosition = parseInt(position) + 20;
 
    document.getElementById('ball').style.top = newPosition + 'px';
 
 })

 document.getElementById('up').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.top;

    var newPosition = parseInt(position) - 20;
 
    document.getElementById('ball').style.top = newPosition + 'px';
 
 })


