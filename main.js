import { 
    getAllLastNameASC, 
    getAllLastNameDESC,



    getCustomer
} from "./js/module/customers.js";

import { getAll, 
    getAllLastName, 
    getAllFullNameJob, 
    getAllJobTitle,


    getEmployeesOffice
} from "./js/module/employees.js";


import { getAllProductosInStock,
        getAllProductsCountStock

} from "./js/module/product.js";

import { getAllPayments } from "./js/module/payments.js";

import { getAllOrders } from "./js/module/orders.js";

// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getAllPayments({payment: 146}));// 4 
console.log(await getAllOrders());// 5
// console.log(await getAllProductsCountStock());// 6
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
