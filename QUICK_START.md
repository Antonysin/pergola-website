# 快速启动指南

由于网络原因无法自动安装依赖，请按以下步骤手动操作：

## 方式 1：本地开发（推荐）

### 步骤 1：进入项目目录
```bash
cd /Users/antony/Desktop/cc1/my-app
```

### 步骤 2：安装依赖

**方法 A - 使用 npm（国内用户推荐换源）**
```bash
# 换国内镜像
npm config set registry https://registry.npmmirror.com

# 安装依赖
npm install
```

**方法 B - 使用 yarn**
```bash
yarn install
```

**方法 C - 使用 pnpm（最快）**
```bash
pnpm install
```

### 步骤 3：启动开发服务器
```bash
npm run dev
```

### 步骤 4：访问网站
打开浏览器访问：http://localhost:3000

---

## 方式 2：直接部署到 Vercel（无需本地安装）

### 步骤 1：压缩项目
```bash
cd /Users/antony/Desktop/cc1
zip -r my-app-deploy.zip my-app -x "node_modules/*" ".next/*"
```

### 步骤 2：上传到 GitHub
1. 创建 GitHub 仓库
2. 上传项目文件
3. 等待自动部署（Vercel 会自动检测）

### 步骤 3：一键部署
访问 https://vercel.com/new 并导入 GitHub 仓库

---

## 方式 3：使用 Docker（高级用户）

创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

构建并运行：
```bash
docker build -t pergola-website .
docker run -p 3000:3000 pergola-website
```

---

## 项目已包含的功能

✅ 完整的首页（Hero + 特点 + 产品 + 评价 + B2B）  
✅ 产品详情页  
✅ 购物车功能  
✅ 响应式设计  
✅ SEO 优化  

## 需要替换的内容

1. **联系信息** - 修改 `ContactForm.tsx` 中的 WhatsApp 和邮箱
2. **产品图片** - 替换 Unsplash 链接为真实产品图
3. **Shopify 连接** - 按 README.md 说明接入真实 API

---

遇到问题？请查看 `README.md` 获取详细文档。
