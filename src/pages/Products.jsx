import { Toaster } from "sonner"

import ListProducts from "../component/ListProducts"
import Header from '../component/Header'

const Products = () => {
  return (
    <>
    <Toaster richColors/>

    <Header />
    <ListProducts />
    </>
  )
}

export default Products