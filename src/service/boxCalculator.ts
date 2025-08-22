export function boxCalculator(size: number) {
    const boxLength = Math.sqrt(size);

    if (!Number.isInteger(boxLength)) {
        const boxRow = Math.floor(boxLength);
        const boxCol = size / boxRow;
        return ({ boxCol, boxRow})
    }

    return ({ boxCol: boxLength, boxRow: boxLength});
}