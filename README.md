# Embedded Systems & Defense Technology Engineering

A responsive portfolio website for presenting engineering projects, technical capabilities, and team work in embedded systems and defense technology.

The site is being adapted from a fitness landing-page starter. Its existing section-based React structure provides a foundation for a portfolio; replace the remaining starter content, imagery, and branding with accurate, approved material before publishing it as a finished portfolio.

## Portfolio focus

The portfolio is intended to help readers understand:

- **Projects:** the problem, constraints, engineering approach, personal and team contributions, and outcome.
- **Embedded systems:** relevant firmware, electronics, hardware/software integration, testing, and development practices.
- **Team engineering:** collaboration, responsibilities, interfaces, and lessons learned.
- **Professional profile:** background, areas of interest, and appropriate ways to get in touch.

Only list technologies, responsibilities, project results, and qualifications that accurately reflect your experience. Clearly distinguish individual contributions from team achievements.

## Responsible publication

This portfolio is for public, professional communication. Before publishing project details or media, confirm that you have permission to share them. Do not include classified, export-controlled, proprietary, operationally sensitive, or otherwise restricted information. When in doubt, omit the detail and seek approval from the relevant organization.

Avoid inviting visitors to submit sensitive information through the contact form. Review its external form provider and destination before enabling it for real use.

## Technology

- React 19 and TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form

## Run locally

### Requirements

- Node.js and npm

### Install and start

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Validate and preview

```bash
npm run build
npm run preview
```

Run the configured linter with:

```bash
npm run lint
```

## Project structure

```text
src/
  assets/       Images and other static assets
  hooks/        Shared React hooks
  scenes/       Page sections and navigation
  shared/       Reusable UI components and shared types
  App.tsx       Page composition and shared navigation state
  main.tsx      React application entry point
```

The page is composed from reusable sections in `src/scenes/`. Adapt those sections and their content to your portfolio rather than treating the original fitness-specific text and visuals as finished portfolio material.

## Customization checklist

- Replace the starter logo, imagery, copy, and page title with approved portfolio content.
- Organize navigation around the content you actually plan to publish, such as Projects, Capabilities, Team, and Contact.
- For each project, explain its context, constraints, your contribution, team contribution, and verifiable outcome.
- Add links only to public repositories, publications, or professional profiles that are appropriate to share.
- Review the contact form destination and privacy implications before deployment.
- Check the finished site on mobile and desktop, then run the build before publishing.
