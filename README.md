
# 📁 myPortfolio

A basic, fully responsive portfolio website built with modern web optimization techniques to improve performance, accessibility, and user experience.

## 🚀 Features

- Responsive HTML, CSS, and JavaScript-based layout
- **Progressive Web App (PWA)** ready:
  - `manifest.webmanifest` configured
  - Service Worker for offline caching
- **Image optimization** using Gulp and imagemin plugins
- **CSS and JS minification** for faster load times
- **CDN** usage for scalable and fast-loading icons
- **Image sprite** for social media icons
- **Live reload** enabled via Gulp (optional via `gulp-connect`)

---

## 🛠️ Web Optimization Techniques Implemented

- ✅ Implemented **Service Worker** to enable offline capabilities
- ✅ Converted project into a **Progressive Web App (PWA)**
- ✅ Loaded **CDN-hosted icons** for efficient delivery
- ✅ Created **image sprite** for social media icons to reduce HTTP requests
- ✅ **Optimized image sizes** using `imagemin`, `mozjpeg`, `pngquant`, and `svgo`

---

## ⚙️ Gulp Setup & Build Process

This project uses Gulp to automate development and optimization tasks.

### 🔧 Step 1: Initialize Project

```bash
npm init -y
```

### 📦 Step 2: Install Dependencies

```bash
npm install --save-dev gulp gulp-cli gulp-sass sass gulp-clean-css gulp-uglify gulp-imagemin imagemin-mozjpeg imagemin-pngquant imagemin-svgo gulp-rename gulp-htmlmin gulp-connect
```

### 📂 Step 3: Gulp Configuration

Set up your tasks in `gulpfile.js` to handle:
- CSS/JS minification
- Image optimization
- HTML minification
- File watching
- Live reloading
- Asset copying

---

## 🖼️ Screenshot

> _Add a screenshot here to showcase your portfolio interface_

```
![Portfolio Screenshot](screenshots/portfolio-preview.png)
```

---

## 📁 Folder Structure

```
myPortfolio/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── favicon/
│
├── dist/               # Production build output
├── index.html
├── site.webmanifest
├── service-worker.js
├── gulpfile.js
├── package.json
└── .gitignore
```

---

## 📦 Build Instructions

To build and watch the project:

```bash
npx gulp
```

The optimized output will be generated in the `dist/` directory.

---

## 📜 License

This project is licensed under the MIT License.
