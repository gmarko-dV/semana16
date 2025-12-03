# Examen Final - React SPA

Aplicación web de una sola página (SPA) desarrollada con React y Vite.

## Tecnologías

- React
- Vite
- Zustand (manejo de estado)
- React Router DOM
- Bootstrap

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Card.jsx
│   ├── CardList.jsx
│   ├── Footer.jsx
│   └── Header.jsx
├── layouts/
│   └── RootLayout.jsx
├── pages/
│   ├── Contact.jsx
│   ├── Entities.jsx
│   └── Home.jsx
├── store/
│   └── store.jsx
├── App.jsx
└── main.jsx
```

## API

Este proyecto consume datos de [DummyJSON](https://dummyjson.com/products) para mostrar una lista de productos con imágenes y paginación.