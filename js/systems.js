// Moves the given entity (Player, etc.) that,
// has a position and a velocity.
function moveEntity(entity) {
        if (entity.position && entity.velocity && entity.solid) {
            let canMove = true;
            const newposition = {
                x: entity.position.x,
                y: entity.position.y,
            };
            newposition.x += entity.velocity.x;
            newposition.y += entity.velocity.y;
            const tmpEntity = {
                position: newposition,
                size: entity.size,
            };
            for(let j = 0; j < entities.length; j++) {
                const entity2 = entities[j];
                if(entity.id !== entity2.id) {
                    if(collideB(tmpEntity, entity2)) {
                        //console.log("JA");
                        console.log("Juhu");
                        //break;
                    }
                    if(collideLR(tmpEntity, entity2)) {
                        //console.log("JA");
                        console.log("Jap");
                        //break;
                    }
                    if (doEntitiesCollide(tmpEntity, entity2)) {
                        canMove = false;
                        entity.velocity.y = 0;
                        checkJump();
                        //console.log("Hää"); 
                        appylGravityAway(); //hier wäre kein gravity
                        break;
                    } 
                }
            }
            if (canMove) {
                entity.position = newposition;
            }
        } else if (entity.position && entity.velocity) {
            entity.position.x += entity.velocity.x;
            entity.position.y += entity.velocity.y;
        }
}

// Draws all entities as rectangles,
// that have a position and a size.
// Draws the entity with a color,
// if the enity has a color.
function drawEntities() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.position && entity.size) {
            if (entity.color) {
                fill(entity.color);
            }
            rect(
                entity.position.x,
                entity.position.y,
                entity.size.w,
                entity.size.h,
            );
        }
    }
}

// Changes velocity on all entities, that
// have gravity and velocity.
// Simulates gravity.
function applyGravity() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.gravity && entity.velocity) {
            entity.velocity.y += entity.gravity;
        }
    }
}

//neu
function appylGravityAway() {
    for (let i = 0; i < entities.length; i++) {
        const entity = entities[i];
        if (entity.gravity && entity.gravity) {
            entity.velocity.y -= entity.gravity;
        }
    }
}

//Player jumps when the button "Space" is pressed
function checkJump() {
    if(keyIsDown(32)) { // 32 ... Space
        entities[0].velocity.y -= 4;
    }
}