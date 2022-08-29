import Shop from "../components/shop/Shop";
import ShopHeader from "../components/shop/ShopHeader";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import Products from './api/products.json'

export default function Store(){
    return(
        <Layout>
            <Header />
            <Topbar />
            <ShopHeader />
            <Shop items={Products.products} />

        </Layout>
    )
}