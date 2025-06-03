import React from 'react'
import styles from "@/styles/about.module.css"
import Image from 'next/image';

const AboutComponent = () => {
  return (
    <div className={styles.main}>
      <h1>About Hunting Coder</h1>

      <div className={styles.introSection}>
        <p>We Design Meticulous blogs designed to to help coders that cry in vain when they see errors Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum sed id laborum animi quod expedita cum quia dolor fugit nihil quam alias quisquam maxime beatae, provident, accusamus tempore. Exercitationem, eaque delectus!</p>
      </div>

      <div className={styles.services}>
        <h2>Services Offered</h2>
        <p>We offer the following Services</p>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempore adipisci commodi soluta eveniet aliquid ratione fuga iusto sit non nemo quas iste ad maiores, quos esse veniam aliquam consequuntur minus eius!</li>
          <li>Facilis id dolores eveniet officia deleniti nobis consequatur pariatur iste corrupti eum reiciendis, animi fugiat odio at eligendi, repellat esse eos? Cumque, ullam! Laudantium necessitatibus nam asperiores id quo, facilis eum ducimus.</li>
          <li>Maiores, ut. Sint earum quod, nisi nemo ut voluptate! Commodi, officia excepturi! Architecto officia laboriosam quisquam voluptatum nesciunt explicabo, earum eum quos at nobis ex officiis est alias dolore neque omnis. Doloribus.</li>
          <li>Non voluptatum consequatur quisquam similique totam quas itaque ex sint dolor consectetur earum explicabo architecto expedita eos nesciunt libero consequuntur dolorum, corrupti doloribus animi sequi voluptatibus. Porro tempore facere accusantium tenetur officiis.</li>
          <li>Voluptatum dignissimos debitis aspernatur corrupti eveniet natus quia adipisci ad excepturi quas. Quo enim minus impedit ea sint nostrum voluptatibus est ut, quod quae, unde dolore laboriosam tempore modi illum cupiditate reprehenderit.</li>
        </ul>

      </div>

      <div className={styles.contact}>
        <h2>Contact us</h2>
      </div>


      <div className={`${styles.introSection} ${styles.mt5}`}>
        <h2>Coders that have found our site useful</h2>
      </div>

      <div className={styles.picSection}>

        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>


        <div className={styles.coder}>
          <Image className='coderImage' src="https://media.gettyimages.com/id/109255193/photo/rick-astley.webp?s=2048x2048&w=gi&k=20&c=VkzyUYnBrKe8P24UCc_bzpdWtdzn87bM1dGZYS567O8=" alt='Image for the coder' width={240} height={444}  />
          <p className={styles.coderText}>Rick astlye</p>
        </div>

      </div>

    </div>
  )
}

export default AboutComponent