import axios from "axios"

const API = 'http://localhost:3000/products'

const useProducts = () => {
    const get = async () => {
        let productos = null

        await axios.get(API).then(data => {
            productos = data.data
        })

        return productos
    }

    return {
        get
    }
}

export default useProducts
