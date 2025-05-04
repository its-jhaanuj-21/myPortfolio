
# 📁 myPortfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript, optimized for performance, offline access, and scalability.

## 🚀 Features

- ✅ Fully responsive design
- ✅ **Progressive Web App (PWA)** with service worker and manifest
- ✅ **Image optimization** via Gulp and `imagemin`
- ✅ **CSS & JS minification** for fast loading
- ✅ **Font subsetting** to reduce font file size
- ✅ **Image sprite** for social icons to reduce HTTP requests
- ✅ Live reload development server (optional)

---

## 🔗 Links

- 🌐 Live Demo: [View Portfolio](https://my-portfolio-amber-nine-27.vercel.app/)
- 📬 Contact: [Email Me](mailto:anujjha2106@gmail.com)
- 💼 LinkedIn: [Anuj Kumar Jhaa](https://www.linkedin.com/in/itsjhaanuj21/)

---

## 🖼️ Screenshot
![Screenshot_4-5-2025_41559_my-portfolio-amber-nine-27 vercel app](https://github.com/user-attachments/assets/cef96e95-a1f9-4625-9279-14eab7a9855d)

> _Screenshot of the Portfolio_

---

## 📁 Folder Structure

```
myPortfolio/
│
├── assets/
│   ├── css/               # Stylesheets
│   ├── js/                # Scripts (with SW registration)
│   ├── fonts/             # Subset fonts (woff2)
│   ├── images/            # Optimized images
│   └── favicon/           # Generated favicons
│
├── dist/                  # Optimized build output
├── index.html
├── site.webmanifest       # PWA manifest
├── service-worker.js      # Custom Service Worker
├── gulpfile.js
├── charset.txt            # Used for font subsetting
└── .gitignore
```

---

## ⚙️ Build Process Using Gulp

### 🔧 Step 1: Initialize Project

```bash
npm init -y
```

### 📦 Step 2: Install Dev Dependencies

```bash
npm install --save-dev gulp gulp-cli gulp-sass sass gulp-clean-css gulp-uglify gulp-imagemin imagemin-mozjpeg imagemin-pngquant imagemin-svgo gulp-rename gulp-htmlmin gulp-connect
```

### ⚙️ Step 3: Create `gulpfile.js`

Set up tasks for:

- HTML minification
- SCSS → CSS compilation and minification
- JS uglification
- Image compression
- Live server and file watching

---

## 🛡️ Progressive Web App (PWA)

### 🗂️ Files

- `site.webmanifest` defines PWA metadata and icons.
- `service-worker.js` handles offline caching.
- Service worker is registered in `assets/js/script.js`.

### 🌐 How to Test

1. Open Chrome DevTools → Lighthouse → Check "Progressive Web App"
2. Run audit.
3. You should see a "PWA ready" green score.
4. Try offline mode to verify caching works.

---

## 🔠 Font Subsetting Optimization

To reduce font file size, only necessary characters are retained using `pyftsubset` from the [fonttools](https://github.com/fonttools/fonttools) library.

### 🧰 Tools Required

```bash
pip install fonttools brotli zopfli
```

### 📜 Steps to Subset Fonts

#### 1. Create `charset.txt` manually

Create a file named `charset.txt` in your root folder and paste the following character set:

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
.,:;!?()[]{}"'“”‘’@#$%&*-+=_/\
<>=~`^|€
```

#### 2. Subset the fonts:

```bash
pyftsubset assets/fonts/segoeui.woff --text-file=charset.txt --flavor=woff2 --output-file=assets/fonts/segoeui-subset.woff2 --with-zopfli
pyftsubset assets/fonts/segoeuib.woff --text-file=charset.txt --flavor=woff2 --output-file=assets/fonts/segoeuib-subset.woff2 --with-zopfli
```

#### 3. Reference in `styles.css`:

```css
@font-face {
  font-family: 'SegoeUI';
  src: url('../fonts/segoeui-subset.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'SegoeUI';
  src: url('../fonts/segoeuib-subset.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

Then use:

```css
body {
  font-family: 'SegoeUI', sans-serif;
}
```

---

## 📦 Build Instructions

Run the default Gulp tasks and watch for changes:

```bash
npx gulp
```

The output will be written to the `/dist` folder.

---

## 🧪 Development Workflow

- `npx gulp` — runs live server, watches files, and optimizes assets
- Update source files in `assets/`, then Gulp takes care of:
  - Live reload
  - CSS/JS minification
  - Image compression
  - Copying updated files to `dist/`

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

> Created and maintained by **Anuj Kumar Jhaa**
