import React from 'react'
import Image from 'gatsby-image'
import Client from 'shopify-buy'
import video from '../../images/video0001-0250.gif'
import './index.css'


const Product = ({product}) => {
  
  async function checkout () {
    // build a client
    const client = Client.buildClient({
      storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
      domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
    })

    // create a checkout
    const checkout = await client.checkout.create()
    
    // create an array of line items
    const variantId = product.node.variants[0].shopifyId
    const lineItemsToAdd = [{ variantId, quantity: 1 }]

    // add line items to the checkout
    const checkoutId = checkout.id
    const newCheckout = await client.checkout.addLineItems(
      checkoutId,
      lineItemsToAdd
    )
    
    // finish the checkout by visiting webUrl
    window.open(checkout.webUrl)
  }
  return (
    <body>
    <div className="product-wrap">
      <h1>BURN IN HELL DONALD TRUMP</h1>
      <button onClick={checkout}>PREORDER NOW {product.node.variants[0].priceV2.amount}</button>
      <img src={video} alt={"trump"} title={'BURN BURN BURN'}/>
      <p >this bastard caused us all a lot of pain, 
          let this candle remind us of our joint victory, 
          thanks to all who are not indifferent, we did 
          a great job</p>
      {/* <h2>{product.node.title}</h2>
      <p>{product.node.description}</p> */}
      <button onClick={checkout}>PREORDER NOW {product.node.variants[0].priceV2.amount}</button>
      <p>some of the money<br />from sales will 
          go to<br />those most affected<br />
          by his policies</p>
      <h1>BYE<br />BYE</h1>
      <button onClick={checkout}>PREORDER NOW {product.node.variants[0].priceV2.amount}</button>
      <br/><br/>
    </div>
    </body>
  )
}

export default Product