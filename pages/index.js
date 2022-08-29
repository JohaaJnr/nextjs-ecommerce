import Layout from '../components/Layout'
import Topbar from '../components/Topbar'
import Navbar from '../components/index/Navbar'
import Products from './api/products.json'
import LatestProducts from '../components/index/LatestProducts'
import Categories from './api/categories.json'

export default function Home() {
 
  return (
    <Layout>
      <Topbar />
      <Navbar cats={Categories.categories}/>
      <LatestProducts p={Products.products} />
      
    </Layout>
  )
}

//  export async function getStaticProps() {
  // Fetch data from external API
 // const [cats, products] = await Promise.all([
   // fetch('http://localhost:3000/api/getcategories'),
  //   fetch('http://localhost:3000/api/getproducts')
//  ]) 

 // const [data, product] = await Promise.all([
 // cats.json(),
 // products.json()
// ])

  // Pass data to the page via props
//  return { props: { data, product } }
// } 