import { NextResponse } from "next/server";
import fs from 'fs/promises';
import path from "path";


export async function POST(req) {

    let contactDataDir = path.join(process.cwd(), "src/contactdata")

    let responseParams = {
        status: 200,
        // statusText: "gacho gahoc"
    };

    const reqBody = await req.json();

    const data = await fs.readdir(contactDataDir);


    await fs.writeFile(`${contactDataDir}/${data.length + 1}.json`, JSON.stringify(reqBody));

    return NextResponse.json({ post: "yes post request" }, responseParams);


}

export async function GET(req) {

    console.log(req.body)

    return NextResponse.json({ error: "gacho gacho 420" }, { status: 403 })
}