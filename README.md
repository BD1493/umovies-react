🎬 Umovies — Modern Movie Streaming UI (React + Vite)
Umovies is a clean, fast, and modern movie‑streaming interface built using React, Vite, and React Router.
It features a neon‑inspired cinematic UI, a simple movie player, download options, and multiple pages including Login, Register, About, ToS, and a full Movie Library.

This project is designed to be lightweight, responsive, and easy to extend.

🚀 Features
🎥 Movie Library
Stream movies directly in the built‑in video player

Download movies with one click

Clean grid layout with responsive design

🧭 Multi‑Page Navigation
Built using React Router, including pages for:

Home

Login

Register

About

Terms of Service & Privacy Policy

Movies

🎨 Modern UI
Neon‑themed cinematic design

CSS Modules for clean, component‑scoped styling

Reusable header + footer across pages

⚡ Powered by Vite
Fast development server

Instant HMR

Lightweight build output

📁 Project Structure
Code
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
│   └── ...
└── package.json
🛠️ Tech Stack
React 18

Vite

React Router DOM

CSS Modules

JavaScript (ES6+)

📦 Installation
Clone the repository:

bash
git clone https://github.com/BD1493/umovies-react.git
cd umovies
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
The app will be available at:

Code
http://localhost:5173/
🧩 Routing Setup
The router is defined in src/main.jsx:

jsx
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
🎬 Movie Player
The Movies page includes:

A responsive video player

Dynamic “Now Playing” title

Stream + Download buttons

State‑based movie switching

📄 License
This project is for educational and personal use.
You may modify or extend it as needed.

🤝 Contributing
Pull requests are welcome!
If you’d like to add features, improve UI, or fix bugs, feel free to fork the repo and submit a PR.

⭐ Author
BD1493  

🎥 Movies
Movies will not be played due to copy-right issues and storage problems.