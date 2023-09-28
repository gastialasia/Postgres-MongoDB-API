const getAllClientsQuery = "SELECT * FROM e01_cliente;"

const newUserQuery = "INSERT INTO e01_cliente (nombre, apellido, direccion, activo) VALUES ($1, $2, $3, $4);"

const removeUserQuery = "DELETE FROM e01_cliente WHERE nro_cliente = $1;"

const newProductQuery = "INSERT INTO e01_producto (marca, nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4, $5);"

const removeProductQuery = "DELETE FROM e01_producto WHERE codigo_producto = $1;"

function buildModifyString(queryParams, table_name, column_name, item_id) {

    let result = "UPDATE " + table_name + " SET " + queryParams[0][0] + " = " + "'" + queryParams[0][1] + "'"
    var qty = queryParams.length

    for (i = 1; i < qty; i++) {
        result += ", " + queryParams[i][0] + " = " + "'" + queryParams[i][1] + "'";
    }

    result += " WHERE " + column_name + "=" + item_id + ";";

    return result.trim();
}

module.exports = {
    getAllClientsQuery,
    newUserQuery,
    newProductQuery,
    removeUserQuery,
    removeProductQuery,
    buildModifyString,
}