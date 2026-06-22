# CLAUDE.md — Contexto del proyecto FluxáMotors

Este archivo da el contexto necesario para que Claude (Cowork/Code) retome el proyecto sin historial previo. Léelo antes de trabajar.

## Qué es

Sitio web de **FluxáMotors**, una automotora de vehículos usados en Santiago de Chile.
Objetivo: presencia online 24/7 que transmita **cercanía y confianza**, con WhatsApp como canal de contacto principal.

- Dominio propio: **fluxamotors.cl** (registrado en NIC Chile).
- Hosting: **Vercel** (plan gratis). URL temporal: `paginaweb2-gilt.vercel.app`.
- Repo: GitHub (deploy automático a Vercel en cada push).

## Datos del negocio (usar siempre estos)

- Teléfono / WhatsApp: **+56 9 4006 9759** → enlaces como `https://wa.me/56940069759`
- Email: **fluxamotors@gmail.com**
- Dirección: **Luxemburgo 9621, Las Condes, Santiago**
- Google Maps: `https://www.google.com/maps/search/?api=1&query=Luxemburgo+9621%2C+Las+Condes%2C+Santiago`
- Horario: Lun–Vie 9:00–18:00

## Arquitectura

Sitio **estático** (HTML + CSS + JS puro, sin framework ni build). Vercel solo sirve los archivos tal cual (Framework Preset = **Other**, sin build command).

**IMPORTANTE: todos los archivos van planos en la raíz, SIN subcarpetas.** Las rutas internas apuntan directo (`styles.css`, `main.js`, `logo.svg`), no `css/...`. Mantenerlo así para que la subida a GitHub sea simple.

### Archivos (8 + este)

- `index.html` — Inicio: hero, buscador, "por qué nosotros", autos destacados, pasos, teaser financiamiento, testimonios, CTA.
- `inventario.html` — Stock: filtros + grilla de autos (datos en `<script>` al final del archivo).
- `financiamiento.html` — Simulador de cuota (JS en la misma página) + beneficios y requisitos.
- `nosotros.html` — Historia, valores, mapa embebido de Google.
- `contacto.html` — Formulario que arma un mensaje de WhatsApp + datos + mapa.
- `styles.css` — Sistema de diseño completo (variables, componentes, responsive).
- `main.js` — Solo el toggle del menú móvil.
- `logo.svg` — Logo recreado en SVG (ver nota abajo).

## Sistema de diseño

Colores (definidos como variables CSS en `styles.css`, tomados del logo):

- Navy `--navy: #0d1b3e` (header, footer, fondos oscuros)
- Rojo `--red: #e2231a` (acentos, CTAs principales)
- Plata/gris para textos secundarios
- Verde WhatsApp `#25D366`

Tipografía: **Poppins** (títulos) + **Inter** (cuerpo), vía Google Fonts.

Patrón de confianza: badges de verificación, testimonios con estrellas, copy de tono cercano ("te asesoramos como a un amigo"), botón flotante de WhatsApp en todas las páginas.

## Cómo editar lo común

- **Agregar/editar autos:** editar el array `stock` (en `inventario.html`) o `cars` (en `index.html`). Cada auto: `{t:título, y:año·km, tag:etiqueta, img:ID-de-unsplash, specs:[...], p:precio}`. Las fotos son placeholders de Unsplash (`img` = ID de la foto); reemplazar por fotos reales cuando estén.
- **Cambiar datos de contacto:** están repetidos en el header/footer de cada HTML y en los enlaces `wa.me`. Buscar y reemplazar en los 5 HTML.
- **Reemplazar el logo:** sustituir `logo.svg` por el archivo real (mismo nombre) o, si es PNG, cambiar las referencias `logo.svg` por `logo.png` en los 5 HTML.

## Estado del logo

`logo.svg` es una **recreación** del logo de la marca (F roja dinámica + rueda plateada "o" + "luxá Motors"), porque el archivo original no estaba disponible. Si Benja entrega el logo oficial, reemplazarlo.

## Despliegue

1. Subir/commitear los archivos al repo de GitHub (todos planos en la raíz).
2. Vercel redespliega solo (~1 min).
3. Dominio: en Vercel (Settings → Domains) está agregado `fluxamotors.cl` con redirect 308 a `www.fluxamotors.cl`. Falta apuntar el DNS en NIC Chile a los nameservers de Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Propaga en 2–48 h y el HTTPS se activa solo.

## Pendientes / próximos pasos

- [ ] Completar el cambio de nameservers en NIC Chile para activar fluxamotors.cl.
- [ ] Reemplazar logo recreado por el oficial.
- [ ] Cargar inventario real (fotos + datos) en vez de los autos de ejemplo.
- [ ] (Opcional) Correo profesional @fluxamotors.cl vía registros MX en Vercel.
- [ ] (Opcional) Redes sociales reales en el footer (hoy son `#`).

## Preferencias de quien lidera el proyecto

Benja es consultor (Raven). Prefiere respuestas concisas, directas y estructuradas (estilo McKinsey, bullets MECE).

