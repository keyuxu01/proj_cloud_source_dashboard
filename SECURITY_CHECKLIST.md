# 🔒 安全检查清单

## ⚠️ 模板使用前的安全检查

### 🚨 **关键安全提醒**

在将此项目作为模板或开源之前，请确保以下文件**绝对不包含**真实的敏感信息：

### 📋 **必须检查的文件**

- [ ] `.env*` 文件 (应该已被 .gitignore 忽略)
- [ ] `drizzle.config.ts` (不应包含真实数据库连接)
- [ ] 任何包含 API 密钥的配置文件
- [ ] Git 历史记录 (如果曾经提交过敏感信息)

### 🔍 **敏感信息类型**

- 🔑 **数据库密码** (`DB_PASSWORD`, `DATABASE_URL` 中的密码)
- 🔑 **API 密钥** (`GITHUB_SECRET`, `NEXTAUTH_SECRET` 等)
- 🔑 **OAuth 客户端信息** (真实的 `CLIENT_ID` 和 `CLIENT_SECRET`)
- 🔑 **个人标识** (用户名、邮箱、项目特定名称)

### ✅ **安全最佳实践**

1. **使用 .env.example**

   ```bash
   # ✅ 正确 - 使用占位符
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   GITHUB_CLIENT_ID="your-github-client-id"

   # ❌ 错误 - 真实信息
   DATABASE_URL="postgresql://postgres:mypassword123@localhost:5432/myproject"
   GITHUB_CLIENT_ID="Ov23liXXXXXXXXXXXXXX"
   ```

2. **检查 Git 历史**

   ```bash
   # 搜索可能的敏感信息
   git log --all --grep="password\|secret\|key" -i
   git log -p --all | grep -i "password\|secret\|key"
   ```

3. **清理 Git 历史** (如果已经提交敏感信息)
   ```bash
   # 危险操作！会重写历史
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch .env.development' \
   --prune-empty --tag-name-filter cat -- --all
   ```

### 🛡️ **模板准备检查清单**

使用此模板前，确保：

- [ ] 所有 `.env*` 文件都在 `.gitignore` 中
- [ ] 仅包含 `.env.example` 文件
- [ ] 所有敏感配置都使用环境变量
- [ ] 项目名称已更改为通用名称
- [ ] 文档中没有个人信息
- [ ] Git 历史记录干净

### 🚨 **如果意外泄露敏感信息**

1. **立即行动**

   - 删除含有敏感信息的文件
   - 更改所有泄露的密码和密钥
   - 撤销 OAuth 应用程序

2. **GitHub 泄露处理**

   - GitHub 会自动扫描并警告密钥泄露
   - 立即在 GitHub Settings 中撤销相关密钥
   - 重新生成新的密钥

3. **清理历史**
   - 使用 `git filter-branch` 或 `git-filter-repo`
   - 强制推送清理后的历史
   - 通知所有协作者

### 📖 **相关资源**

- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Removing sensitive data from Git](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)

---

**记住：一旦敏感信息进入 Git 历史，就很难完全清除。预防永远比补救更重要！** 🔐
