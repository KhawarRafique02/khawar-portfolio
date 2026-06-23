# Khawar Rafique — Portfolio

A professional portfolio website built with **Next.js 14**, **Tailwind CSS**, and deployed on **Vercel**.

## 🚀 Quick Deploy to Vercel

### Step 1: Setup on your computer
1. Download and unzip the portfolio folder
2. Open terminal/command prompt inside the folder
3. Run: `npm install`
4. Run: `npm run dev`
5. Open `http://localhost:3000` to preview

### Step 2: Upload to GitHub
1. Create a new **public** repository on GitHub (e.g. `my-portfolio`)
2. In terminal inside the project folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/KhawarRafique02/my-portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to **vercel.com** → Login with GitHub
2. Click **"Add New Project"**
3. Import your `my-portfolio` GitHub repo
4. Click **Deploy** — done! 🎉

Vercel auto-deploys every time you push to GitHub.

---

## 🛠 Customization

All content is in **one place** → `app/page.js` at the top in the DATA section:

| What to change | Where |
|---|---|
| Your projects | `PROJECTS` array |
| Your skills | `SKILLS` object |
| Work experience | `EXPERIENCE` array |
| Social links | `SOCIAL` object |
| Testimonials | `TESTIMONIALS` array |

### Add your profile photo
1. Copy your photo to the `public/` folder as `profile.jpg`
2. In `page.js`, find the About section and replace the placeholder div with:
```jsx
<img src="/profile.jpg" alt="Khawar Rafique" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
```

### Contact form (real email)
To receive messages via the contact form, sign up at **formspree.io**:
1. Create a form on formspree.io
2. Get your form URL (e.g. `https://formspree.io/f/xxxxxxxxxxx`)
3. In `handleSubmit` function, replace the `window.open(mailto...)` with a fetch call to formspree

---

## 📦 Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Lucide Icons
- Google Fonts (Space Grotesk + Inter)
- Deployed on Vercel
