import React from "react"
import { Link, graphql } from "gatsby"
import Product from "../components/Product/index"

import Layout from "../components/layout"
// import Product from "../components/product"
import Image from 'gatsby-image'

// const ProductsPage = ({ data }) => (
//   <Layout>
//     <h1>Products</h1>
//     <ul>
//       {data.allShopifyProduct.edges.map(({ node }) => (
//         <li key={node.id}>
//           <h3>
//             <Link to={`/product/${node.handle}`}>{node.title}</Link>
//             <Image fixed = {node.images[0].localFile.childImageSharp.fixed}
//             />
//             {" --- "}
//           </h3>
//           <p>{node.description}</p>
//           <button>Buy for {node.variants[0].priceV2.amount}</button>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// export default ProductsPage

export const query = graphql`
{
  allShopifyProduct {
    edges {
      node {
        title
        description
        id
        handle
        variants {
          shopifyId
          priceV2 {
            amount
            currencyCode
          }
        }
        images {
          localFile {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`

export default ({data}) => (
  <>
    <body style={{background:'rgba(210, 210, 210, 1)'}}>
    <h1> </h1>
      <div className="products-grid">
        {data.allShopifyProduct.edges.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </body>
  </>
)
// export const query = graphql`
//   {
//     allShopifyProduct(sort: { fields: [title] }) {
//       edges {
//         node {
//           title
//           shopifyId
//           description
//           handle
//           priceRange {
//             minVariantPrice {
//               amount
//             }
//           }
//         }
//       }
//     }
//   }
// `
// import React from 'react'
// import { graphql } from 'gatsby'

// export const query = graphql`
//   {
//     allShopifyProduct {
//       nodes {
//         title
//         description
//         id
//         variants {
//           shopifyId
//           priceV2 {
//             amount
//             currencyCode
//           }
//         }
//         images {
//           localFile {
//             childImageSharp {
//               fixed(width: 300) {
//                 ...GatsbyImageSharpFixed_withWebp_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
// export default ({data}) => (
//   <>
//     <h1>The RAW page data</h1>
//     <pre>{JSON.stringify(data, null, 2)}</pre>
//   </>
// )
// const ProductsPage = ({data}) => (
//   <>
//     <h1>Guitar pedals for sale!</h1>
//     <div className="products-grid">
//       {data.allShopifyProduct.nodes.map(product => (
//         <Product key={product.id} product={product}/>
//       ))}
//     </div>
//   </>
// )

// export default ProductsPage