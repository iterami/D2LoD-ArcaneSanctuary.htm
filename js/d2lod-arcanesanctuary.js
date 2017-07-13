'use strict';

function draw_logic(){
    for(var entity in core_entities){
        canvas_buffer.fillRect(
          core_entities[entity]['x'],
          core_entities[entity]['y'],
          1,
          1
        );
    }
}

function logic(){
    // Add a randomly placed star every other frame.
    if(create_star){
        core_entity_create({
          'properties': {
            'speed': core_random_integer({
              'max': 3,
              'todo': 'ceil',
            }),
            'x': canvas_width,
            'y': core_random_integer({
              'max': canvas_height,
            }),
          },
        });
    }
    create_star = !create_star;

    for(var entity in core_entities){
        core_entities[entity]['x'] -= core_entities[entity]['speed'];

        // Remove stars that reached left side of screen.
        if(core_entities[entity]['x'] < 0){
            core_entity_remove({
              'entities': [
                entity,
              ],
            });
        }
    }
}

function repo_init(){
    core_repo_init({
      'title': 'D2LoD-ArcaneSanctuary.htm',
    });
    canvas_init();
}

function resize_logic(){
    canvas_buffer.fillStyle = '#fff';
}

var create_star = true;
