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


// 9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**
export const getAllClientsAndCity = async ({city} = {city:Madrid}) => {
    const [result]= await connection.execute(` select customerNumber,customerName,contactLastName,phone,city FROM customers WHERE city =?;`, [city]);
    return result; 
}


//multitabla
// 3. **Listar todos los clientes junto con su representante de ventas:**
export const getAllClientsAndSalesRepresentative = async () => {
    const [result] = await connection.query(`SELECT c.customerName,c.contactLastName,c.city,c.country,c.salesRepEmployeeNumber,e.lastName,e.firstName FROM customers c INNER join employees e ON c.salesRepEmployeeNumber= e.employeeNumber;`);
    return result;
}