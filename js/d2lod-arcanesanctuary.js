'use strict';

function draw_logic(){
    core_group_modify({
      'groups': [
        'canvas',
      ],
      'todo': function(entity){
          canvas_buffer.fillRect(
            core_entities[entity]['x'],
            core_entities[entity]['y'],
            1,
            1
          );
      },
    });
}

function logic(){
    // Sometimes add a randomly placed star.
    if(create_star){
        core_entity_create({
          'properties': {
            'speed': core_random_integer({
              'max': 3,
              'todo': 'ceil',
            }),
            'x': canvas_properties['width'],
            'y': core_random_integer({
              'max': canvas_properties['height'],
            }),
          },
        });
    }
    create_star = !create_star;

    core_group_modify({
      'groups': [
        'canvas',
      ],
      'todo': function(entity){
          core_entities[entity]['x'] -= core_entities[entity]['speed'];

          // Remove stars that reached left side of screen.
          if(core_entities[entity]['x'] < 0){
              core_entity_remove({
                'entities': [
                  entity,
                ],
              });
          }
      },
    });
}

function repo_init(){
    core_repo_init({
      'title': 'D2LoD-ArcaneSanctuary.htm',
    });
    canvas_init();
}

var create_star = true;
