import { connection } from "../../helpers/conexion.js";

export const getAllOrders=async() =>{
    const [result] = await connection.query(`SELECT orderNumber , orderDate, requiredDate, status FROM orders WHERE status ="Shipped"`);
    return result;
}