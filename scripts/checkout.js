import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/backend-practice.js';
import { loadProducts,loadProductsFecth } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
  console.log('load page');

  await loadProductsFecth();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
/*
Promise.all([
  loadProductsFecth(),

 new Promise((resolve) => {
  loadCart(() => {
    resolve();
  });
})

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
})*/
 
