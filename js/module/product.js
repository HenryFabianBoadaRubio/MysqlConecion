import { connection } from "../../helpers/conexion.js";

// 1. **Obtener todos los productos en stock:**
export const getAllProductosInStock = async() => {
    const [result] = await connection.query(`select productName, quantityInStock from products;`);
    return result;
}




// 6. **Cantidad total de productos en stock:**
export const getAllProductsCountStock = async() => {
    const [result] = await connection.query(`select sum(quantityInStock) AS cantidad_total_stock from products;`);
    return result;
}