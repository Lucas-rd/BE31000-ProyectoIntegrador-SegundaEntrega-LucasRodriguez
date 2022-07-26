import { getCartsService, postCartsService } from "../services/cartsService.js";
import { getProductsService } from "../services/productsService.js";
import daos from '../daos/index.js'

const cart = new daos.CartDao()

const cartControllerGet = async (req, res) => {
    try {
        const idCart = req.params.id
        const cartResponse = await cart.getById(idCart)
    
        res.send(cartResponse)
    } catch (error) {
        console.log(error)
    }
}

const cartControllerPost = async (req, res) => {
    try {
        const cartResponse = await cart.createDocument()

        res.send(`Carrito insertado en la base con id: ${cartResponse} :)`)
    } catch (error) {
        console.log(error)
    }

}

const cartControllerProductsPost = async (req, res) => {
    try {
        const cartId = req.params.id
        const bodyCart = req.body

        const cartResponse = await cart.updateDocument(cartId, bodyCart)

        res.send(cartResponse)

    } catch (error) {
         console.log(error)
    }
}

const cartControllerDelete = async (req, res) => {
    try {
        const cartId = req.params.id
        const cartResponse = await cart.deleteById(cartId)

        res.send(cartResponse)
    } catch (error) {
        console.log(error)
    }
}

const cartControllerProductDelete = async (req, res) => {
    try {
        const cartId = req.params.id
        const productId = req.params.id_prod

        const cartResponse = await cart.deleteProductInCart(cartId, productId)

        res.send(cartResponse)
        
    } catch (error) {
        console.log(error)
    }
}

export { cartControllerGet, cartControllerPost, cartControllerProductsPost, cartControllerDelete, cartControllerProductDelete }