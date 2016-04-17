'use strict';

function draw_logic(){
    for(var star in stars){
        buffer.fillRect(
          stars[star]['x'],
          stars[star]['y'],
          1,
          1
        );
    }
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

function resize_logic(){
    buffer.fillStyle = '#fff';
}

var create_star = true;
var stars = [];

window.onload = init_canvas;
