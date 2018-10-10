# OnFlyNews

---

Este proyecto es el frontend de un portal de noticias responsive similar a medium.com (https://medium.com/), una plataforma social de publicación de artículos de diferentes contenidos.

Las caracteristicas de la plataforma son:

* Header
  * Nombre de la plataforma
  * Listado de temas
  * Login y registro
  * Buscador
* Footer
  * Copyright
  * Nombre de la plataforma
* Lista de articulos
  * Titulo vinculado al artículo
  * Imagen
  * Texto introductorio
  * Información del autor
  * Numero Comentarios (link a detalle del Articulo Individual)
* Articulo individual
  * Imagen
  * Titulo
  * Texto completo
  * Bóton de Like (Local Storage) del articulo
  * Sistema de comentarios (comentarios asociados y formulario para añadir nuevos comentarios)

Instrucciones de despliegue:
1. Descargar los archivos `git clone https://github.com/noemenend/OnFlyNews.git`
2. Instalar paquetes `npm install`
3. Renombrar el archivo data.json.example a data.json
4. Renombrar el archivo .env.example a .env (API_URL=http://localhost:3001/)
5. Arrancar servidor de comentarios `npm run json-server`
6. Arrancar servidor de webpack `npm start`

# Author

---

  Este proyecto ha sido realizado por [Noelia Muñiz Menéndez](https://github.com/noemenend)
