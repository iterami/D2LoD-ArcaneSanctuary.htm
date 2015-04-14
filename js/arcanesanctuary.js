function draw(){
    buffer.clearRect(
      0,
      0,
      width,
      height
    );

    buffer.fillStyle = '#fff';
    for(var star in stars){
        buffer.fillRect(
          stars[star]['x'],
          stars[star]['y'],
          1,
          1
        );
    }

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
        stars.push({
          'speed': Math.floor(Math.random() * 3) + 1,
          'x': width,
          'y': Math.floor(Math.random() * height),
        });
    }
    create_star = !create_star;

    buffer.fillStyle = '#fff';
    for(var star in stars){
        stars[star]['x'] -= stars[star]['speed'];

        // Remove stars that reached left side of screen.
        if(stars[star]['x'] < 0){
            stars.splice(
              star,
              1
            );
        }
    }
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
    resize();
    window.onresize = resize;

    window.requestAnimationFrame(draw);
    window.setInterval(
      'logic()',
      30
    );
};
