import styles from "@/styles/styles.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-items-center min-h-screen mt-3 font-[family-name:var(--font-geist-sans)]">
        <main>
          <div className="text-center my-18">
            <Image src="/homeimg.jpg" alt="Gyu gyu gaga" className={styles.myImg} width={237} height={158} />

            <h1 className="text-4xl font-extrabold leading-none tracking-tight my-4" >
              <span className={styles.mySpan }>  {"<HuntingCoder/>"}</span>
            </h1>

          </div>
          <h2 className={styles.popularBlogs} >Popular Blogs</h2>

          <div className={`${styles.blogs} mt-8`}>


            <div className={styles.blogItem}>
              <h3 className={styles.h3}>How to Learn javascript in 2025</h3>
              <p>JavaScript is the language used to design logic for the web</p>
              <button className={styles.btn} >Read more</button>
            </div>


            <div className={styles.blogItem}>
              <h3 className={styles.h3}>How to Learn javascript in 2025</h3>
              <p>JavaScript is the language used to design logic for the web</p>
              <button className={styles.btn} >Read more</button>
            </div>


            <div className={styles.blogItem}>
              <h3 className={styles.h3}>How to Learn javascript in 2025</h3>
              <p>JavaScript is the language used to design logic for the web</p>
              <button className={styles.btn} >Read more</button>
            </div>



          </div>

        </main>

        <footer className={`row-start-3 flex gap-[24px] mb-8 flex-wrap items-center mt-24 justify-center ${styles.footer}`}>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>

      </div>
    </>
  );
}
