
const express = require('express');
const router = express.Router();
const bookModel = require('../models/booksModel');



router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({message: "Book Added successfully"});
        });
    } catch (error) {
        console.log(error)
    }
});

router.get("/getBooks", async (req, res) => {
    try {
        const books = await bookModel.find();
        res.status(200).json({books})
    } catch (error) {
        console.log(error);
    }
});

router.get("/getBooks/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const books = await bookModel.findById(id);
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
    }
});

router.put("/updateBook/:id", async (req, res) => {
    try {
        const id = req.params.id ;
        const updatedBook = await bookModel.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true , updatedBook})
    } catch (error) {
        return res.json(error)
    }
});

router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
       const deleteBook = await bookModel.findByIdAndDelete({_id: id})
       return res.json({deleted: true, deleteBook})
    } catch (error) {
        return res.json(error)
    }
});


module.exports = router;




