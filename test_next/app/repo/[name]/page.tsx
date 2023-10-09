
// vercel/app

async function getRepo(name:string): Promise<repository>{
    const res = await fetch(`https://api.github.com/repos/vercel/${name}`);
    return res.json();
}

export async function generateMetadata({
    params, }:{params:{name:string}}) {
        const repo = await getRepo(params.name);

        return {
            title:repo.full_name,
        }
    }

export default async function Page({params}:{params:{name:string}}){
    const repo = await getRepo(params.name);
    return <h1>Name:{repo.full_name}</h1>
}