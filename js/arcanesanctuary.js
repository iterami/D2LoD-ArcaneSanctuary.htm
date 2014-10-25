function draw(){
    buffer.clearRect(
      0,
      0,
      width,
      height
    );

    // Add a randomly placed star every other frame.
    if(create_star){
        stars.push([
          width,// X
          Math.floor(Math.random() * height),// Y
          Math.floor(Math.random() * 3) + 1,// Speed
        ]);

        create_star = false;

    }else{
        create_star = true;
    }
    

    loop_counter = stars.length - 1;
    buffer.fillStyle = '#fff';
    do{
        if(stars[loop_counter][0] < 0){
            // Remove stars that reached left side of screen.
            stars.splice(
              loop_counter,
              1
            );

        }else{
            // Update star position.
            stars[loop_counter][0] -= stars[loop_counter][2];

            // Draw star.
            buffer.fillRect(
              stars[loop_counter][0],
              stars[loop_counter][1],
              1,
              1
            );
        }
    }while(loop_counter--);

    canvas.clearRect(
      0,
      0,
      width,
      height
    );
    canvas.drawImage(
      document.getElementById('buffer'),
      0,
      0
    );
}

function resize(){
    height = window.innerHeight;
    document.getElementById('buffer').height = height;
    document.getElementById('canvas').height = height;

    width = window.innerWidth;
    document.getElementById('buffer').width = width;
    document.getElementById('canvas').width = width;
}

var buffer = document.getElementById('buffer').getContext('2d');
var canvas = document.getElementById('canvas').getContext('2d');
var create_star = true;
var height = 0;
var stars = [];
var width = 0;

resize();
window.onresize = resize;

setInterval(
  'draw()',
  30
);
