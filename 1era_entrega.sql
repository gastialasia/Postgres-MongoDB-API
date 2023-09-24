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














