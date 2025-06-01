import Joke from "@/components/Joke";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="h-screen w-full animate-[gradient_8s_ease-in-out_infinite] bg-[length:400%_400%]   bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 ">


    <div>

      <h1 className="text-white  text-6xl font-bold my-15 text-center">
        Funny Jokes Go haha
      </h1>

      <Joke />
    </div>

  );
}
