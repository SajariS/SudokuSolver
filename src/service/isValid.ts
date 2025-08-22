export function isValid(row: number, col: number, num: number, table: Array<Array<number>>, boxRows: number, boxCols: number, size: number): boolean {
        
    //Row
    for (let c = 0; c < size; c++) {
        if(table[row][c] === num) {
            return false;
        }
    }
    //Col
    for (let r = 0; r < size; r++) {
        if(table[r][col] === num) {
            return false;
        }
    }
    //Box
    const boxRowStart = row - (row % boxRows);
    const boxColStart = col - (col % boxCols);

    for (let r = 0; r < boxRows; r++) {
        for (let c = 0; c < boxCols; c++) {
            if (table[boxRowStart + r][boxColStart + c] === num) {
                return false;
            }
        }
    }

    return true;
}