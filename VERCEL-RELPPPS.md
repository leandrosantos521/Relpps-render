# Relpps Cosméticos — Vercel

Esta pasta é uma versão independente para Vercel. A versão Netlify original deve ser mantida separadamente.

## Deploy
1. Importe esta pasta/projeto no Vercel.
2. Framework: Other.
3. Build Command: deixe vazio.
4. Output Directory: deixe vazio.
5. Node.js: 20.x.
6. Em Settings > Environment Variables, cadastre as variáveis do `.env.example`.
7. Defina `PUBLIC_SITE_URL` com a URL final do projeto Vercel.
8. Defina `BLING_REDIRECT_URI` como `https://SEU-DOMINIO/bling-callback.html`.
9. No aplicativo do Bling, cadastre exatamente essa URL de redirecionamento.
10. Faça um novo deploy após salvar as variáveis.

## APIs Vercel
- `/api/bling`
- `/api/checkout`
- `/api/shipping`
- `/api/health`
- `/api/bling-homologacao`

Não há dependência de Netlify nesta versão.

## Imagens do Bling
A consulta das imagens é limitada a 2 consultas simultâneas e espaçada para respeitar o limite de 3 requisições/s do Bling. As imagens ficam em cache em memória por 1 hora e o navegador também mantém cache local.
