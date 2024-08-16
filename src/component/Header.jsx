import { HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HStack bgColor='#1a1a1a' color='#f3f3f3' padding='1em .6em'
    mb='1em' justifyContent='space-between' alignItems='center'>
      <Text fontSize='2xl'>Logo</Text>

      <HStack>
        <Link to='/'>Productos</Link>
        <Link to='/cart'>Carrito</Link>
      </HStack>
    </HStack>
  )
}

export default Header