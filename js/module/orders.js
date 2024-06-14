import { connection } from "../../helpers/conexion.js";


// 5. **Obtener todos los pedidos con estado 'Shipped':**
export const getAllOrders=async() =>{
    const [result] = await connection.query(`SELECT orderNumber , orderDate, requiredDate, status FROM orders WHERE status ="Shipped"`);
    return result;
}


//MULTITABLA

// 1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:** 
export const getAllOrdersAndClients=async({customerNumber} = {customerNumber: 496}) =>{
    const [result]= await connection.execute(`select o.orderNumber, d.productCode, d.quantityOrdered, o.orderDate, o.status, d.priceEach, d.orderLineNumber, p.productName, p.buyPrice from orders o inner join orderdetails d on o.orderNumber = d.orderNumber inner join products p on p.productCode = d.productCode where customerNumber =?;`, [customerNumber]);
    return result;
}