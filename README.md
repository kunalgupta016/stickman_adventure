# 🎮 Stickman Adventure

An interactive stickman story game with **11 unique adventures**, branching choices, multiple endings, and a level-based progression system.

![HTML5](https://img.shields.io/badge/HTML5-Game-orange) ![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### 🗺️ 11 Unique Stories
| # | Story | Theme |
|---|-------|-------|
| 1 | **The Grand Heist** | Bank robbery & escape |
| 2 | **Prison Break** | Escape from maximum security |
| 3 | **Area 51 Infiltration** | Alien secrets & government labs |
| 4 | **Survival Island** | Shipwreck & wilderness survival |
| 5 | **Gladiator Arena** | Ancient Rome combat |
| 6 | **Neon Shadows** | Cyberpunk corporate espionage |
| 7 | **Station Zero** | Space station emergency |
| 8 | **Operation Phantom** | Spy thriller & double agents |
| 9 | **Throne of Ashes** | Medieval war & kingdoms |
| 10 | **Whispers of Blackwood Manor** | Horror mansion mystery |
| ★ | **Fracture of Realities** | Multiverse finale (unlocks after completing all 10) |

### 🎯 Game Systems
- **🔊 Sound Effects** — Synthetic Web Audio API sounds (click, success, fail, unlock, achievement)
- **📊 Stats Tracking** — Deaths, endings discovered, best completion time per story
- **🏆 25 Achievements** — "Master Thief", "Dragon Slayer", "Multiverse Savior", and more
- **✨ SVG Animations** — Flickering torches, glowing portals, pulsing energy
- **📜 Story Recap** — View your journey timeline after each ending
- **🔒 Level Progression** — Complete each story to unlock the next

### 🎨 Visual Style
- Hand-drawn stickman SVG illustrations (10,000+ lines of art)
- Brutalist/retro game aesthetic with neon accents
- Smooth Framer Motion animations & transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone https://github.com/kunalgupta016/stickman-adventure.git
cd stickman-adventure
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Production Build
```bash
npm run build
```
Output goes to `dist/`

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy — Vite is auto-detected

### Game Platforms
The game includes **CrazyGames SDK** integration for monetization.

| Platform | Status |
|----------|--------|
| Vercel | ✅ Ready |
| CrazyGames | ✅ SDK Integrated |
| GamePix | ✅ Upload ZIP |
| Itch.io | ✅ Upload ZIP |
| Poki | ⚠️ Needs Poki SDK |

**ZIP package:** Run `npm run build`, then zip the `dist/` folder.

## 🛠️ Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool
- **Framer Motion** — Animations
- **Tailwind CSS 4** — Styling
- **Web Audio API** — Sound effects
- **CrazyGames SDK** — Game platform integration
- **localStorage** — Progress persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── AchievementPopup.jsx  # Toast notification for achievements
│   ├── ChoiceButton.jsx      # Interactive choice buttons
│   ├── FailScreen.jsx        # Death/fail screen
│   ├── MainMenu.jsx          # Story selection + stats + achievements
│   ├── Scene.jsx             # Main game scene renderer
│   ├── StickmanAsset.jsx     # 10,000+ lines of SVG illustrations
│   └── StoryRecap.jsx        # Journey timeline overlay
├── context/
│   └── GameContext.jsx       # Global state management
├── data/
│   ├── achievements.js       # 25 achievement definitions
│   └── story.js              # All 11 story scripts
├── utils/
│   ├── CrazyGamesSDK.js      # Game platform SDK wrapper
│   └── SoundManager.js       # Web Audio API sound engine
├── App.jsx
├── index.css
└── main.jsx
```

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

**Made with ❤️ and stickmen**
