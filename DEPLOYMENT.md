# 🚀 部署指南

## Vercel 部署 (推荐)

### 1. 准备部署

```bash
# 确保代码已提交到 Git 仓库
git add .
git commit -m "🚀 ready for deployment"
git push
```

### 2. Vercel 配置

1. 访问 [vercel.com](https://vercel.com) 并连接你的 Git 仓库
2. 在环境变量中设置：
   ```
   DATABASE_URL=your_production_database_url
   NEXTAUTH_URL=https://your-app.vercel.app
   NEXTAUTH_SECRET=your_production_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

### 3. 数据库配置

推荐使用以下服务：

- **Neon** (PostgreSQL) - 免费层级
- **Supabase** (PostgreSQL) - 免费层级
- **PlanetScale** (MySQL) - 需要修改 Drizzle 配置

### 4. NextAuth 配置

在 GitHub OAuth App 设置中添加：

- Homepage URL: `https://your-app.vercel.app`
- Callback URL: `https://your-app.vercel.app/api/auth/callback/github`

## 其他部署选项

### Railway

1. 连接 Git 仓库
2. 设置环境变量
3. Railway 会自动检测 Next.js 并部署

### Docker 部署

```dockerfile
# Dockerfile 示例
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 部署前检查清单

- [ ] 环境变量已正确设置
- [ ] 数据库迁移已应用
- [ ] OAuth 回调 URL 已更新
- [ ] 域名 CORS 设置已配置
- [ ] 生产环境密钥已生成
- [ ] 错误监控已设置 (可选)

## 性能优化建议

1. **启用缓存**

   ```typescript
   // 在 tRPC 路由中添加缓存
   .query(async ({ ctx }) => {
     return await ctx.db.query.users.findMany();
   });
   ```

2. **数据库索引**

   ```sql
   -- 为常用查询添加索引
   CREATE INDEX idx_users_email ON users(email);
   ```

3. **图片优化**
   ```typescript
   // 使用 Next.js Image 组件
   import Image from "next/image";
   ```

部署成功后，你的应用就可以在生产环境中使用了！🎉
