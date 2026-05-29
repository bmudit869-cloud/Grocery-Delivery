import express from "express";
import auth from "../middleware/auth";
import { getAddresses } from "../Controllers/addressController";
import { addAddress } from "../Controllers/addressController";
import { updateAddress } from "../Controllers/addressController";
import { deleteAddress } from "../Controllers/addressController";


const addressRouter = express.Router();
addressRouter.get('/', auth, getAddresses);
addressRouter.post('/', auth, addAddress);
addressRouter.put('/:id', auth, updateAddress);
addressRouter.delete('/:id', auth, deleteAddress);

export default addressRouter; 