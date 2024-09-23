import { response, Router } from "express";

const router = Router()
router.get('/products', (request, response) => {
    response.send('Funciona ')
})
router.delete('/hi', (request, response) => {
    response.send('hillos ')
})

export default router