import React from 'react'
import styles from "@/styles/blogpost.module.css"
import fs from "fs/promises"

// export async function generateStaticParams() {

//     return [
//         { slug: "how-to-learn-javascript" },
//         { slug: "how-to-learn-flask" },
//         { slug: "how-to-learn-nextjs" },
//     ]

// }

const getBlog = async (slug) => {

    // const blogDir = "src/blogdata"
    // const read = await fs.readFile(`${blogDir}/${slug}.json`, 'utf-8')
    // const blog = JSON.parse(read);
 
    
    const res = await fetch(`https://test-pi-one-81.vercel.app/api/getblog?slug=${slug}`, {
      cache: 'no-store',
    });

    const blog = await res.json();



    return blog;
}

// Step 1: find the file corresponding to the slug
// Step 2: populate them inside the page

const Blog = async ({ params }) => {

    const getMarkup = (htmlContent)=>{
        return {__html: htmlContent };
    }

    const { slug } = await params;

    const blog = await getBlog(slug);

    const markup = getMarkup(blog.content);


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{blog && blog.title}</h1>


            <div className={styles.content}>
                    {blog && <div dangerouslySetInnerHTML={markup}></div> }
            </div>

        </div>

    )
};

export default Blog;