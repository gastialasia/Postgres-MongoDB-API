CONSULTAS POSTGRESQL

--1
SELECT nro_telefono, e01t.nro_cliente
FROM e01_cliente JOIN e01_telefono e01t
ON e01_cliente.nro_cliente = e01t.nro_cliente
WHERE nombre = 'Wanda' AND apellido = 'Baker';

--2
EXPLAIN ANALYSE
SELECT *
FROM e01_cliente
WHERE nro_cliente IN (
    SELECT DISTINCT nro_cliente
    FROM e01_factura
    );

EXPLAIN ANALYZE
SELECT DISTINCT c.nro_cliente, c.nombre, c.apellido, c.direccion, c.activo
FROM e01_cliente c JOIN e01_factura f
ON c.nro_cliente = f.nro_cliente;

--Se eligió la primera opción ya que su costo es menor.

--3
SELECT *
FROM e01_cliente
WHERE nro_cliente NOT IN (
    SELECT DISTINCT nro_cliente
    FROM e01_factura
    );

--4
EXPLAIN ANALYSE
SELECT *
FROM e01_producto
where codigo_producto IN (
    SELECT DISTINCT codigo_producto
    FROM e01_detalle_factura
    );

EXPLAIN ANALYZE
SELECT DISTINCT p.codigo_producto , p.marca, p.nombre, p.descripcion, p.precio, p.stock
FROM e01_producto p JOIN e01_detalle_factura d
ON p.codigo_producto = d.codigo_producto;

-- Por menor costo, se eligió la primera opción

--5
SELECT c.nro_cliente AS nro_cliente, nombre, apellido, direccion, activo, codigo_area, nro_telefono, tipo
FROM e01_cliente c JOIN e01_telefono t
ON c.nro_cliente = t.nro_cliente;

--6
SELECT c.* ,COUNT(f.nro_factura) as cant_facturas
FROM e01_cliente c join e01_factura f on c.nro_cliente = f.nro_cliente
GROUP BY c.nro_cliente;

--7
explain analyse
SELECT f.*
FROM e01_factura f JOIN e01_cliente c on c.nro_cliente = f.nro_cliente
WHERE c.nombre = 'Pandora' AND c.apellido = 'Tate';

-- se eligió la de abajo porque era mas barata
Explain ANALYSE SELECT *
FROM e01_factura
WHERE nro_cliente = (SELECT nro_cliente
                     FROM e01_cliente
                     WHERE nombre = 'Pandora' AND apellido = 'Tate');

--8
explain analyse
SELECT f.*
FROM e01_factura f
WHERE f.nro_factura IN (SELECT nro_factura
                        FROM e01_detalle_factura df JOIN e01_producto e01p on df.codigo_producto = e01p.codigo_producto
                        WHERE marca = 'In Faucibus Inc.');

explain analyse
SELECT f.*
FROM e01_factura f
WHERE f.nro_factura IN (SELECT nro_factura
                        FROM e01_detalle_factura df
                        WHERE df.codigo_producto IN ( SELECT codigo_producto
                                                      FROM e01_producto
                                                      WHERE marca = 'In Faucibus Inc.'));

--9
SELECT e01t.codigo_area, e01t.nro_telefono, e01c.*
FROM e01_telefono e01t join e01_cliente e01c on e01c.nro_cliente = e01t.nro_cliente;

--10
SELECT nombre, apellido, SUM(total_con_iva) AS total_con_iva
FROM e01_cliente e01c JOIN e01_factura e01f ON e01c.nro_cliente = e01f.nro_cliente
GROUP BY e01c.nro_cliente;

--views
--1
CREATE VIEW facturas_por_fecha AS (
SELECT *
FROM e01_factura
ORDER BY fecha
                                  );

--2
CREATE VIEW productos_sin_factura AS (
SELECT *
FROM e01_producto
WHERE codigo_producto NOT IN
    (SELECT codigo_producto
     FROM e01_detalle_factura)
                                     );












