import express from "express";
export const testRouter = express.Router();

testRouter.get('/', (req, res) => {
    res.render('vendor_page')
})