import Layout from "../components/Layout";
import CartHeader from "../components/shoppingCart/CartHeader";
import ShopCart from "../components/shoppingCart/ShopCart";
import Topbar from "../components/Topbar";

export default function Cart(){
   return(
    <Layout>
    <Topbar/>
    <CartHeader/>
    <ShopCart/>
    </Layout>
   )
}