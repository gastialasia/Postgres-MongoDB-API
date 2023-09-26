const getAllClientsQuery = "SELECT * FROM e01_cliente;"

const newUserQuery = "INSERT INTO e01_cliente (nro_cliente, nombre, apellido, direccion, activo) VALUES ($1, $2, $3, $4, $5);"

const removeUserQuery = "DELETE FROM e01_cliente WHERE nro_cliente = $1;"

const modifyUserQuery = "UPDATE e01_cliente SET $2 = $3 WHERE nro_cliente = $1; "

const newProductQuery = "INSERT INTO e01_producto (codigo_producto, marca, nombre, descripcion, precio, stock) VALUES ($1, $2, $3, $4, $5, $6);"

function buildModifyString(queryParams, nro_cliente) {
    let result = "UPDATE e01_cliente SET " + queryParams[0][0] + " = " + queryParams[0][1]
    var qty = queryParams.length
    //console.log('-----------')
    //console.log(qty)
    for(i=1;i<qty;i++){
      result += ", " + queryParams[i][0] + " = " + queryParams[i][1];
    }

    result += " WHERE nro_cliente = " + nro_cliente + ";";
  
    return result.trim();
}

module.exports = {
    getAllClientsQuery,
    newUserQuery,
    newProductQuery,
    removeUserQuery,
    modifyUserQuery,
    buildModifyString
}