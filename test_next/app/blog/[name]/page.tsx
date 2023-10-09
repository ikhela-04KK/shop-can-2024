// avec les blogs utilisés les **routes dynamiques** de telle sorte à pouvoir reccupérer les éléments 
// ! ça devait être capable de generer le nom de l'header 
export async function generateMetadata({params}:{params:{name:string}}){
    return {
        title:`Blog of ${name}`,
    };
}

export default function Page({params}:{
    params: {name:string}
}) {
    return <h1>name: {params.name}</h1>
}

// est ce qu'on peut partager les données d'une route à une autre 