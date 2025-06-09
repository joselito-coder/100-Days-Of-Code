import Square from "@/components/Board";

export default function Home() {
  return (
    <div>

      <h1 className="text-3xl text-center pt-[10vh]" >Tik Tak Toe</h1>
      <div className="flex h-[90vh] w-[100vw]  flex-col items-center justify-center" >
        <Square />
      </div>
    </div>
  );
}
