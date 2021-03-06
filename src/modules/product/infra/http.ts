import * as express from 'express';
import middlewares from './../../../main/infra/middleware/index';
import CreateProductContoller from './../usecases/serverOrAdmin/createProductUseCase/createProductController';

const productRouter = express.Router();



productRouter.post('/product', middlewares.isAuthenticated(), function(req, res){
    CreateProductContoller.run(req, res);
})

productRouter.put('/discount', middlewares.isAuthenticated(), function(req, res){
    ManagePriceController.discountWithPercentageController.run(req, res)
})

productRouter.get('/group', middlewares.isAuthenticated(), function(req, res){
    ManagePriceController.groupAndSetOffer.run(req, res);
})