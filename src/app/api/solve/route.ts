import { NextRequest, NextResponse } from "next/server";
import { solutionHandler } from "@/service/solutionHandler"


export async function GET() {

    return Response.json({testi: 'onnistui'})
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { table } = body;

        if (!Array.isArray(table)) {
            return NextResponse.json(
                { error: 'Table is not an array'},
                { status: 400}
            );
        }

        const solvedTable = await solutionHandler(table);

        return NextResponse.json({
            solution: solvedTable
        })
    }
    catch (error) {
        return NextResponse.json(
            { error: error},
            { status: 500 }
        );
    }
}