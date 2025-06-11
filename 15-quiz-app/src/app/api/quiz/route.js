import { NextResponse } from 'next/server';

require('dotenv').config();

export async function GET(req) {


    const url = `https://quizapi.io/api/v1/questions?apiKey=${process.env.quizApiKey}&limit=10`
    const options = { status: 200 }

    const outputJson = await fetch(url).then(e => e.json());




    return NextResponse.json(outputJson, options)

}