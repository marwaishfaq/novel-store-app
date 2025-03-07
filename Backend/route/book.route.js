import express from "express";
import { createBook  } from "../controller/book.controller.js";

const router = express.Router();

router.post("/", createBook);
//router.get("/books", getBooks);

export default router;