# Deploy en Cloudflare Workers (Capture Chess)

Sitio estático desplegado como **Worker con assets**. No usa SPA (`not_found_handling: none`).

## Configuración en Cloudflare (Workers Builds)

En **Workers & Pages** → **diensaweb** → **Settings** → **Build**:

| Campo | Valor |
|-------|--------|
| **Build command** | `npm run deploy` |
| **Deploy command** | *(dejar vacío si Build ya incluye deploy)* |

Si Build y Deploy están separados:

| Campo | Valor |
|-------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |

Después: **Clear build cache** → **Retry deployment**.

## Importante

- El archivo `wrangler.jsonc` del repo define `not_found_handling: "none"`. Eso evita el `_redirects` con `/* → /index.html` que falla.
- Si el deploy sigue fallando, el worker **diensaweb** en Cloudflare puede tener SPA guardado de un deploy anterior. **Borrá el worker** y volvé a conectarlo al repo, o editá en el dashboard **Settings → Variables and Assets → Static assets** y poné **Not found handling: None** (no Single Page Application).

## Deploy local

```bash
npm run deploy
```

## URLs

- `/` — landing
- `/privacy` — política de privacidad (`dist/privacy/index.html`)
