import { connection } from "../../helpers/conexion.js";

// 8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**
export const getAllOfficesAndCountry = async () => {
    const [result] = await connection.query(`select officeCode, city, phone,addressLine1,state,country,territory from offices WHERE country="USA";`);
    return result;
}