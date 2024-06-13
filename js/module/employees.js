import { connection } from "../../helpers/conexion.js";


export const getAllLastName = async()=>{
    const [result] = await connection.query(`SELECT lastName FROM employees`);
    return result;
}

export const getAllFullNameJob = async()=>{
    const [result] = await connection.query(`SELECT CONCAT(firstName," ", lastName) as 'fullName', jobTitle FROM employees`);
    return result;
}

export const getAll = async()=>{
    const [result] = await connection.query(`SELECT lastName, firstName, extension, email, officeCode, reportsTo, jobTitle FROM employees`);
    return result;
}

export const getAllJobTitle = async({cargo} = {cargo: "Sales Rep"})=>{
    const [result] = await connection.execute(`
    SELECT CONCAT(firstName,' ', lastName) as 'fullName' FROM employees where jobTitle = ?`, [cargo] );
    result["count"] = result.length;
    return result;
}




// MIS CONSULTAS 

//2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

export const getEmployeesOffice= async({office} = {office: 1})=>{
    const[result] = await connection.execute(`SELECT lastName, firstName FROM employees WHERE officeCode = ?;`, [office]);
    return result;
}