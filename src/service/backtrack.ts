import { boxCalculator } from "./boxCalculator";
import { isValid } from "./isValid";


export function backtrack(size: number, table: Array<Array<number>>) {

    const box = boxCalculator(size)
    console.log(box)

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (table[row][col] === 0) {
                for (let num = 1; num <= size; num++) {
                    if (isValid(row, col, num, table, box.boxRow, box.boxCol, size)) {
                        table[row][col] = num;
                        console.log(table)
                        if (backtrack(size, table)) {
                            return true;
                        }
                        table[row][col] = 0;
                    }
                }
                console.log(table)
                console.log("Fail")
                return false;
            }
        }
    }
    console.log("Onnistui")
    return true;

}