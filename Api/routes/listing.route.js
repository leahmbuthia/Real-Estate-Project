import express from 'express';
import { createListing, deleteListing, updateListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const listingRouter = express.Router();

listingRouter.post('/create',verifyToken, createListing);
listingRouter.delete('/delete/:id',verifyToken, deleteListing);
listingRouter.post('/update/:id',verifyToken, updateListing);


export default listingRouter;