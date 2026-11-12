# 💍 Viah - Luxury Wedding Website & E-Card

A bespoke, mobile-first wedding invitation website and digital e-card crafted with love. Built to be lightweight, responsive, and deployable for **100% free** with zero hosting fees.

---

## ✨ Features Included

- ✉️ **3D Wax Seal Envelope Experience**: Tap the royal wax seal to unlock the invitation with 3D folding animations and celebration confetti.
- 🎵 **Interactive Wedding Music Player**:
  - Automatically plays romantic background music when the guest opens the invitation (bypassing browser autoplay blocks cleanly).
  - Floating vinyl record widget with play/pause, next track, and soundwave equalizers.
  - Pre-configured playlist for **"Aaj Se Teri"**, **"Punjabi Wedding Song"**, and traditional wedding melodies.
  - In-browser synthesized audio fallback so music *always* plays even offline or if files are missing!
- ⏳ **Live Countdown Timer**: Real-time days, hours, minutes, and seconds ticking down to the big day.
- 🌸 **Falling Rose & Marigold (Genda Phool) Petals**: Smooth 60fps canvas animation with toggle button to save battery.
- 📅 **Ceremonies & Itinerary**:
  - Detailed cards for Haldi, Sangeet/Jaggo, Anand Karaj (Wedding), and Grand Reception.
  - One-tap **"Add to Google Calendar"** button for each function.
  - One-tap **"Open Google Maps"** navigation button directly to each venue.
- 🗺️ **Venue Guide & Interactive Map**: Embedded map view and directions for guests.
- 📱 **WhatsApp RSVP Generator**: Guests fill their details and click one button to send a formatted RSVP directly to the family on WhatsApp!
- 💌 **Digital Blessings Wall / Guestbook**: Live wishes board with confetti effects saved in local storage.
- 📸 **Moments Gallery & Our Story Timeline**: Romantic story checkpoints and photo grid.

---

## 🎯 How to Customize in 2 Minutes (`config.js`)

You **do not** need to edit any complex HTML or CSS! Everything is controlled inside `config.js`:

1. Open `config.js` in any text editor (Notepad, VS Code, etc.).
2. Change the names, date, and city:
   ```javascript
   bride: { firstName: "Simran", fullName: "Simran Kaur", ... },
   groom: { firstName: "Amanpreet", fullName: "Amanpreet Singh", ... },
   targetDate: "2026-12-18T10:00:00", // Your wedding date for countdown
   city: "Chandigarh, India"
   ```
3. Update the venue addresses and Google Maps links under `events: [...]`.
4. Update the WhatsApp number under `rsvp.whatsappNumber`.
5. Save the file and refresh your browser!

---

## 🎶 How to Add "Aaj Se Teri" & "Punjabi Wedding Song"

1. Copy your MP3 song files:
   - Name one `aaj-se-teri.mp3` and place it in `assets/audio/`
   - Name the other `punjabi-wedding-song.mp3` and place it in `assets/audio/`
2. That's it! `config.js` is already pre-configured to look for those files in `assets/audio/`.

*(Note: High quality royalty-free traditional wedding melodies are already included and working out of the box!)*

---

## 🚀 How to Host 100% Free

### Option 1: Netlify Drop (Easiest - takes 15 seconds)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop this whole `Viah` folder onto the web page.
3. You immediately get a live link like `https://simran-aman-wedding.netlify.app` that you can share with all your friends and family!

### Option 2: GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repository settings, go to **Pages** -> Source: **Deploy from a branch (main)**.
3. Your site will be live at `https://yourusername.github.io/viah`.

### Option 3: Vercel
1. Install or open [vercel.com](https://vercel.com).
2. Import the folder/repository and click **Deploy**.

---

## 💻 Local Preview

Simply double-click `index.html` to open it in any web browser, or run:
```bash
python -m http.server 8000
```
and visit `http://localhost:8000` in your browser.
