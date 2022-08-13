import { Router } from "express";
import { allBooks, booksBygenre, createBook, deleteBook } from "../services/books.service.js";

const router = Router()

router.get('/', async (req, res) => {
  try {

    const result = await allBooks()

    res.json({
      message: 'all books retrived',
      books: result.rows
    })
  } catch (err) {
    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})
router.get('/:genre', async (req, res) => {
  try {

    const result = await booksBygenre(req.params.genre)

    res.json({
      message: ' book found',
      book: result.rows
    })
  }
  catch (err) {

    console.log(err);

    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})
router.post('/', async (req, res) => {
  try {

    const { name, author, genre, since } = req.body

    await createBook(name, author, genre, since)

    res.json({
      message: ' create Book'
    })
  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await deleteBook(id)
    res.json({
      message: 'delete book'
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})











export default router