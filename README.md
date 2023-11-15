# TPO-BD2

Trabajo Practico Obligatorio - 2C 2023 - Alasia, Della Torre, Escudeiro Garcia, Hiba

# Features

El trabajo consiste en un servicio de API que ofrece endpoints para modificar dos bases de datos: una de PostgreSQL y otra de MongoDB. Se trata de dos servidores independientes. Además, se ofrece un mecanismo de migración desde la primera hacia la segunda.

# Setup

Para poder testear este trabajo es necesario contar con una instacia de PostgreSQL y/o MongoDB en ejecucion.

### PostgreSQL

Para configurar el servidor API de Postgres, en primer lugar se debe modificar el archivo db.js en la carpeta PostgreSQL_API_server indicando user, host, database, password y port de dicha base de datos.

Luego se debe iniciar el servidor donde correrá el servicio de API REST.

### MongoDB

Para configurar el servidor API de MongoDB, no se deben hacer configuraciones adicionales. MongoDB debe estar corriendo sin usuario ni password en el puerto default 27017.

## Instalación de dependencias

Tanto para iniciar el servidor Postgres como el Mongo, primero hay que instalar las dependencias de NodeJS.

Ejecutar el siguiente comando en la carpeta raiz del repositorio:

npm install

## Ejecución de la API Postgres

Ejecutar el siguiente comando en la carpeta raiz del repositorio:

npm run postgres

Deberá figurar un mensaje 'La API Postgres esta corriendo...' para saber que el servicio se ejecutó con éxito. Utiliza el puerto 9999.

## Migración de datos de PostgreSQL a MongoDB

Si se cuenta con una instancia de Postgres y se quiere migrar toda la base de datos a MongoDB, se debe hacer lo siguiente:

Completar las credenciales del servidor Postgres desde el cual se quiere migrar en el archivo pg_config.json dentro de Mongo_API_server/Migration. Notar que este puede ser el mismo que se usó (y debe estar corriendo).

Luego, se debe ejecutar el siguiente comando en la carpeta raíz del repositorio.

npm run migration

## Ejecución de la API MongoDB

Ejecutar el siguiente comando en la carpeta raiz del repositorio:

npm run mongo

Deberá figurar un mensaje 'La API Mongo esta corriendo...' para saber que el servicio se ejecutó con éxito. Utiliza el puerto 9998.

### Documentación general de las APIs

Referirse al documento api_docs.txt que se encuentra en la carpeta raíz del repositorio.
