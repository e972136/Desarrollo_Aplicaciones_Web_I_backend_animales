import express from 'express';
const animal = express();
import {
    getAnimal,
    postAnimal,
    putAnimal
} from "../controllers/animalController.js";



animal.get('',getAnimal);


animal.post('',postAnimal);

animal.put('/:id',putAnimal);

export { animal }