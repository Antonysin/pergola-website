# 图片使用指南

## 当前图片方案

项目目前使用 **Unsplash** 在线图片链接，无需本地上传：

```typescript
// lib/shopify.ts 中的示例
image: 'https://images.unsplash.com/photo-xxx?w=800&q=80'
```

## 方式一：使用本地图片（推荐正式使用）

### 步骤 1：准备图片
把图片文件放到 `public/images/` 文件夹：

```
my-app/
├── public/
│   └── images/
│       ├── product-1.jpg     # 产品主图
│       ├── product-2.jpg
│       ├── hero-bg.jpg       # 首页背景
│       └── testimonial-1.jpg # 客户头像
```

### 步骤 2：修改代码引用

把在线链接改为本地路径：

```typescript
// 原来（在线图片）
image: 'https://images.unsplash.com/photo-xxx?w=800&q=80'

// 改为（本地图片）
image: '/images/product-1.jpg'
```

## 方式二：使用图床/CDN（推荐大量图片）

### 推荐图床
1. **Cloudinary** (免费) - https://cloudinary.com
2. **AWS S3** (按量付费)
3. **阿里云 OSS** (国内访问快)

### 使用示例
```typescript
image: 'https://res.cloudinary.com/your-account/image/upload/product-1.jpg'
```

## 方式三：终端下载图片到项目

### 方法一：curl 下载单张
```bash
cd /Users/antony/Desktop/cc1/my-app/public/images

# 下载图片
curl -O "https://example.com/your-image.jpg"

# 或者指定文件名
curl -o product-1.jpg "https://example.com/image.jpg"
```

### 方法二：wget 批量下载
```bash
cd /Users/antony/Desktop/cc1/my-app/public/images

# 安装 wget（如果没有）
brew install wget

# 下载单张
wget "https://example.com/image.jpg" -O product-1.jpg

# 批量下载（按序号）
for i in {1..4}; do
  wget "https://example.com/product-$i.jpg"
done
```

### 方法三：复制本地图片
```bash
# 从桌面复制到项目
cp ~/Desktop/your-image.jpg /Users/antony/Desktop/cc1/my-app/public/images/product-1.jpg

# 或者拖拽图片到 VS Code 的 public/images 文件夹
```

## 快速替换图片脚本

创建 `download-images.sh`：

```bash
#!/bin/bash

cd /Users/antony/Desktop/cc1/my-app/public/images

# 下载产品图片（示例链接，请替换为真实图片）
curl -L -o hero-bg.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
curl -L -o product-1.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
curl -L -o product-2.jpg "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
curl -L -o product-3.jpg "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"
curl -L -o product-4.jpg "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"

echo "✅ Images downloaded!"
```

然后执行：
```bash
chmod +x download-images.sh
./download-images.sh
```

## 图片尺寸建议

| 用途 | 尺寸 | 格式 |
|------|------|------|
| 首页背景 | 1920x1080 | JPG |
| 产品主图 | 800x600 | JPG |
| 产品缩略图 | 400x300 | JPG |
| 客户头像 | 200x200 | JPG/PNG |
| Logo | 矢量 | SVG |

## 图片压缩工具

- **在线**：https://tinypng.com
- **Mac 软件**：ImageOptim
- **命令行**：
  ```bash
  brew install imagemagick
  convert input.jpg -quality 80 -resize 800x600 output.jpg
  ```

## 代码中的图片引用对比

### 在线图片（当前）
```typescript
// lib/shopify.ts
const demoProducts = [
  {
    title: 'PRO+ Pergola',
    image: 'https://images.unsplash.com/photo-xxx?w=800&q=80',
  }
];
```

### 本地图片（推荐）
```typescript
// lib/shopify.ts
const demoProducts = [
  {
    title: 'PRO+ Pergola',
    image: '/images/product-1.jpg',  // 注意前面的 /
  }
];
```

### CDN 图片（大量图片）
```typescript
const demoProducts = [
  {
    title: 'PRO+ Pergola',
    image: 'https://cdn.yourdomain.com/images/product-1.jpg',
  }
];
```

## 常见问题

### Q: 图片不显示？
检查：
1. 图片是否在 `public/images/` 目录
2. 路径是否以 `/` 开头（如 `/images/xxx.jpg`）
3. 文件名是否匹配（区分大小写）

### Q: 如何批量替换？
```bash
# 使用 sed 批量替换
cd /Users/antony/Desktop/cc1/my-app
sed -i '' 's|https://images.unsplash.com/photo-[^"]*|/images/product-1.jpg|g' lib/shopify.ts
```

### Q: 需要优化加载速度？
1. 压缩图片（TinyPNG）
2. 使用 Next.js Image 组件（自动优化）
3. 使用 WebP 格式

---

需要我帮你下载特定图片或批量替换吗？
