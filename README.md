# Find Local Chess

A community-driven website for discovering local chess events, tournaments, and meetups in your area. Built with Astro, powered by Sanity CMS, and deployed on Vercel.

## 🚀 Features

- **Server-Side Rendering**: Fast, dynamic pages built with Astro
- **Community Contributions**: Add events via web form with moderation workflow
- **Sanity CMS**: Events stored in Sanity with draft/publish workflow
- **Web Awesome Components**: Modern, accessible UI components
- **Responsive Design**: Works great on desktop and mobile
- **Vercel Deployment**: Automatically deployed via Vercel with serverless functions

## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── sanity-studio/         # Sanity CMS configuration
│   └── schemas/
│       └── event.ts       # Event schema definition
├── src/
│   ├── lib/
│   │   ├── schema.ts      # Valibot validation schema
│   │   └── utils.ts       # Utility functions
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro              # Homepage
│       ├── contribute.astro         # Event submission form
│       ├── locations.astro          # All locations
│       ├── [locationSlug]/
│       │   ├── index.astro          # Location page
│       │   └── events/
│       │       └── [...eventSlug].astro # Individual event pages
│       └── api/
│           └── create-event.ts      # Form submission API
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `bun install`     | Installs dependencies                         |
| `bun dev`         | Starts local dev server at localhost:4321    |
| `bun build`       | Build your production site to `./dist/`      |
| `bun preview`     | Preview your build locally, before deploying |

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
PUBLIC_SANITY_PROJECT_ID="your-project-id"
PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-api-token"
```

## 🎯 Adding Events

### For Contributors

1. Visit the [contribute page](https://find-local-chess.vercel.app/contribute) on the website
2. Fill out the event submission form
3. Submit the form - events are saved as drafts in Sanity
4. Site administrators review and publish events

### Event Fields

- **Title**: Name of the event
- **Day of Week**: When the event occurs
- **Recurrence**: How often it repeats (weekly, monthly, etc.)
- **Start/End Time**: Event timing
- **Venue**: Where the event takes place
- **Location**: City, State format (e.g., "San Diego, CA")
- **Description**: Detailed event information
- **Organizer**: Who runs the event
- **Contact**: Email or contact info
- **Website**: Link for more information
- **Tags**: Categories like "tournament", "casual", "blitz", etc.

### For Administrators

Events submitted through the form appear as drafts in Sanity Studio. To publish:

1. Access Sanity Studio
2. Review draft events
3. Publish approved events to make them live on the site

## 🚀 Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch.

### Vercel Setup

1. Connect your GitHub repository to Vercel
2. Set Framework Preset to "Astro"
3. Configure environment variables:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
4. Deploy!

The site uses server-side rendering with Vercel's serverless functions to handle form submissions securely.

## 🗄️ Content Management

This project uses Sanity CMS for content management:

- **Events**: Stored in Sanity with draft/publish workflow
- **Form Submissions**: New events submitted via web form are saved as drafts
- **Moderation**: Administrators review and publish events through Sanity Studio
- **API**: Serverless function handles form validation and Sanity integration

## 🤝 Contributing

We welcome contributions! 

### Adding Events
Use the [contribute form](https://find-local-chess.vercel.app/contribute) on the website to submit new events.

### Code Contributions
1. Fork this repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Tech Stack
- **Framework**: Astro with server-side rendering
- **UI Components**: Web Awesome
- **CMS**: Sanity
- **Validation**: Valibot
- **Deployment**: Vercel
- **Package Manager**: Bun

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
