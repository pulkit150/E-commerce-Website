import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart} from "../data/cart.js";

//this below code helps us to run 
//the file--> cart-oop.js without importing
//import '../data/cart-oop.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js'; 

async function loadPage(){
   
    try{
        //throw 'error1';
        await loadProductsFetch();
        await loadCartFetch();

    } catch (error) {
        console.log('Unexpected Error. Please try again later');
    }
    // loadProductsFetch().then(()=>{

    // });
    //The above code returns a promise 
    //which moves to the next function by .then 
    
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage()



// Promise.all([
//     // new Promise((resolve)=>{
//     //     loadProductsFetch(()=>{
//     //         resolve('value1');
//     //         //resolve moves on to next function
//     //     });
//     // }),

//     loadProductsFetch(), //since this function returns a promise

//     new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve(); 
//         });     
//     })
// ]).then((value)=>{
//     console.log(value);
//     renderOrderSummary();
//     renderPaymentSummary();
// });


// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');
//         //resolve moves on to next function
//     })

// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });     
//     });

// }).then(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
// })


// loadProducts(()=>{
//     loadCart(()=>{
        
//     renderOrderSummary();
//     renderPaymentSummary();
//     });
// });
