# Umovies — Modern Movie Streaming UI (React + Vite)

Umovies is a modern, fast, and clean movie‑streaming interface built using **React**, **Vite**, and **React Router**.  
It features a responsive movie library, built‑in video player, download options, and multiple pages including Login, Register, About, ToS, and Movies.

This project is designed to be lightweight, modular, and easy to extend.

---

## 📌 Features

- Movie Library with streaming and download options  
- Built‑in responsive HTML5 video player  
- Multi‑page navigation using React Router  
- Clean UI with CSS Modules  
- Reusable header and footer  
- Fast development environment powered by Vite  

---

## 📁 Project Structure

```
umovies/
├── index.html
├── index.jsx
├── index.module.css
├── public/
├── src/
│   ├── main.jsx
│   ├── assets/
│   ├── pages/
│   │   ├── about/
│   │   │   ├── about.jsx
│   │   │   └── about.module.css
│   │   ├── login/
│   │   │   ├── login.jsx
│   │   │   └── login.module.css
│   │   ├── register/
│   │   │   ├── register.jsx
│   │   │   └── register.module.css
│   │   ├── Movies/
│   │   │   ├── movies.jsx
│   │   │   └── movies.module.css
│   │   └── tos/
│   │       ├── tos.jsx
│   │       └── tos.module.css
└── package.json
```

---

## 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/umovies.git
cd umovies
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173/
```

---

## 🔗 Routing Overview

Defined in `src/main.jsx`:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />
    <Route path="/tos" element={<Tos />} />
    <Route path="/movies" element={<Movies />} />
  </Routes>
</BrowserRouter>
```

---

## 🎬 Movie Player

The Movies page includes:

- Responsive HTML5 video player  
- Dynamic “Now Playing” title  
- Stream and download buttons  
- State‑based movie switching  

---

## 🚀 Deploying to Render

Render supports Vite apps easily.  
Follow these steps:

### 1. Create a `build` script in `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 2. Push your project to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. Go to Render → New → Static Site

Set these values:

| Setting | Value |
|--------|--------|
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | 18+ |
| **Root Directory** | (leave empty) |

### 4. Add this file for routing support  
Create:

```
public/_redirects
```

Inside it:

```
/*    /index.html   200
```

This ensures React Router works on Render.

### 5. Deploy  
Render will build and host your site automatically.

---

## 📄 License

This project is for educational and personal use.  
You may modify or extend it as needed.

---

## 👤 Author

Created by **BD1493**  
🎥 Movies will not work due to storage and copy-right issues.

