import { Router } from "express";
import CustomError from "../services/errors/custom_error.js";
import { generateUserErrorInfo } from "../services/errors/info.js";
import EErrors from "../services/errors/enums.js";
import { generateProduct } from "../utils.js";

const router = Router()

router.get('/', async(req, res) => {
    const products = []

    for (let i = 0; i < 100; i++) {
        products.push(generateProduct())
    }

    res.send({status: 'success', payload: products})
})

const users = []

router.post('/', (req, res) => {
    const user = req.body
    const compra = req.body

    if(!user.last_name || !user.first_name || !user.email) {

        CustomError.createError({
            name: 'User creation error',
            cause: generateUserErrorInfo(user),
            message: 'Error trying to create user',
            code: EErrors.INVALID_TYPES_ERROR
        })
        
    }

    if(!products._id || !products.stock) {

        CustomError.createError({
            name: 'Product creation error',
            cause: generateCompraErrorInfo(product),
            message: 'Error trying to create product',
            code: EErrors.INVALID_TYPES_ERROR
        })
        
    }

    users.push(user)
    products.push(product)
    return res.send({status: 'success', payload: user})
    //res.send({status: 'success', payload: product})
})


export default router