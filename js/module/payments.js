import { connection } from "../../helpers/conexion.js";



// 4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**
export const getAllPayments = async({payment} = {payment: 1})=>{
    const [result]= await connection.execute(`SELECT customerNumber, checkNumber, paymentDate, amount FROM payments WHERE customerNumber =?;`, [payment]);
    return result;

}