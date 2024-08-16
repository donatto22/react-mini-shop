import { createContext, useEffect, useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

export const CarritoContext = createContext()

export const Provider = ({ children }) => {
    // ....
    const [carrito, setCarrito] = useState([])
    const { get, set } = useLocalStorage()

    useEffect(() => {
        // obtenemos la data desde localstorage
        (() => {
            const dataCarritoGuardada = get('carritoData')
            console.log(dataCarritoGuardada)
    
            if(dataCarritoGuardada) {
                setCarrito(JSON.parse(dataCarritoGuardada))
            }
        })()
    }, [])

    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto])
        set('carritoData', JSON.stringify([...carrito, producto]))
    }

    return (
        <CarritoContext.Provider value={[carrito, agregarProducto]} >
            { children }
        </CarritoContext.Provider>
    )
}