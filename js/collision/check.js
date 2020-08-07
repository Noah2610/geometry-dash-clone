function doEntitiesCollide(entityOne, entityTwo) {
    if (
        !(
            entityOne.position &&
            entityOne.size &&
            entityTwo.position &&
            entityTwo.size
        )
    ) {
        return false;
    }
    const rectOne = new Rect(entityOne.position, entityOne.size);
    const rectTwo = new Rect(entityTwo.position, entityTwo.size);

    // prettier-ignore
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
