class CreateProductContoller extends BaseController{
    constructor({ useCase: CreateProductUseCase}){
        super()
    }
    // the RUN method is an abstract method from the base class BaseController
    // implment here and the role of the method is to execute the usecase depending on the 
    // request from the express router verbs.
    async run(req: Express.Request, res: Express.Response){
        try {
            // do the necessary work for the request query param
            // convert to dto
            // use the usecase correspondent to the controller;
            await CreateProductUseCase.run(reqToDto);
            // we can create a class to implemnt all possible ways  
            // the response instead call the res.METHOD
            res.json({
                message: 'message'
            })
        } catch (error) {
            res.send(error);
        }
    }
}

export default CreateProductContoller;