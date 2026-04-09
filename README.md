# Hansø Pergola Website

Next.js 14 + Shopify Headless 架构的凉亭销售网站

## 项目特点

- ✅ **C端下单** - 完整的购物车和产品购买流程
- ✅ **B端询盘** - 批发客户表单（WhatsApp/邮箱联系）
- ✅ **SEO友好** - Next.js 14 SSR，Google 收录优化
- ✅ **热更新开发** - 保存即刷新，协作开发友好
- ✅ **代码简单** - React + Tailwind，易维护

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **数据源**: Shopify Storefront API (当前使用 Demo 数据)
- **部署**: Vercel (推荐)

## 本地开发

### 1. 安装依赖

```bash
cd my-app
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 热更新开发

- 修改任意文件，浏览器自动刷新
- 支持协作：你可以看到我的改动，我也可以看到你的

## 页面结构

```
/
├── /                    # 首页
├── /products/[handle]   # 产品详情页
├── /cart               # 购物车
└── #contact            # B2B询盘（Footer中）
```

## 功能模块

### C端功能
- [x] 产品展示网格
- [x] 产品详情页（变体选择、数量）
- [x] 购物车（增删改数量）
- [x] 空购物车状态
- [x] 订单结算（UI预览）

### B端功能
- [x] 批发询盘表单
- [x] 公司信息收集
- [x] 数量预估选择
- [x] 表单提交反馈

### SEO功能
- [x] 服务端渲染（SSR）
- [x] Meta 标签优化
- [x] 语义化 HTML 结构
- [x] 快速加载

## 连接到真实 Shopify

### 1. 创建 Shopify Partners 账户
- 访问 https://partners.shopify.com
- 创建 Development Store

### 2. 获取 API 凭证
- 进入 Development Store 后台
- Settings > Apps and sales channels > Develop apps
- 创建应用，获取 Storefront API access token

### 3. 配置环境变量

创建 `.env.local` 文件：

```env
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
```

### 4. 修改 lib/shopify.ts

将 Demo 数据替换为真实 API 调用：

```typescript
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    `https://${domain}/api/2024-01/graphql.json`,
    {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 10) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  priceRange {
                    minVariantPrice { amount currencyCode }
                  }
                  images(first: 1) {
                    edges { node { url } }
                  }
                }
              }
            }
          }
        `
      }),
    }
  );
  
  const json = await response.json();
  // 转换数据格式...
}
```

## 部署到 Vercel

### 方式 1: 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 方式 2: 命令行部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd my-app
vercel --prod
```

### 配置环境变量

在 Vercel Dashboard 中：
1. 进入项目 Settings
2. 添加 Environment Variables
3. 填入 Shopify 相关配置

## 自定义配置

### 修改品牌信息

编辑 `app/layout.tsx`：

```typescript
export const metadata = {
  title: '你的品牌名',
  description: '你的描述',
};
```

### 修改颜色主题

编辑 `tailwind.config.ts`：

```typescript
colors: {
  primary: '#你的主色',
  accent: '#你的强调色',
}
```

### 修改联系信息

编辑 `components/ContactForm.tsx` 和 `components/Footer.tsx`：

- WhatsApp 号码
- 邮箱地址
- 社交媒体链接

## 产品数据结构

当前使用 Demo 数据，产品包含：

```typescript
interface Product {
  id: string;
  title: string;
  handle: string;        // URL 友好名称
  description: string;
  price: number;         // 当前价格
  compareAtPrice: number; // 原价（划线价）
  image: string;         // 主图
  images: string[];      // 所有图片
  variants: Variant[];   // 变体（颜色、尺寸）
}
```

## 后续优化建议

### 高优先级
- [ ] 接入真实 Shopify API
- [ ] 添加图片懒加载
- [ ] 添加加载骨架屏
- [ ] 响应式图片优化

### 中优先级
- [ ] 添加产品评价系统
- [ ] 添加收藏功能
- [ ] 添加搜索功能
- [ ] 添加产品筛选

### 低优先级
- [ ] 多语言支持
- [ ]  dark mode
- [ ] PWA 支持
- [ ] 页面过渡动画

## 问题排查

### npm install 失败
```bash
# 使用国内镜像
npm config set registry https://registry.npmmirror.com
npm install
```

### 端口被占用
```bash
# 使用其他端口
npm run dev -- --port 3001
```

### 环境变量不生效
```bash
# 重启开发服务器
Ctrl+C
npm run dev
```

## 文件说明

```
my-app/
├── app/                    # Next.js 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── cart/
│   │   └── page.tsx       # 购物车页
│   └── products/
│       └── [handle]/
│           └── page.tsx   # 产品详情页
├── components/            # React 组件
│   ├── Header.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # 首页横幅
│   ├── Features.tsx       # 特点展示
│   ├── ProductCard.tsx    # 产品卡片
│   ├── ProductGrid.tsx    # 产品网格
│   ├── Testimonials.tsx   # 客户评价
│   ├── B2BSection.tsx     # B端询盘区块
│   └── ContactForm.tsx    # 联系表单
├── lib/
│   └── shopify.ts         # Shopify API 封装
├── public/               # 静态资源
├── next.config.js        # Next.js 配置
├── tailwind.config.ts    # Tailwind 配置
└── package.json          # 依赖
```

## 联系与支持

如有问题，请参考：
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)

---

Built with ❤️ by Kimi
