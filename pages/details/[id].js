
import Header from '../../components/details/Header'
import Shop from '../../components/details/Shop'

import Layout from '../../components/Layout'
import Topbar from '../../components/Topbar'




const Details = (props) => {

  return (
    <Layout>
        <Topbar />
        <Header />
        <Shop product={props.data}/>
    </Layout>
  )
}


export async function getServerSideProps(context){
  var id = context.query.id
  var res = await fetch('http://localhost:3000/api/single/'+ id)
  var result = await res.json()
  var data = result.product
  return{
    props: { data }
  }
}


export default Details