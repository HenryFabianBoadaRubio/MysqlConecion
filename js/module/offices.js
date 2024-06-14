import { connection } from "../../helpers/conexion.js";

// 8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**
export const getAllOfficesAndCountry = async () => {
    const [result] = await connection.query(`select officeCode, city, phone,addressLine1,state,country,territory from offices WHERE country="USA";`);
    return result;
}



//multitabla

// 5. **Listar todas las oficinas y el número de empleados en cada una:**
export const getAllOfficesAndEmployees = async () => { 
    const [result] = await connection.query(` SELECT o.city,o.phone,o.state,COUNT(e.employeeNumber) numeroEmpleados,o.officeCode FROM offices o INNER JOIN employees e ON o.officeCode= e.officeCode group by officeCode;`);
    return result;
}