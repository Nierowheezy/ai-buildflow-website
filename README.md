# ai-buildflow-website

Marketing website and documentation for [AI BuildFlow](https://ai-buildflow-dev.vercel.app) —
a file-backed, spec-driven workflow for building real software with AI.

Built with Next.js, Tailwind CSS, and MDX. The docs are authored as Markdown/MDX
files under `content/` and compiled at build time.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (static generation + type checking) |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint the codebase |

## Structure

```text
app/            Next.js App Router pages, layouts, and the docs catch-all route
components/     landing + docs UI components
content/        MDX docs; mirrors the docs sidebar navigation in lib/docs.ts
lib/            docs nav tree, MDX reading, and MDX compilation
public/         brand marks and the workflow diagram
```

## Writing documentation

Docs live in `content/` and map to URLs under `/docs`. The navigation order and
tree are defined in `lib/docs.ts`, and `lib/mdx.ts` maps selected slugs to files
(such as `/docs/cli` → `content/cli/overview.mdx`). Each file has a frontmatter
`title` and `description`. MDX supports the `<Callout>` component for inline
callouts, and code blocks are syntax-highlighted with Shiki and get a copy
button automatically.

Add a new file, then add its `href` to `lib/docs.ts` so it appears in the
sidebar, sitemap, and prev/next pagination.

## Domain

Deployed at https://ai-buildflow-dev.vercel.app (see `app/sitemap.ts` and the
`baseUrl` it uses).