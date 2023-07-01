import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchProductData } from '../api/pocketbase'
import Header from './Header'
import Footer from './Footer'
import '../styles/product.css'

interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

const ProductPage = ({ product }: { product: Product }) => {
  const router = useRouter()
  const [productData, setProductData] = useState<Product | null>(null)

  useEffect(() => {
    if (product) {
      setProductData(product)
    }
  }, [product])

  if (!productData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      <div className="product-page">
        <img src={productData.image} alt={productData.title} />
        <div className="product-info">
          <h1>{productData.title}</h1>
          <p>{productData.description}</p>
          <h2>${productData.price}</h2>
          <button onClick={() => router.push('/checkout')}>Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params
  const product = await fetchProductData(id as string)

  return {
    props: {
      product,
    },
  }
}

export default ProductPage