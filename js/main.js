'use strict';

function repo_drawlogic(){
    entity_group_modify({
      'groups': [
        'canvas',
      ],
      'todo': function(entity){
          canvas_buffer.fillRect(
            entity_entities[entity]['x'],
            entity_entities[entity]['y'],
            1,
            1
          );
      },
    });
}

function repo_logic(){
    entity_create({
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

    entity_group_modify({
      'groups': [
        'canvas',
      ],
      'todo': function(entity){
          entity_entities[entity]['x'] -= entity_entities[entity]['speed'];

          // Remove stars that reached left side of screen.
          if(entity_entities[entity]['x'] < 0){
              entity_remove({
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
