# Ernest Bombí — Web Personal

## Estructura del proyecto

```
ernest-bombi/
├── index.html          ← Página principal (edita textos aquí)
├── css/
│   └── style.css       ← Todos los estilos y colores
├── js/
│   └── main.js         ← Animaciones e interactividad
├── images/             ← PON AQUÍ TUS IMÁGENES
│   ├── hero.jpg            ← Personaje principal (pose tocando sombrero)
│   ├── pose-dinamica.jpg   ← Personaje saltando/señalando
│   └── desierto.jpg        ← Imagen con fondo de desierto
└── README.md           ← Este archivo
```

---

## Cómo publicar (GitHub + Vercel)

### 1. Crear repositorio en GitHub
1. Ve a github.com → botón verde "New"
2. Nombre: `ernest-bombi-web`
3. Público, sin README → "Create repository"
4. Sube todos estos archivos

### 2. Conectar con Vercel
1. Ve a vercel.com → "Sign up with GitHub"
2. "Add New Project" → elige tu repositorio
3. Deploy → ¡listo! Tendrás URL pública

Cada vez que edites un archivo en GitHub, Vercel actualiza la web automáticamente.

---

## Personalizar textos
Abre `index.html` y busca:
- `tu@email.com` → tu email real
- Los títulos de canciones → tus canciones reales
- Los links de redes sociales → tus URLs reales

## Personalizar colores
Abre `css/style.css` y busca `:root {` al principio.
Ahí están todos los colores con nombre explicativo.

---

## Próximos pasos (Fase 2)
- [ ] Añadir embed de Spotify / SoundCloud
- [ ] Crear página de lore / historia del personaje
- [ ] Añadir más poses animadas del personaje
- [ ] Implementar formulario de contacto real (Formspree, gratis)
