namespace ManagePruductByPriceUseCases{
    // grouping the product collection by the price so that you can 
    // get the average price or use it for see the what price get a lot of attention 
    // from clients ....etc 
    // we use mongo aggregate for this class 
    // and we can implement a lot of details depends on the use case for price path on db;

    export class groupByPrice{

    }
    export class getTheTop10WithHighPriceUseCase{

    }
    export class getTheTop10WithLowPriceUseCase{

    }
    export class getProductWithPromotionUseCase{

    }
    // update product that you want to discount:
    export class updateWithDiscountUseCase{
        
    }
    // i prefer two use cases for discount and that for the design principle related to DDD
    // that the repository has nothing to do with the application layer, 
    // its not the responsibility of the DB to change the values depending on the inputs
    export class discountWithPercenatgeUseCase{
        async build(discountRatio){
            // 1- you can get the product by type to discount 
            const productsToDiscount = await this.productRepository.getAllProductByType(type);
            // 2- or after an aggregation calculation and pass the result to update function
            // the pipeline is for the aggregate, (1) implement it  in the Repos 
            // or pass it in from the usecase, i prefer the aggregate 
            // it can be on direct relation with the dashbaord of the Admin
            const productToDiscountAggregate = await this.productRepository.getAllProductAggre(pipeline: Array)
            const productDiscountArray = productToDiscountAggregate.toArray().reduce(function(acc, prod){
                acc.push(prod._id)
            } , []);
            await this.productRepository.findAndUpdateDiscountByPercentage(productDiscountArray, discountRatio)
        }
    }
    export class discountWithFixedAmountUseCase{
        async build(discountAmount){
            const productToDiscountAggregate = await this.productRepository.getAllProductAggre(pipeline: Array)
            const productDiscountArray = productToDiscountAggregate.toArray();
            await this.productRepository.findAndUpdateDiscountByFixedAmount(productDiscountArray, discountAmount)
        }
    }
    // .... and a lot more functionnalite for the dashboard of the Admin
    // depends on the bussnies logic of the project.
}