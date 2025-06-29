# 🚀 Next.js + tRPC + NextAuth 模板设置指南

## 📋 模板脱敏检查清单 ✅

### ✅ 已检查 - 无敏感信息

- ❌ 无 `.env` 文件 (已在 .gitignore 中)
- ❌ 无硬编码的 API 密钥或密码
- ❌ 无个人身份信息
- ❌ 无实际的数据库连接字符串
- ✅ 仅包含示例配置和占位符

### ⚠️ 需要自定义的部分

- `package.json` 中的项目名称: `proj_cloud_source_dashboard`
- README.md 中的项目描述

## 🛠️ 使用此模板的步骤

### 1. 克隆/下载模板

```bash
# 如果是 git 仓库
git clone <your-repo-url>
cd your-project-name

# 或者直接复制文件夹
```

### 2. 自定义项目信息

```bash
# 修改 package.json 中的项目名称
# 将 "proj_cloud_source_dashboard" 替换为你的项目名
```

### 3. 安装依赖

```bash
# 确保 Node.js >= 18
node --version

# 安装依赖
npm install
```

### 4. 环境配置

创建 `.env.local` 文件：

```env
# 数据库连接
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# NextAuth 配置
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# GitHub OAuth (可选)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### 5. 数据库设置

```bash
# 生成数据库迁移
npm run db:generate

# 应用迁移
npm run db:migrate

# 启动 Drizzle Studio (可选)
npm run db:studio
```

### 6. 启动开发服务器

```bash
npm run dev
```

## 🎯 模板特性

### ✅ 已配置的技术栈

- **Next.js 15** - React 全栈框架
- **tRPC v11** - 端到端类型安全 API
- **TanStack Query** - 数据获取和缓存
- **NextAuth.js** - 身份验证
- **Drizzle ORM** - 类型安全的数据库 ORM
- **PostgreSQL** - 数据库
- **Tailwind CSS** - 样式框架
- **TypeScript** - 类型安全

### ✅ 架构特点

- 🏗️ **模块化 tRPC 架构** - 按功能分组的路由
- 🎯 **清晰的职责分离** - 服务器端/客户端独立
- 📚 **完整的文档体系** - 使用指南和架构说明
- 🛠️ **开发者友好** - 类型安全、热重载、调试工具
- 🚀 **生产就绪** - 构建优化、错误处理、部署准备

### ✅ 包含的示例

- 用户认证流程
- tRPC API 调用示例
- 数据库操作示例
- React 组件最佳实践

## 📖 相关文档

开始使用前，建议阅读以下文档：

- `README.md` - 项目概览和快速开始
- `SETUP_ISSUES.md` - 常见问题和解决方案
- `src/server/trpc/ARCHITECTURE.md` - tRPC 架构详解
- `src/utils/trpc/USAGE.md` - 客户端使用指南
- `src/utils/STRUCTURE.md` - 文件结构说明

## 🎉 开始开发

配置完成后，你就可以开始基于这个强大的模板开发你的全栈应用了！

### 快速测试

访问 [http://localhost:3000](http://localhost:3000) 查看：

- 主页展示了 tRPC 的各种用法
- 登录功能 (GitHub OAuth)
- API 调用示例
- 数据库交互示例

祝你开发愉快！🚀
