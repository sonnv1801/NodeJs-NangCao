const express = require('express')

const router = express.Router()

const Product = require('../models/Products')


router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.json({ success: true, products })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})


router.post('/', async (req, res) => {
    const {img, title, description} = req.body

    if(!title)
    return res.status(400).json({ success: false, message: 'Title is required' })

    try {
        const newProduct = new Product({
            img,
            title,
            description
        })
        await newProduct.save()
        res.json({ success: true, message: "Happy", post: newProduct })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Error"})
    }
})


module.exports = router
