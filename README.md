# REPO游戏推荐网页

## 项目描述

这是一个为游戏"REPO"设计的推荐网页，提供了两个版本：一个使用传统CSS的版本和一个使用Tailwind CSS的现代版本。该网页以简洁明了的方式向潜在玩家介绍这款黑暗反乌托邦背景下的器官回收模拟游戏。

## 两个版本

### 传统CSS版本
- 使用自定义CSS样式
- 包含简单的JavaScript交互
- 适合学习基础CSS和JavaScript

### Tailwind CSS版本 (新)
- 使用Tailwind CSS框架
- 响应式设计适配移动和桌面设备
- 使用Font Awesome图标库
- 整合Unsplash API提供的图片
- 更现代的UI/UX设计

## 特点

- 响应式设计，适应不同设备屏幕尺寸
- 暗黑/明亮模式切换功能
- 动画和交互效果增强用户体验
- 清晰的游戏核心玩法和特性介绍
- 模拟的游戏截图预览区域
- 表格和卡片式布局展示游戏特性

## 文件结构

- `index.html` - 传统CSS版本的HTML文件
- `styles.css` - 传统CSS版本的样式文件
- `script.js` - 传统CSS版本的JavaScript文件
- `tailwind-version.html` - 使用Tailwind CSS的新版本

## 如何使用

1. 克隆或下载此仓库
2. 直接在浏览器中打开index.html（传统版本）或tailwind-version.html（Tailwind版本）
3. 或者通过简单的HTTP服务器提供文件（如Python的http.server）

```bash
# 如果有Python，可以在项目目录下运行
python -m http.server
# 然后在浏览器中访问 http://localhost:8000
```

## 技术细节

### 传统CSS版本
- 纯前端实现，无需后端支持
- 使用CSS变量实现主题切换
- 使用flexbox布局实现响应式设计
- 使用localStorage保存用户主题偏好

### Tailwind版本
- 使用Tailwind CSS通过CDN引入
- 自定义Tailwind配置以匹配设计需求
- 使用Font Awesome图标库
- 通过Unsplash API引入真实图片
- 暗黑模式使用Tailwind的dark类实现

## 设计理念

该网页设计旨在通过清晰的布局和结构，一目了然地向玩家介绍游戏的核心特点和玩法，帮助他们快速了解游戏内容，同时通过视觉设计增强游戏的黑暗反乌托邦氛围。

## 许可

此项目仅用于演示目的，游戏"REPO"相关内容归原作者所有。# repogame
