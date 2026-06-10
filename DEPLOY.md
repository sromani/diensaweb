# Deploy en Cloudflare (Capture Chess)

Este sitio es **100% estático**. No uses `wrangler deploy` (Workers) — eso provoca el error de `_redirects infinite loop`.

## Opción recomendada: Cloudflare Pages

1. Entrá a [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Elegí el repo `sromani/diensaweb`.
3. Configuración de build:

| Campo | Valor |
|-------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | *(dejar vacío)* |

4. **Save and Deploy**.

No agregues `wrangler deploy` en ningún campo. Pages sirve los archivos de `dist` directamente.

---

## Si ya tenés un proyecto Workers "diensaweb" que falla

Ese worker tiene **SPA mode** activo en Cloudflare (genera `/* → /index.html` y la API lo rechaza). No se arregla solo con código del repo.

**Solución:** creá un proyecto **Pages** nuevo (pasos arriba) o cambiá el deploy:

1. **Workers & Pages** → tu proyecto → **Settings** → **Build**
2. Borrá el **Deploy command** si dice `wrangler deploy` o `npx wrangler deploy`
3. Dejá solo build: `npm run build` y output `dist`
4. **Clear build cache** y redeploy

O desde CLI (después de `npm run build`):

```bash
npm run deploy:pages
```

Eso usa `wrangler pages deploy`, **no** Workers scripts.

---

## URLs

- Home: `/`
- Privacidad (App Store): `/privacy` → archivo estático `dist/privacy/index.html`
