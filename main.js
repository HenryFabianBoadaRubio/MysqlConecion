import { 
    getAllLastNameASC, 
    getAllLastNameDESC,



    getCustomer,
    getAllClientsAndCity,
    getAllClientsAndSalesRepresentative
} from "./js/module/customers.js";

import { getAll, 
    getAllLastName, 
    getAllFullNameJob, 
    getAllJobTitle,


    getEmployeesOffice,
    getAllEmployeesWithBoss,
    getAllEmployeesAndOffices
} from "./js/module/employees.js";


import { getAllProductosInStock,
        getAllProductsCountStock,
        getAllProductsPriceOfBuy

} from "./js/module/product.js";

import { getAllPayments } from "./js/module/payments.js";

import { getAllOrders,
     getAllOrdersAndClients,
     getAllCountOrdersAndProducts
} from "./js/module/orders.js";

import { getAllOfficesAndCountry,
    getAllOfficesAndEmployees
 } from "./js/module/offices.js";

// console.log(await getCustomer({customerNumber: 146}));// 3 
// console.log(await getAllPayments({payment: 146}));// 4 
// console.log(await getAllOrders());// 5
// console.log(await getAllProductsCountStock());// 6
// console.log(await getAllEmployeesWithBoss());// 7 
// console.log(await getAllOfficesAndCountry());// 8 
// console.log(await getAllClientsAndCity({city: "Madrid"}));// 9 
// console.log(await getAllProductsPriceOfBuy());// 10 


//MULTITABLAS
// console.log(await getAllOrdersAndClients({customerNumber: 496}));// 1 
// console.log(await getAllEmployeesAndOffices());// 2 
// console.log(await getAllClientsAndSalesRepresentative());// 3 
// console.log(await getAllCountOrdersAndProducts());// 4 
console.log(await getAllOfficesAndEmployees());// 5 

