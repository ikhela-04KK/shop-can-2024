// essayer de partager le code quand je navigue de telle sorte au layaout principal de
import "./globals.css"

type Repository = {
  id:number, 
  name:string, 
  full_name:string
}
type Time = {
  datetime:string,
}
// dataFetching for first api which provide hour 
async function getTime():Promise<Time>{
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/Africa/Abidjan',
    {
      next:{
        revalidate:5
      },
    }
  );
  return res.json();
}

// dataFetching for second api which provide the vesion or vercel
async function getRepo():Promise<Repository>{
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  return res.json();
}

export default async function Page(){
  const [data,time] = await Promise.all([getRepo(), getTime()]);

  return (
    <>
      <h1 className="bg-red-600 font-bold text-3xl">{data.full_name}</h1>
      <p>Updated at: {time.datetime}</p>

    </>
  )
}