import { NextResponse } from "next/server";
import fs from 'fs/promises'

// Usage:
// http://localhost:3000/api/getblog?slug=how-to-learn-flaskd


// export const dynamic = "force-static";
// export const dynamic = "force-dynamic";
export async function GET(req) {

    const slug = req.nextUrl.searchParams.get('slug');
    console.log(slug)

    if (!slug) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    const blogDir = "src/blogdata"


    try {

        const blog = await fs.readFile(`${blogDir}/${slug}.json`,'utf-8')

        return NextResponse.json(JSON.parse(blog), { status: 200 });

    } catch (error) {

        return NextResponse.json({ error: "No such blog Found" }, { status: 404 })

    }


}