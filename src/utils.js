import { faker } from "@faker-js/faker/locale/es";

export const generateUser = () => {

    const numOfProducts = faker.number.int({ max: 10})

    const products = []
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct())
    }

    return {
        name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        sex: faker.person.sex(),
        products
    }

} 

export const generateProduct = () => {

    
    
    
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: faker.image.urlPicsumPhotos(),
        code: faker.commerce.isbn(),
        stock: faker.number.int({ max: 100 }),
        status: faker.datatype.boolean(),
        category: faker.commerce.department(),
        
       
        
    }
}