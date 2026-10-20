# Portfólio - Luiz Guilherme

Portfólio estático, responsivo e sem build. Reúne projetos, serviços, experiência, stack e o currículo em PDF (`assets/Luiz-Guilherme-Monteiro-Arlindo-CV.pdf`).

- `/`: portfólio.
- `/fullstack/`: endereço antigo, redireciona para `/`.
- `assets/projetos/`: imagens dos projetos.

## Visualizar

```powershell
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicar

O push na `main` publica no GitHub Pages pelo workflow em `.github/workflows/deploy-pages.yml`.
