# Project architecture
### Architecture
in this skeleton i use the most used arch for project of high companies and its DDD
and i used some principles as dependency indjection and factory pattern as defaults 

*** where you can find the api you asked for
i split the project into domains, and each domain has its own bussnies logic, services,  infra (which contains every thing related to external communication like routers , db , mail services ....)

in the repository, you will find the direct communication with database model
and i implement the methods like creation, updating the product ... 
see(src\modules\product\repository\serverOrAdmin\index.ts) as example
one more thing for the repository i make three folders for each side of the Client/Server Arch
**("Client: for the webapp", "serverOrAdmin for the Administrator Dashboard", "Sharing: common usecase")**
meaning: one for the client interaction and one for the server or the Admin dashboard

same for the usecase folder you will find all the usecases that interact with DOMAIN
one for each side as separation of concern principle

the use cases take the request as DTO (data transport object) from the controller (the controller is the responsible to convert REQUEST to DTO)
and verify the business logic then pass to the repository method to handle the writing/reading from the DB;

for the specifics tasks:
#### "Permettre à l'administrateur de gérer une liste de produits qui ont des prix."
 you will find a namespace contains all the details of managing price path in 
**(src\modules\product\usecases\serverOrAdmin\manageProoductByPrices)**
 and in the createProductUseCase
**(src\modules\product\usecases\serverOrAdmin\createProductUseCase)**

#### "Permet à l'administrateur de fixer des prix concrets (tels que 1000 da) et des remises sur les prix, soit d'un montant concret (-200 da), soit d'un pourcentage (-10%)."

the request must contain the amout and type depending on the admin choise (UI)
pass to the use case that will test against the request.body.type { type, amout}

controller: 
**(src\modules\product\usecases\serverOrAdmin\manageProoductByPrices\manageProoductByPricesController.ts)**
usecase:
**(src\modules\product\usecases\serverOrAdmin\manageProoductByPrices\manageProductByPriceUseCase.ts)**

#### you can find the model for the product collection in
**(src\main\infra\databse\models\product.ts)**

```javascript
const productSchema = new mongoose.Schema({
    prductId: {
        type: uuidV4
    },
    price: {
        type: Number
    },
    hasNewPrice: { type: Boolean, default: false},
    discount: {
        // (percentage: 0.25 or fixed: 100 da)
        discountType: { type: String, default: 'fixed'},
        discountAmount: { type: Number},
        discountNewPrice: {type: Number}
    },

    quantity: { type: Number},
    ...productProperties
}, { 
    timestamps: true
})```

** i mixed with mongod and mongoose just for the demonstartion sake;