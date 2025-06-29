# 🚀 Next.js + tRPC + NextAuth Template

A production-ready, full-stack TypeScript template featuring modern web development best practices.

## ✨ Features

- 🏗️ **Next.js 15** - Latest React framework with App Router
- 🔗 **tRPC v11** - End-to-end typesafe APIs
- 🔐 **NextAuth.js** - Complete authentication solution
- 🗄️ **Drizzle ORM** - Type-safe database operations
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **TanStack Query** - Data fetching and caching
- 🛡️ **TypeScript** - Full type safety
- 📚 **Comprehensive Documentation** - Architecture guides and examples

## 🎯 Architecture Highlights

- **Modular tRPC Setup** - Feature-based router organization
- **Clean Separation** - Server/client boundaries clearly defined
- **Type Safety** - End-to-end TypeScript integration
- **Scalable Structure** - Enterprise-ready architecture
- **Developer Experience** - Hot reload, debugging tools, and clear documentation

## 📂 Project Structure

This template follows a modern, modular architecture with clear separation of concerns:

```
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/
│   │   │   ├── auth/            # NextAuth.js API routes
│   │   │   └── trpc/            # tRPC API handler
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with providers
│   │   └── page.tsx             # Home page with examples
│   │
│   ├── components/
│   │   ├── business/            # Business logic components
│   │   │   ├── TRPCTest.tsx     # tRPC usage examples
│   │   │   ├── TRPCAdvancedTest.tsx
│   │   │   ├── TRPCTestNew.tsx
│   │   │   └── UserSession.tsx  # Auth session display
│   │   └── ui/                  # Reusable UI components
│   │       ├── button.tsx
│   │       └── input.tsx
│   │
│   ├── server/                  # Server-side configuration
│   │   ├── auth/                # NextAuth.js setup
│   │   │   ├── constants/
│   │   │   └── helpers/
│   │   ├── db/                  # Database configuration
│   │   │   ├── db.ts           # Drizzle client
│   │   │   └── schema.ts       # Database schema
│   │   └── trpc/               # 🎯 Modular tRPC server
│   │       ├── index.ts        # Main exports
│   │       ├── trpc.ts         # Core tRPC config
│   │       ├── root.ts         # Main router
│   │       ├── routers/        # Feature-based routers
│   │       │   ├── general.ts  # General/public APIs
│   │       │   └── user.ts     # User management APIs
│   │       └── ARCHITECTURE.md # Detailed architecture docs
│   │
│   ├── utils/
│   │   ├── trpc/               # 📱 tRPC client setup
│   │   │   ├── index.ts        # Client exports
│   │   │   ├── setup.ts        # Client configuration
│   │   │   ├── provider.tsx    # React Provider
│   │   │   ├── hooks.ts        # React hooks
│   │   │   └── USAGE.md        # Client usage guide
│   │   ├── index.ts            # Server-side import guide
│   │   ├── STRUCTURE.md        # Utils folder organization
│   │   └── OPTIMIZATION_SUMMARY.md
│   │
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn, etc.)
│   │
│   └── constants/
│       ├── index.ts
│       └── path.ts
│
├── public/                     # Static assets
├── scripts/                    # Database utility scripts
│   ├── check-db.js
│   └── fix-db.js
│
├── .env.example               # Environment variables template
├── TEMPLATE_SETUP.md          # Template usage guide
├── DEPLOYMENT.md              # Production deployment guide
├── SECURITY_CHECKLIST.md     # Security best practices
├── drizzle.config.ts          # Drizzle ORM configuration
└── package.json               # Dependencies and scripts
```

### 🎯 Key Architecture Highlights

- **🏗️ Modular tRPC**: Server routes organized by feature in `src/server/trpc/routers/`
- **🔒 Type Safety**: End-to-end TypeScript from database to frontend
- **📱 Client/Server Separation**: Clear boundaries between server (`/server`) and client (`/utils/trpc`)
- **📚 Comprehensive Docs**: Architecture guides and usage examples throughout
- **🚀 Production Ready**: Deployment configs, security checklists, and optimization guides

## 🧭 Quick Navigation

**Start Here:**

- [`src/app/page.tsx`](./src/app/page.tsx) - Main page with tRPC examples
- [`src/server/trpc/routers/`](./src/server/trpc/routers/) - API route definitions
- [`src/components/business/`](./src/components/business/) - Example components
- [`.env.example`](./.env.example) - Environment setup template

**Key Configuration Files:**

- [`src/server/trpc/root.ts`](./src/server/trpc/root.ts) - Main tRPC router
- [`src/utils/trpc/setup.ts`](./src/utils/trpc/setup.ts) - Client configuration
- [`src/server/db/schema.ts`](./src/server/db/schema.ts) - Database schema
- [`src/app/layout.tsx`](./src/app/layout.tsx) - App providers setup

**Documentation:**

- [`TEMPLATE_SETUP.md`](./TEMPLATE_SETUP.md) - How to use this template
- [`src/server/trpc/ARCHITECTURE.md`](./src/server/trpc/ARCHITECTURE.md) - tRPC architecture details
- [`src/utils/trpc/USAGE.md`](./src/utils/trpc/USAGE.md) - Client usage examples

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher
- **PostgreSQL**: Database server

You can check your versions with:

```bash
node --version
npm --version
```

If you're using nvm, you can use the included `.nvmrc` file:

```bash
nvm use
```

> 🚨 **Having setup issues?** Check out [SETUP_ISSUES.md](./SETUP_ISSUES.md) for common problems and solutions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Management

This project uses [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL for database management.

### Drizzle Studio

To explore and manage your database with a visual interface, you can use Drizzle Studio:

```bash
# Start Drizzle Studio
npx drizzle-kit studio

# Or add it as a script in package.json and run:
npm run db:studio
```

Drizzle Studio will be available at [http://localhost:4983](http://localhost:4983) where you can:

- View and edit table data
- Explore database schema
- Run SQL queries
- Monitor database relationships

### Database Commands

```bash
# Generate migration files based on schema changes
npx drizzle-kit generate

# Apply migrations to database
npx drizzle-kit migrate

# Introspect existing database to generate schema
npx drizzle-kit introspect
```

## Project Learning Resources

For detailed exploration and learning about this project's architecture and implementation:

📚 **[Next.js Full-Stack Project Guide](https://www.notion.so/Nextjs-20c867a3b6fb80e8b667f77484883dda)**

This comprehensive guide covers:

- Project setup and architecture
- Next.js 15 with App Router
- Drizzle ORM integration
- NextAuth.js authentication
- TRPC implementation
- Database design patterns

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
