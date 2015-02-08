function draw(){
    buffer.clearRect(
      0,
      0,
      width,
      height
    );

    loop_counter = stars.length - 1;
    buffer.fillStyle = '#fff';
    do{
        // Draw star.
        buffer.fillRect(
          stars[loop_counter][0],
          stars[loop_counter][1],
          1,
          1
        );
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

    window.requestAnimationFrame(draw);
}

function logic(){
    // Add a randomly placed star every other frame.
    if(create_star){
        push_star();
    }
    create_star = !create_star;

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
        }
    }while(loop_counter--);
}

function push_star(){
    stars.push([
      width,// X
      Math.floor(Math.random() * height),// Y
      Math.floor(Math.random() * 3) + 1,// Speed
    ]);
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

window.onload = function(){
    push_star();
    resize();
    window.onresize = resize;

    window.requestAnimationFrame(draw);
    window.setInterval(
      'logic()',
      30
    );
};
