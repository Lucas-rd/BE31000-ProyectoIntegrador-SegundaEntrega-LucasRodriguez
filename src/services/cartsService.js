import fs from 'fs'

const getCartsService = async (req, res) => {
    try {
        const cartsString = await fs.promises.readFile('../BE31000-ProyectoIntegrador-LucasRodriguez/src/data/carritos.txt', "utf-8")
        const  cartsArray = await JSON.parse(cartsString)

        return cartsArray
    } catch (error) {
        console.log("El error de lectura de archivo fue: ", error)
    }
}

const postCartsService = async (req, res) => {
    try {
        await fs.promises.writeFile('../BE31000-ProyectoIntegrador-LucasRodriguez/src/data/carritos.txt', req)
    } catch (error) {
        console.log("El error de lectura de archivo fue: ", error)
    }
}

export { getCartsService, postCartsService }