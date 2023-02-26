# challengeApiTypeScriptNodeJWT

<em> API LOGIN - REGISTRO Y VALIDACION - TYPESCRIPT - JWT </em>


*[Características de la aplicación y demostración]
Se realizó Back-End que permite registracion de usuarios, con mail y contraseña. 
 Se busca usuairos a traves de su mail. Tiene las rutas protegidas. 
 
 
API  realizada con:
TypeScript 
Node
Express
JWT

BD  Mongodb a traves de https://cloud.mongodb.com/

- hapy/joi para validar. 

EndPoints 
https://challengeapi.onrender.com/auth/register  
Registra el usuario con mail y contraseña.
https://challengeapi.onrender.com/auth/login
Realiza el login contra los datos de la Bd. 
https://challengeapi.onrender.com/report/allusers?page=1
ruta protegida, trae todos los usuarios registrados. Está paginado. Page indica la página. 
https://challengeapi.onrender.com/report/search?mail=
ruta protegida, busca un usuario a través de su mail. 
