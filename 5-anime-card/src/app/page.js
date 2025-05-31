import AnimeCard from "./(components)/AnimeCard";

export default async function Home() {

    const anime = await fetch("https://api.jikan.moe/v4/random/anime").then(e=> e.json());

    console.log(anime);
    const {large_image_url:imgUrl} = anime.data.images.webp;
    const {title} = anime.data;
    const {background} = anime.data;
    let description =  anime.data.synopsis?.slice(0,180)|| background || ""

    console.log(imgUrl,title,description)



  return (
    <div className="container">
      <h1 className="text-4xl my-18 text-center">Simple Random Anime Card</h1>

      <AnimeCard title={title} description={description} imgUrl={imgUrl} />
    </div>

  );
}
