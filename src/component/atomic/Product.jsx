import { useContext } from "react"
import { Button, Text, VStack } from "@chakra-ui/react"

import { CarritoContext } from '../../context/Context'
import { toast } from "sonner"

const Product = ({ product }) => {
  const [carrito, agregarProducto] = useContext(CarritoContext)

  const agregarAlCarrito = (product) => {
    try {
      agregarProducto(product)
      toast.success('Agregado con éxito', {
        description: `Has agregado el producto ${ product.name } al carrito`
      })
    } catch (e) {
      toast.error('Hubo un error', {
        description: 'No se logró agregar el producto :('
      })
      console.error(e)
    }
  }

  return (
    <VStack bgColor='rgba(0, 0, 0, .1)' width='300px' borderRadius='10px' gap='10px' p='1em'>
      <Text fontSize='2xl'>{ product.name }</Text>
      <Text fontWeight='bold'>{ product.price }</Text>
      <Text>Ram: { product.ram } gb</Text>
      <Button onClick={ () => agregarAlCarrito(product) }
      variant='solid' bgColor='rgba(0, 0, 0, .1)'>Agregar al carrito</Button>
    </VStack>
  )
}

export default Product