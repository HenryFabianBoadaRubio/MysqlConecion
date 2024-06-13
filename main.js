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


import { getAllProductosInStock } from "./js/module/product.js";

import { getAllPayments } from "./js/module/payments.js";

// console.log(await getCustomer({customerNumber: 146}));// 3 
console.log(await getAllPayments({payment: 146}));// 4 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getCustomer({customerNumber: 146}));// 3 
