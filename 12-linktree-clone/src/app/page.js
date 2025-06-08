import HomePage from "@/components/HomePage";
import { get } from "@vercel/edge-config";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";


export default async function Home() {

  const data =  await get("linktree");

  

  if(!data){
    redirect("https://www.youtube.com/watch?v=xvFZjo5PgG0")
  }


  return (
    <HomePage data={data} />
  )
    ;
}

