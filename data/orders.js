export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
    //adds the last object at front of the array
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}

export function getOrder(orderId){
    let matchingOrder;
    orders.forEach((order)=>{
        if(order.id === orderId){
            matchingOrder = order;
        }
    });

    return matchingOrder;
}