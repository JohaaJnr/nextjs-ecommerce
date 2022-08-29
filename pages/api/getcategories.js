import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://localhost/eshopper/",
  consumerKey: `${process.env.consumer_key}`,
  consumerSecret: `${process.env.consumer_secret}`,
  version: "wc/v3"
});


export default function handler(req, res) {
api.get('products/categories').then(response=>{
    res.json({
      code: response.status,
      categories: response.data
    })
})
} 