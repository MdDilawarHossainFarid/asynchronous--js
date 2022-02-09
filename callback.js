const takeOrder = (customer1,callback) => {
console.log(`take order ${customer1}`)
callback(customer1)
}

const processOrder = (customer1,callback) => {
console.log(`processing order ${customer1}`)
setTimeout(() => {
  console.log(`cooking complete`)
  console.log(`order processed ${customer1}`)
  callback(customer1)
  }, 5000);
}

const completeOrder = (customer1,callback) => {
   console.log(`order complete ${customer1}`)
   callback(customer1)
}

const payBill = (customer1) =>{
console.log(`please wait ${customer1} for bill pay`)
setTimeout(() => {
console.log(`bill pay is completed`)
console.log(`thank you`)
}, 2000)
}

takeOrder('customer1',(customer1) => {
processOrder('customer1',(customer1) => {
completeOrder('customer1',(customer1) =>{
payBill('customer1')
})
})
})




