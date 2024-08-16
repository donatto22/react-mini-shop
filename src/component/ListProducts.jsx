import { useEffect } from 'react'
import useProducts from '../hooks/useProducts'
import { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import Product from './atomic/Product'

const ListProducts = () => {
  const [products, setProducts] = useState([])

  const { get } = useProducts()

  useEffect(() => {
    (async () => {
      setProducts(await get())
    })()
  }, [])

  return (
    <VStack gap='1em'>
      {
        products.map(p => (
          <Product key={p.id} product={p} />
        ))
      }
    </VStack>
  )
}

export default ListProducts