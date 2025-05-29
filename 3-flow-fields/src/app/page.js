'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;




    // canvas settings
    // ctx.fillStyle = 'black'
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 1;


    class Particle {


      constructor(effect) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height)
        this.speedX;
        this.speedY;
        this.speedModifier = Math.floor(Math.random() * 3 + 1)
        this.history = [{ x: this.x, y: this.y }]
        this.angle = 0;
        this.maxLength = 69 + Math.floor(Math.random() * 200 + 10);
        this.timer = this.maxLength * 2;

      }

      draw(context) {
        // context.fillRect(this.x, this.y, 10, 10)
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);

        for (let i = 0; i < this.history.length; i++) {
          context.lineTo(this.history[i].x, this.history[i].y);
        }

        context.stroke();

      }

      update() {
        this.timer--;
        if (this.timer >= 1) {

          let x = Math.floor(this.x / this.effect.cellSize);
          let y = Math.floor(this.y / this.effect.cellSize);

          let index = y * this.effect.cols + x
          this.angle = this.effect.flowField[index];

          this.speedX = Math.cos(this.angle) * this.speedModifier;
          this.speedY = Math.sin(this.angle) * this.speedModifier;

          this.x += this.speedX;
          this.y += this.speedY;


          this.history.push({ x: this.x, y: this.y })

          if (this.history.length > this.maxLength) {
            this.history.shift();
          }

        } else if (this.history.length > 1) {
          this.history.shift();
        } else {
          this.reset();
          this.timer = this.maxLength * 2;
        }

      }

      reset() {

        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height)
        this.history = [{ x: this.x, y: this.y }]
      }



    }

    class Effect {

      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.numberOfParticles = 2550;
        this.cellSize = 20;
        this.rows;
        this.cols;
        this.flowField = [];
        this.curve = 1.885;
        this.zoom = 0.144;

        this.init();
      }

      init() {
        this.rows = Math.floor(this.height / this.cellSize);
        this.cols = Math.floor(this.width / this.cellSize);
        this.flowField = [];

        for (let y = 0; y < this.rows; y++) {
          for (let x = 0; x < this.cols; x++) {
            let angle = (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
            this.flowField.push(angle);
          }
        }
        // console.log(this.flowField)

        // Create a flow field
        for (let i = 0; i < this.numberOfParticles; i++) {

          this.particles.push(new Particle(this))
        }


      }

      render(context) {
        this.particles.forEach(particle => {
          particle.draw(context);
          particle.update();
        })
      }


    }

    const effect = new Effect(canvas.width, canvas.height);
    effect.render(ctx);

    // console.log(effect)

    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      effect.render(ctx);

      requestAnimationFrame(animate)

    }

    animate();




  }, [])

  return (
    <>

      <div className="absolute w-full h-full flex items-center justify-center font-extrabold  "> <p className="text-8xl text-center h-[13rem] flex items-center rounded-sm text-shadow-xl border-2  text-white bg-black p-4 pb-2" > May the Flow be with you</p></div>

      <canvas ref={canvasRef} >

      </canvas>
    </>

  );
}
