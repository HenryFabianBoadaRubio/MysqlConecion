1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   SELECT lastName, firstName FROM employees 
       -> WHERE officeCode ="1";
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerName, phone, contactLastName  FROM customers  WHERE customerNumber ="496";
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   SELECT customerNumber, checkNumber, paymentDate, amount FROM payments 
       -> WHERE customerNumber ="496";
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   SELECT orderNumber , orderDate, requiredDate, status FROM orders
       -> WHERE status ="Shipped";
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   select sum(quantityInStock) from products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   SELECT DISTINCT e.employeeNumber as numeroEmpleado,e.lastName as apellidoEmpleado,e.firstName as nombreEmpleado,e.extension,e.officeCode,e.jobTitle,e.reportsTo,a.lastName as nombreJefe FROM employees e INNER JOIN employees a ON e.reportsTo =a.employeeNumber;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   select officeCode, city, phone,addressLine1,state,country,territory from offices WHERE country="USA";
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   select customerNumber,customerName,contactLastName,phone,city FROM customers WHERE city ="Madrid";
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    SELECT productCode,productName,productLine,buyPrice from products WHERE buyPrice > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   select o.orderNumber, d.productCode, d.quantityOrdered, o.orderDate, o.status, d.priceEach, d.orderLineNumber, p.productName, p.buyPrice from orders o inner join orderdetails d on o.orderNumber = d.orderNumber inner join products p on p.productCode = d.productCode where customerNumber = "496";
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   SELECT e.lastName, e.firstName, e.email,e.officeCode,o.city,o.phone,o.state,o.postalCode from employees e INNER JOIN offices o ON e.officeCode= o.officeCode;
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT c.customerName,c.contactLastName,c.city,c.country,c.salesRepEmployeeNumber,e.lastName,e.firstName FROM customers c INNER join employees e ON c.salesRepEmployeeNumber= e.employeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   select p.productName,SUM(o.quantityOrdered) cantidadTotalOrdenada from orderdetails o INNER JOIN products p ON o.productCode = p.productCode group by productName;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
    SELECT o.city,o.phone,o.state,COUNT(e.employeeNumber) numeroEmpleados,o.officeCode FROM offices o INNER JOIN employees e ON o.officeCode= e.officeCode group by officeCode;
   ```