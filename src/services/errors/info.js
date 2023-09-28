export const generateUserErrorInfo = user => {
    return  `
    Uno o mas propiedades estan incompletos o son invalidos.
        Lista de propiedades obligatorias:
         - first_name: Must be a string (${user?.first_name})\
         - last_name: Must be a string (${user?.last_name})
         - email: Must be a string (${user?.email})
    `
}

export const generateCompraErrorInfo = product => {
    return  `
    Uno o mas propiedades estan incompletos o son invalidos.
        Lista de propiedades obligatorias:
         - id del Producto: Debe al menos tener un producto (${product?._id})\
         - cantidad: Debe tener menos cantidad en la compra que el carrito(${{max:product?.stock}})
     
    `
}