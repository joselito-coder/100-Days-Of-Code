'use client'
import React, { useState, useEffect } from 'react'
import styles from "@/styles/blog.module.css"
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component'


// Step 1: collect all files from blogdata directory
// Step 2: Iterate through them and display them


const Blog = () => {
  const [blogs, setBlogs] = useState();
  const [count, setCount] = useState(5);
  const [totalCount, setTotalCount] = useState(24);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`https://test-pi-one-81.vercel.app/api/blogs?count=${count}`)
      const data = await res.json()
      const { blogs, totalCount } = data;

      setTotalCount(totalCount)
      setBlogs(blogs)
    }
    fetchPosts()
  }, [])

  const fetchData = async () => {

    const res = await fetch(`https://test-pi-one-81.vercel.app/api/blogs?count=${count + 5}`, {
      cache: 'no-store',
    });
    setCount(count + 5)

    const { blogs } = await res.json();


    setBlogs(blogs)

  }

  return (

    <div className={`${styles.blog} mt-8`}>

      {blogs &&
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={totalCount != blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          {blogs.map((blogItem) => {
            return (
              <div className={styles.blogItem} key={blogItem.title}>
                <Link href={`/blogpost/${blogItem.slug}`} >
                  <h3 className="text-l">{blogItem.title}</h3>
                </Link>
                <p className={styles.blogPara} >{blogItem.metadesc.substr(0, 150)}...</p>

                <Link href={`/blogpost/${blogItem.slug}`} >
                  <button className={styles.btn} >Read more</button>
                </Link>
              </div>
            );

          })

          }
        </InfiniteScroll>
      }
      {/* 
      {blogs && blogs.map((blogItem) => {
        return (
          <div className={styles.blogItem} key={blogItem.title}>
            <Link href={`/blogpost/${blogItem.slug}`} >
              <h3 className="text-l">{blogItem.title}</h3>
            </Link>
            <p className={styles.blogPara} >{blogItem.metadesc.substr(0, 150)}...</p>

            <Link href={`/blogpost/${blogItem.slug}`} >
              <button className={styles.btn} >Read more</button>
            </Link>
          </div>
        );

      })
      }
 */}
    </div>


  )
}

export default Blog