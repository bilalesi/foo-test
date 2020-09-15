/**
 * the product repository constructor take configuration dor database connection (mongoClient)
 * as Dependency injection from DI-container or as factory pattern
 */
import { MongoClient } from 'mongodb'
class ProductRepos{
    private client;
    constructor({ client }){
        this.client = client
    }

    public async createProduct(productDetails){
        try {
            const result = await this.client.db('startup').collection('products').inserOne(productDetails);
            return result;
        } catch (error) {
            
        }
    }
    // public async deleteProductByName();
    // public async deleteProductByOwnerId();
    public async deleteProductById(id){
        try {
            const result = await this.client.db('startup').collection('products').deleteOne({ _id: id});
            return result;
        } catch (error) {
            
        }
    }

    public async updateProduct(id, whatToSet){
        try {
            const result = await this.client.db('startup').collection('products').updateOne({ _id: id}, {$set: whatToSet});
            return result;
        } catch (error) {
            
        }
    }
    //  redundant but to show the price as your question specify
    public async modifyPrice(id, newPrice){
        try {
            const result = await this.client.db('startup').collection('products').updateOne({ _id: id}, {$set: {price: newPrice}});        
            return result;
        } catch (error) {
            
        }
    }

    public async groupAndModifyByPrice(id, price){
        try {
            const result = await this.client.db('startup').collection('products').updateOne({ _id: id}, {$set: {price: newPrice}});        
            return result;
        } catch (error) {
            
        }
    }
    public async findAndUpdateDiscountByPercentage(productDiscountArray, discountRatio){
        try {
            const result = await this.client.db('startup').collection('products')
            .updateMany({ _id: {$in : productDiscountArray}}, {$set: {
                discount: {
                    discountType: 'percentage',
                    discountAmount: discountAmount,
                    discountNewPrice: discount.discountAmount * discountRatio
                },
                $currentDate: { lastModified: true}
                }});        
            return result;
        } catch (error) {
            
        }
    }
    async findAndUpdateDiscountByFixedAmount(productDiscountArray, discountAmount){
        try {
            const result = await this.client.db('startup').collection('products')
            .updateMany({ _id: {$in : productDiscountArray}}, {$set: {
                discount: {
                    discountType: 'percentage',
                    discountAmount: discountAmount,
                    discountNewPrice: discount.discountAmount - discountAmount
                },
                $currentDate: { lastModified: true}
            }});        
            return result;
        } catch (error) {
            
        }
    }
}