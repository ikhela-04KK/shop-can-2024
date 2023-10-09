// imporatation des Metadata de telle sorte à pouvoir créer des metadonnée dynamique 
import type { Metadata, ResolvingMetadata } from 'next'

// type name 
type BlogUser = {
    params : {name:string},
}

// exportation des éléments de telle sorte à pouvoir
 
export async function generateMetadata({params}: BlogUser,parent: ResolvingMetadata): Promise<Metadata> {

    // read route params
    const name = params.name

    // fetch data
    const product = await fetch(`https://.../${name}`).then((res) => res.json())
    return {
        title: product.title,
    }
}

export default function Page({params}: BlogUser) {return <h1>name: {params.name}</h1>}


// avec les blogs utilisés les **routes dynamiques** de telle sorte à pouvoir reccupérer les éléments 
// ! ça devait être capable de generer le nom de l'header 
// export async function generateMetadata({params}:{params:{name:string}}){
//     return {
//         title:`Blog of ${name}`,
//     };
// }

// export default function Page({params}:{
//     params: {name:string}
// }) {
//     return <h1>name: {params.name}</h1>
// }
// est ce qu'on peut partager les données d'une route à une autre 