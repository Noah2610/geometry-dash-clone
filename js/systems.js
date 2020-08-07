/**
 * Systems are functions that take an entity object.
 * Each system does different stuff for entities that have
 * different components (properties).
 * For example, the `moveEntity` system moves all entities
 * that have a `position` and `velocity` component/property.
 */

// Moves all entities (Player, etc.) that,
// have a position and a velocity.
function moveEntity(entity) {
    if (entity.position && entity.velocity && entity.solid) {
        const velocity = {
            x: entity.velocity.x * DT,
            y: entity.velocity.y * DT,
        };
        const velRem = {
            x: velocity.x % 1.0,
            y: velocity.y % 1.0,
        };
        const velSign = {
            x: Math.sign(velocity.x),
            y: Math.sign(velocity.y),
        };

        const doesEntityCollide = targetEntity =>
            entities.some(
                otherEntity =>
                    otherEntity.solid &&
                    entity.id !== otherEntity.id &&
                    doEntitiesCollide(targetEntity, otherEntity)
            );

        let inCollision = false;
        for (const axis of ["x", "y"]) {
            if (inCollision) break;
            for (let i = 1; i <= Math.floor(Math.abs(velocity[axis])); i++) {
                const newPos = {
                    x: entity.position.x,
                    y: entity.position.y,
                };
                newPos[axis] += velSign[axis];
                const tmpEntity = {
                    position: newPos,
                    size: entity.size,
                };
                if (doesEntityCollide(tmpEntity)) {
                    inCollision = true;
                    break;
                } else {
                    entity.position = newPos;
                }
            }
            if (inCollision) break;
            if (velRem[axis] > 0.0 || velRem[axis] < 0.0) {
                const newPos = {
                    x: entity.position.x,
                    y: entity.position.y,
                };
                newPos[axis] += velRem[axis];
                const tmpEntity = {
                    position: newPos,
                    size: entity.size,
                };
                if (doesEntityCollide(tmpEntity)) {
                    inCollision = true;
                    break;
                } else {
                    entity.position = newPos;
                }
            }
        }

        if (inCollision) {
            entity.velocity = {
                x: 0.0,
                y: 0.0,
            };
        }
    } else if (entity.position && entity.velocity) {
        entity.position.x += velocity.x * DT;
        entity.position.y += velocity.y * DT;
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

// Player jumps when the button "j" is pressed
function checkJump(entity) {
    const PADDING = 2.0;
    const JUMP_STRENGTH = 10.0;

    if (!entity.canJump || !entity.velocity) return;

    const checkEntity = {
        position: {
            x: entity.position.x,
            y: entity.position.y + PADDING,
        },
        size: entity.size,
    };
    const isStandingOnGround = entities.some(
        otherEntity =>
            otherEntity.solid &&
            otherEntity.position &&
            otherEntity.size &&
            entity.id !== otherEntity.id &&
            doEntitiesCollide(checkEntity, otherEntity)
    );

    if (isStandingOnGround && keyIsDown(74)) {
        entity.velocity.y -= JUMP_STRENGTH * DT;
    }
}
