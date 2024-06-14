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

// 7. **Lista de todos los empleados con su jefe (si tienen):**
export const getAllEmployeesWithBoss = async()=>{
    const [result] =await connection.query(` SELECT DISTINCT e.employeeNumber as numeroEmpleado,e.lastName as apellidoEmpleado,e.firstName as nombreEmpleado,e.extension,e.officeCode,e.jobTitle,e.reportsTo,a.lastName as nombreJefe FROM employees e INNER JOIN employees a ON e.reportsTo =a.employeeNumber;`)
    return result;
}


//multitablas
// 2. **Listar todos los empleados junto con la oficina en la que trabajan:**
export const getAllEmployeesAndOffices =async()=>{
    const [result] =await connection.query(`SELECT e.lastName, e.firstName, e.email,e.officeCode,o.city,o.phone,o.state,o.postalCode from employees e INNER JOIN offices o ON e.officeCode= o.officeCode;`);
    return result;
}