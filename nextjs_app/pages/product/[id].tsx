import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ProductPage } from '../../components/ProductPage'
import { fetchProductData } from '../../api/pocketbase'

const Product = ({ product }) => {
  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <ProductPage product={product} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const product = await fetchProductData(params.id)
  return { props: { product } }
}

export default Product