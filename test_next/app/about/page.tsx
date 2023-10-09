// importation des links pour naviguer entre les pages sans avoir à recharger 
//  on parle maintenant de dataFetchin avec les api  commet getStaticProps  et GetServerSideProps
import Link from "next/link"
export default function Page() {
  return (
      <>
        <Link href="/blog/Ikhela">About the blog of user</Link>
      </>
  )
}