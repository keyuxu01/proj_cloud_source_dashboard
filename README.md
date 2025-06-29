This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
