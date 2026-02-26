<div align="center">

# Typing Speed Test

**A sleek, real-time typing test built with React**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

---

## Features

### Reference Text

- A reference sentence is displayed on screen for the user to type
- Texts are hardcoded directly in the application
- A random sentence is selected at the start of each new game

### Input Field

- A text input allows the user to type freely
- Pressing **Space** validates the current word and moves to the next
- The input field resets automatically after each word

### Real-time Comparison

- Each character is compared against the expected text in real time
- Each word is classified as:
  - **Correct** — typed without any mistake
  - **Incorrect** — contains at least one error
  - **Not yet typed** — waiting to be entered
- The current word is visually highlighted at all times

### Timer

- Each game lasts exactly **60 seconds**
- The countdown starts on the **first keystroke**
- The game ends automatically when time runs out

### End of Game

- Input is locked once time is up
- A summary screen displays:
  - Total characters typed
  - Number of correct words
  - Number of incorrect words

---

## Extended Features

| Feature             | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| **Typing Speed**    | Calculates your speed in characters per second                      |
| **Accuracy**        | Displays your accuracy as a percentage                              |
| **Visual Feedback** | Color-coded words (correct / incorrect) with current word highlight |
| **Replay Mode**     | A "New Game" button fully resets the app state                      |

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (recent version) — or [Bun](https://bun.sh/) as an alternative

### Clone the repository

```bash
git clone https://github.com/PerretWilliam/typefast.git
cd typefast
```

### Install dependencies

```bash
# With npm
npm install

# Or with Bun
bun install
```

---

## Usage

### Development mode

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the build

```bash
npm run preview
```

---

## How to Play

1. **Launch** the app in development mode
2. **Read** the reference text displayed on screen
3. **Start typing** — the timer begins on your first keystroke
4. **Press Space** to validate each word and move to the next
5. **Keep going** until the 60 seconds are up — input will lock automatically
6. **Check your stats** in the end-of-game summary
7. **Click "New Game"** to play again with a fresh sentence

---

## Author

Made by [William Perret](https://william-perret.fr)

[Website](https://william-perret.fr) · [GitHub](https://github.com/PerretWilliam) · [LinkedIn](https://www.linkedin.com/in/william-perret-7102b7327) · [Instagram](https://www.instagram.com/williamprrt/profilecard/?igsh=MWoza3kxbXpybmhybQ==) · [Buy Me a Coffee](https://buymeacoffee.com/perretwilliam)
