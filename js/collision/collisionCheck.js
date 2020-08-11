function doEntitiesCollide(entityOne, entityTwo) {
    if (!(entityOne.position && entityOne.size && entityTwo.position && entityTwo.size)) {
        return false;
    }
    const rectOne = new Rect(entityOne.position, entityOne.size);
    const rectTwo = new Rect(entityTwo.position, entityTwo.size);

    return (
        (
            rectOne.left >= rectTwo.left &&
            rectOne.left < rectTwo.right
        ) || (
            rectOne.left <= rectTwo.left && 
            rectOne.right > rectTwo.left
        )
    ) && (
        (
            rectOne.top >= rectTwo.top &&
            rectOne.top < rectTwo.bottom
        ) || (
            rectOne.top <= rectTwo.top &&
            rectOne.bottom > rectTwo.top
        )
    );
}

function collideB(entityOne, entityTwo) { //B ... Bottom
    if(!(doEntitiesCollide(entityOne, entityTwo))) {
        return;
    }
    const rectOne = new Rect(entityOne.position, entityOne.size);
    const rectTwo = new Rect(entityTwo.position, entityTwo.size);

    return rectOne.bottom > rectTwo.top;
}

function collideLR(entityOne, entityTwo) { //L ... Left, R ... Right
    if(!(doEntitiesCollide(entityOne, entityTwo))) {
        return;
    }
    const rectOne = new Rect(entityOne.position, entityOne.size);
    const rectTwo = new Rect(entityTwo.position, entityTwo.size);

    return rectOne.right > rectTwo.left ||
            rectOne.left < rectTwo.right &&
            rectOne.bottom < rectTwo.top &&
            rectOne.top < rectTwo.bottom;
}