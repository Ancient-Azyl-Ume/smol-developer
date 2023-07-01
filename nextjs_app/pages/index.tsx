import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Product } from '../api/pocketbase'

export default function Home({ initialData }) {
  const [products, setProducts] = useState<Product[]>(initialData)

  useEffect(() => {
    fetch('/api/pocketbase')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Head>
        <title>Modern Woman's Clothing Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1 className="text-4xl font-bold text-center my-8">
          Modern Woman's Clothing Store
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/pocketbase')
  const initialData = await res.json()

  return {
    props: { initialData },
  }
}