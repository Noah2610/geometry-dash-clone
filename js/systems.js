// Moves the given entity (Player, etc.) that,
// has a position and a velocity.
function moveEntity(entity) {
    if (entity.position && entity.velocity && entity.solid) {
        const velRem = {
            x: entity.velocity.x % 1.0,
            y: entity.velocity.y % 1.0
        }
        const velSign = {
            x: Math.sign(entity.velocity.x),
            y: Math.sign(entity.velocity.y),
        }
        function doesEntityCollide(targetEntity) {
            return entities.some(function (otherEntity) {
                return (
                    otherEntity.solid &&
                    entity.id !== otherEntity.id &&
                    doEntitiesCollide(targetEntity, otherEntity)
                );
            });
        }
        ["x", "y"].forEach(function (axis) {
            let inCollision = false;
            const pixels = Math.floor(Math.abs(entity.velocity[axis]));
            for (let i = 0; i < pixels; i++) {
                const newPos = {
                    x: entity.position.x,
                    y: entity.position.y,
                }
                newPos[axis] += velSign[axis];
                const tmpEntity = {
                    position: newPos,
                    size: entity.size,
                }
                if(doesEntityCollide(tmpEntity)) {
                    inCollision = true;
                    break;
                } else {
                    entity.position[axis] = newPos[axis]
                }
            }
            if(!inCollision && velRem[axis] !== 0.0) {
                const newPos = {
                    x: entity.position.x,
                    y: entity.position.y,
                }
                newPos[axis] += velRem[axis];
                const tmpEntity = {
                    position: newPos,
                    size: entity.size,
                }
                if(doesEntityCollide(tmpEntity)) {
                    inCollision = true;
                } else {
                    entity.position[axis] = newPos[axis]
                }
            }
            if(inCollision) {
                entity.velocity[axis] = 0.0
            }
        })
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
        if(entity.position && entity.size && entity.img) {
            image(entity.img, entity.position.x - camera.x, entity.position.y - camera.y);
        } else if (entity.position && entity.size) {
            if (entity.color) {
                fill(entity.color);
            }
            rect(
                entity.position.x - camera.x,
                entity.position.y - camera.y,
                entity.size.w,
                entity.size.h,
            );
        }
    }
}

// Changes velocity on all entities, that
// have gravity and velocity.
// Simulates gravity.
function applyGravity(entity) {
    if (entity.gravity && entity.velocity) {
        entity.velocity.y += entity.gravity;
    }
}

//Player jumps when the button "Space" is pressed
function checkJump(entity) {
    if(entity.canJump && entity.velocity && entity.size) {
        if(keyIsDown(32)) { // 32 ... Space
            const checkEntity = {
                position: {
                    x: entity.position.x,
                    y: entity.position.y + 1
                },
                size: entity.size
            }
            const isStandingOnGround = entities.some(function (otherEntity) {
                return (
                    otherEntity.solid &&
                    otherEntity.position &&
                    otherEntity.size &&
                    entity.id !== otherEntity.id &&
                    doEntitiesCollide(checkEntity, otherEntity)
                );
            });
            if(isStandingOnGround) {
                entity.velocity.y -= 5;
            }
        }
    }
}