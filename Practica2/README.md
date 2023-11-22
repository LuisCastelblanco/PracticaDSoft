# Gestor de Series de Televisión en Angular

Este es un proyecto desarrollado en Angular que permite gestionar series de televisión. La aplicación incluye un módulo para series, una clase Serie para manejar los datos de las series, un servicio que utiliza HTTP para obtener datos de series desde una URL externa y un componente para listar series que se presenta en una tabla de Bootstrap, tambien muestra el promedio de temporadas de las series.


## Características

- **Módulo de Series**: El proyecto incluye un módulo dedicado exclusivamente a las series de televisión.

- **Clase Serie**: Se ha creado una clase llamada `Serie` que contiene todos los atributos necesarios para manejar los datos de una serie.

- **Servicio HTTP**: Se ha implementado un servicio que utiliza HTTP para obtener datos de series desde la siguiente URL externa: [series.json](https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json).

- **Componente de Listar Series**: Se ha creado un componente que permite listar las series en una tabla de Bootstrap. La tabla mostrará los siguientes datos de cada serie: ID, Nombre, Canal y Temporadas.

- **Promedio de temporadas**: La app muestra el promedio de temporadas de las series obtenidas. 


## Capturas

![image](https://github.com/SergonM/TallerAngular/assets/111070667/b8f6b7ea-c5a0-4945-81ce-517e5b2fe710)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Notas
- Asegúrate de tener [Angular CLI](https://cli.angular.io/) instalado en tu sistema.
- Es necesario contar con internet para cargar los datos de las series desde la URL externa proporcionada.
