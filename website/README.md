# IOWarp Agents Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

## Agent Data Generation

The website automatically scrapes agent data from the `/agents` directory:

```bash
npm run generate-agents
```

This command parses all markdown files in the agents directory and generates `src/data/agentData.js` with the agent metadata.
