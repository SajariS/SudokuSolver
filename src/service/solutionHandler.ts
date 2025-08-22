import { backtrack } from "./backtrack"

//Acts as async "buffer"
export async function solutionHandler(table: Array<Array<number>>) {
    backtrack(table[0].length, table);
    return table;
}