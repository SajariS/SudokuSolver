'use client'

import { boxCalculator } from "@/service/boxCalculator";
import { useState } from "react";

const URL = process.env.URL || "http://localhost:3000"

export default function Solver() {
    const [size, setSize] = useState(6);
    const [table, setTable] = useState(Array.from({ length: 6}, () => Array(6).fill(0)));
    const [box, setBox] = useState({ boxRow: 2, boxCol: 3});

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = parseInt(e.target.value) || 0;
        setSize(newSize);
        setBox(boxCalculator(newSize));

        setTable(Array.from({ length: newSize}, () => Array(newSize).fill(0)))
    }

    const handleCellChange = (row: number, col: number, value: string) => {

        let num = value === "" ? 0 : Number(value);

        if (num < 0 || num > size) num = 0;

        const changedTable = table.map((r, i) => 
            r.map((c, j) => (i === row && j === col ? num : c ))
        );
        setTable(changedTable);
    }

    const handleTableSolve = () => {
        fetch(URL + '/api/solve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({table: table})
        })
        .then(response => {
            if(response.ok) return response.json();
            else throw new Error("Error in fetch: " + response.statusText);
        })
        .then(data => setTable(data.solution))
        .catch(err => console.error(err))
    }

    const handleReset = () => {
        setTable(Array.from({ length: size},() => Array(size).fill(0)))
    }

    return(
        <>
            <div className="p-4">
                <div className="mb-4">
                    <label className="mr-2">Anna pöydän koko:</label>
                    <input
                        type="number"
                        value={size}
                        min={1}
                        onChange={handleSizeChange}
                        className="border p-1"
                    />
                </div>

                <div className="mb-4">
                    <button
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => handleTableSolve()}
                    >
                        Ratkaise taulu
                    </button>
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onClick={() => handleReset()}>
                        Tyhjennä pöytä
                        </button>
                </div>

                <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${size}, 60px)`}}>
                    {table.map((row, i) => 
                        row.map((val, j) => {
                            const classes = [
                                "w-10 h-10 text-center border border-gray-300",
                            ];

                            if (i % box.boxRow === 0) classes.push("border-t-2 border-black");
                            if (j % box.boxCol === 0) classes.push("border-l-2 border-black");
                      
                            if (i === size - 1) classes.push("border-b-2 border-black");
                            if (j === size - 1) classes.push("border-r-2 border-black");

                            return (
                            <input
                                key={`${i}-${j}`}
                                type="number"
                                value={val === 0 ? "" : val}
                                min={0}
                                max={size}
                                onChange={(e) => handleCellChange(i, j, e.target.value)}
                                className={classes.join(" ")}
                            />
                        )})
                    )}
                </div>

                <pre className="mt-4 bg-gray-100 p-2 rounded">
                    {JSON.stringify(table, null, 2)}
                </pre>
            </div>
        </>
    )
}