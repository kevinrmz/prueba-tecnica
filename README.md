# Prueba Técnica

### Descripción

**Registro y login**
Creación de un API REST que permita registrar usuario y loguear al usuario.
Creación de un API REST que permita registrar, actualizar y eliminar *productos*.


### Instalación
Para la instalacion del proyecto lo primero que hay que hacer es clonar el repositorio:
```
    git clone https://github.com/kevinrmz/prueba-tecnica.git
```

- Una vez clonado lo siguiente es escribir el siguiente comando: `npm install` Esto es para instalar las dependencias del proyecto y funcione correctamente.

- Copiar el archivo `.env.example` y renombrarlo con `.env` en ese archivo se colocara las configuraciones necesarias, por ejemplo la conexion hacia la base de datos y la palabra secreta que usa el jsonwebtoken.

- Sobre la base de datos es una conexion a MySQL.
    
    - Solo crear la base de datos y colocar el nombre en el archivo `.env`
    - Cuando se ejecute la api la dependencia de sequelize realizara la creacion de las tablas automaticamente si es que no existen.

- Para la ejecucion del api rest se ejecuta con el siguiente comando `npm run start`

### USO
En este [enlace](https://documenter.getpostman.com/view/22407656/UzXNVd5H) encontrara la documentacion de las rutas del api.
