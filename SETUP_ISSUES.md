# 🚨 Setup Issues & Solutions

## Node.js Version Compatibility

### Problem

If you encounter this error when running `npm run build` or `npm run dev`:

```
Error: Cannot find module 'node:events'
```

### Solution

This error occurs because you're using an outdated Node.js version. This project requires Node.js 18 or higher.

#### Check Your Current Version

```bash
node --version
```

#### Upgrade Node.js

**Option 1: Using Node Version Manager (nvm) - Recommended**

```bash
# Install nvm if you haven't already
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.bashrc

# Install and use Node.js 18
nvm install 18
nvm use 18

# Verify the version
node --version  # Should show v18.x.x
```

**Option 2: Direct Download**

- Visit [nodejs.org](https://nodejs.org/)
- Download and install Node.js 18 LTS or higher

#### Using the Project's .nvmrc File

If you have nvm installed, simply run:

```bash
nvm use
```

This will automatically switch to the Node.js version specified in the `.nvmrc` file.

### After Upgrading Node.js

1. Delete node_modules and package-lock.json:

```bash
rm -rf node_modules package-lock.json
```

2. Reinstall dependencies:

```bash
npm install
```

3. Try building again:

```bash
npm run build
```

## Other Common Issues

### Database Connection Issues

Make sure your `.env.local` file has the correct database URL:

```
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

### NextAuth Configuration

Ensure you have the required environment variables:

```
NEXTAUTH_SECRET="your-secret-here"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Dependencies Out of Sync

If you encounter package conflicts:

```bash
npm audit fix
# or
rm -rf node_modules package-lock.json && npm install
```

## Getting Help

If you're still experiencing issues:

1. Check that all environment variables are set correctly
2. Ensure PostgreSQL is running
3. Verify Node.js version is 18 or higher
4. Try a clean install of dependencies

For more detailed setup instructions, see the main [README.md](./README.md).
