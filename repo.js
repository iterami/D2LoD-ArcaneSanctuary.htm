'use strict';

function draw_star(entity){
    canvas.fillRect(
      entity.x,
      entity.y,
      1,
      1
    );
}

function move_star(entity){
    entity.x -= entity.speed;

    if(entity.x < 0){
        entity_remove({
          'entities': [
            entity.id,
          ],
        });
    }
}

function repo_drawlogic(){
    entity_group_modify({
      'groups': [
        'canvas',
      ],
      'todo': draw_star,
    });
}

function repo_init(){
    core_repo_init({
      'title': 'D2LoD-ArcaneSanctuary.htm',
    });
    canvas_init();
}

function repo_logic(){
    entity_create({
      'properties': {
        'speed': core_random_integer(3) + 1,
        'x': canvas_properties.width,
        'y': core_random_integer(canvas_properties.height),
      },
    });

    entity_group_modify({
      'groups': [
        'canvas',
      ],
      'todo': move_star,
    });
}
