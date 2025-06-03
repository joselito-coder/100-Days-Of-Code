import { NextResponse } from "next/server";
import fs from 'fs/promises'
import path from "path";


export async function GET(req) {


    const count = req.nextUrl.searchParams.get('count');

    const blogDir = path.join(process.cwd(),"src/blogdata")


    let blogs = await fs.readdir(blogDir);
    let blog;
    let allBlogs = [];


    for (let i = 0; i < blogs.length; i++) {

        // console.log(blogs[i]);
        blog = await fs.readFile(`${blogDir}/${blogs[i]}`, 'utf8')
        // console.log(blog)
        allBlogs.push(JSON.parse(blog));


    }

    if (count != null) {
        allBlogs = allBlogs.slice(0, count);
    }
    return NextResponse.json({ blogs: allBlogs, totalCount: blogs.length }, { status: 200 });

}