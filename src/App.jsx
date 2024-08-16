import { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

import { Provider } from './context/Context'

const Products = lazy(async () => await import("./pages/Products"))
const Cart = lazy(async () => await import("./pages/Cart"))

const App = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ChakraProvider disableEnvironment disableGlobalStyle>
        <Provider>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </ChakraProvider>
    </Suspense>
  )
}

export default App