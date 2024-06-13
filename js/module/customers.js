import { connection } from "../../helpers/conexion.js";

export const getAllLastNameASC = async()=>{
    const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname`);
    return result;
}

export const getAllLastNameDESC = async()=>{
    const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC`);
    return result;
}


// 3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

export const getCustomer = async({customerNumber} = {customerNumber: 101})=>{
    const [result] = await connection.execute(`SELECT customerName, phone, contactLastName  FROM customers  WHERE customerNumber= ?;`, [customerNumber]);
    return result;
}