import IProductRepos from '//';

interface IDto{
    id: uuiv4,
    // ...{other params needed in the context}
}
abstract class IUseCase{

} 
class CreateProductUseCase extends IUseCase{
    private productRepos: IProductRepos;
    constructor({ prodRepos }){
        super()
        this.productRepos = prodRepos;
    }

    public async build(dto: IDto){
        // get query paramaters from the request ( from the controller) as Data Transport Object (DTO) from the routes class
        // make changes and pass the bussines rules against the DTO
        // finally create the product 
        this.productRepos.createProduct(dtoTransformed);
    }
}

export default CreateProductUseCase;