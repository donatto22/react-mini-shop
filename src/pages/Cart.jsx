import { useContext } from "react"
import Header from "../component/Header"

import { CarritoContext } from "../context/Context"
import { Box } from "@chakra-ui/react"

const Cart = () => {
  const [carrito] = useContext(CarritoContext)

  return (
    <>
    <Header />
    {
      carrito.length != 0 ? 
      carrito.map(c => (
        <Box key={c.id}>{ c.name }</Box>
      )) :
      'No has seleccionado ningun producto'
    }
    </>
  )
}

export default Cart