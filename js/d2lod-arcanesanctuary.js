'use strict';

function draw_logic(){
    for(var star in stars){
        canvas_buffer.fillRect(
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
          'speed': random_integer({
            'max': 3,
            'todo': 'ceil',
          }),
          'x': canvas_width,
          'y': random_integer({
            'max': canvas_height,
          }),
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
    canvas_buffer.fillStyle = '#fff';
}

var create_star = true;
var stars = [];

window.onload = canvas_init;
