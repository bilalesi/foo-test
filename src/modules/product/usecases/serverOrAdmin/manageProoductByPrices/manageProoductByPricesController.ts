// here we implement the API for the manage price uses cases
// its all about get/post/update/delete request
// see createProductUseCase;

namespace ManagePrice{
    // classes that implement all the use cases cited in the domain model and the repository


    // this class responsible fix a price (concret price/percentage)
    // i think the best way the query.body will conain a property that indicate
    // if the discount will be % or fixed
    class discountWithPercentageController extends BaseController{
        constructor(){
            super()
        }

        async run(request, response){
            // percentage is booleen value 
            // the default choise for the Admin is Fixed Amount;
            // you can make it as RadioButton in the UI
            const { discontType, discountAmount  } = req.body;
            //convert request to DTO
            // pass it to the usecase
            // the id/else make sense here so the repository do not have a relation with business invariant;
            try {
                if(discontType === '%')
                    await ManagePruductByPriceUseCases.discountWithPercenatgeUseCase.build(discountAmount)
                else if(discontType === '100da')
                    await ManagePruductByPriceUseCases.discountWithFixedAmountUseCase.build(discountAmount)
            } catch (err) {
                
            }
        }

    }
}