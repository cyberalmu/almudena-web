# Web personal — Almudena Díaz García

Web personal con blog integrado, construida con [Eleventy](https://www.11ty.dev/) y desplegada en Netlify.

## 🚀 Setup inicial (una sola vez)

### 1. Requisitos previos
- [Node.js](https://nodejs.org/) instalado (v18 o superior)
- Una cuenta en [GitHub](https://github.com/) 
- Tu sitio en [Netlify](https://www.netlify.com/)

### 2. Subir a GitHub
```bash
# Crea un repositorio nuevo en GitHub (ej: almudena-web)
# Luego en tu terminal:
cd almudena-web
git init
git add .
git commit -m "Primera versión con blog"
git remote add origin https://github.com/TU_USUARIO/almudena-web.git
git push -u origin main
```

### 3. Conectar con Netlify
1. Ve a [Netlify](https://app.netlify.com/)
2. "Add new site" → "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Netlify detectará la configuración automáticamente (el `netlify.toml` ya está configurado)
5. ¡Listo! Cada vez que hagas push a GitHub, Netlify reconstruirá la web automáticamente

### 4. Añadir tu foto
Coloca tu foto como `foto-almudena.jpg` en la carpeta `src/img/`.

## ✍️ Añadir una nueva newsletter (5 minutos)

### Paso 1: Crea un archivo .md
En la carpeta `src/blog/`, crea un archivo nuevo. El nombre será la URL:
```
src/blog/mi-nuevo-articulo.md
```
Esto generará la URL: `tusitio.com/blog/mi-nuevo-articulo/`

### Paso 2: Escribe el contenido
Copia esta plantilla y rellena:

```markdown
---
title: "El título de tu newsletter"
subtitle: "Una frase que resuma el contenido (aparece en el listado del blog)"
date: 2025-02-06
tags:
  - IA generativa
  - Educación
readingTime: 5
linkedinUrl: "https://www.linkedin.com/in/almudenadiazgarcia/recent-activity/newsletter/"
---

Aquí va el texto de tu newsletter. Puedes usar Markdown normal:

## Subtítulos con doble almohadilla

Párrafos normales con **negrita** y *cursiva*.

> Citas con el símbolo mayor que

- Listas con guiones
- Segundo punto

[Enlaces así](https://ejemplo.com)

![Imágenes así](/img/nombre-imagen.jpg)
```

### Paso 3: Publica
```bash
git add .
git commit -m "Nueva newsletter: título del artículo"
git push
```
Netlify reconstruirá la web automáticamente en ~30 segundos. ¡Listo!

## 🧪 Desarrollo local (opcional)

Si quieres previsualizar cambios antes de publicar:
```bash
npm install        # Solo la primera vez
npm start          # Abre http://localhost:8080
```

## 📁 Estructura del proyecto

```
almudena-web/
├── src/
│   ├── _includes/        ← Layouts (base.njk, post.njk)
│   ├── _data/            ← Datos globales (site.json)
│   ├── blog/             ← 📝 TUS NEWSLETTERS VAN AQUÍ
│   │   ├── index.njk     ← Página listado del blog
│   │   ├── blog.json     ← Configuración (no tocar)
│   │   └── *.md          ← Cada newsletter es un archivo
│   ├── css/              ← Estilos
│   ├── img/              ← Imágenes (foto, etc.)
│   └── index.njk         ← Página principal
├── .eleventy.js          ← Configuración de Eleventy
├── netlify.toml          ← Configuración de Netlify
└── package.json          ← Dependencias
```

## 💡 Tips

- **Tags disponibles**: Puedes usar los que quieras. Algunos sugeridos: `IA generativa`, `Educación`, `Pensamiento crítico`, `Pedagogía`, `Herramientas educativas`, `Datos`, `Metodología`, `Transformación digital`
- **Imágenes en artículos**: Colócalas en `src/img/` y referéncialas como `/img/nombre.jpg`
- **Orden**: Los artículos se ordenan automáticamente por fecha (más reciente primero)
- **El primer artículo** de la lista aparece como "destacado" con diseño especial
