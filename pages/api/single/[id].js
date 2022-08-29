import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useRouter } from "next/router";

const api = new WooCommerceRestApi({
  url: "http://localhost/eshopper/",
  consumerKey: `${process.env.consumer_key}`,
  consumerSecret: `${process.env.consumer_secret}`,
  version: "wc/v3"
});


export default function handler(req, res) {
 const pid = req.query
 
 api.get(`products/${pid.id}`).then(response=>{
 
  res.json({
    code: response.status,
    product: response.data
  })
 }).catch(error=>{
  res.send(error)
 })

}