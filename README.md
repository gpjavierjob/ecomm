# Verdulería.uy

Aplicación web para la venta de productos agropecuarios.

## Tecnologías principales

- [React](https://reactjs.org/)  
- [Vite](https://vitejs.dev/)  
- [React-Bootstrap](https://react-bootstrap.github.io/)  
- [Firebase](https://firebase.google.com/)  

## Funciones principales

- Visualización de productos organizados por categorías.  
- Adición de productos al carrito de compras.  
- Solicitud de información básica del usuario para procesar pedidos.  
- Generación de una orden de compra única.  
- Notificación al usuario con el ID de la orden de compra.  

## Instalación y ejecución

**Nota:** Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:  
- [Git](https://git-scm.com/)  
- [Node.js y npm](https://nodejs.org/) (npm se incluye automáticamente con Node.js).  

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:  
   ```bash
   git clone https://github.com/gpjavierjob/ecomm.git
   cd ecomm

2. Instala las dependencias:  
   ```bash
   npm install

3. Configura Firebase:  
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).  
   - Habilita Firestore Database y Authentication (con email/password).  
   - Sustituye en el archivo `.env`, ubicado en la carpeta raíz, los valores de las variables de entorno correspondientes a firebase con las credenciales de tu proyecto creado:  
     ```javascript
     # FIREBASE
     VITE_API_KEY=
     VITE_AUTH_DOMAIN=
     VITE_PROJECT_ID=
     VITE_STORAGE_BUCKET=
     VITE_MESSAGING_SENDER_ID=
     VITE_APP_ID=
     ```

4. Inicia el servidor de desarrollo con Vite:  
   ```bash
   npm run dev

5. Abre la aplicación en tu navegador en la dirección proporcionada por Vite (generalmente http://localhost:5173).  

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.md) para más detalles.

## Autor

Este proyecto fue desarrollado por **Javier Gómez Pérez**.
