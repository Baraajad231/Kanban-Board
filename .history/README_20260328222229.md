# 📋 Modern Kanban Board

A high-performance, interactive task management application built with **React 19** and **Tailwind CSS v4**. This project focuses on providing a seamless user experience for organizing workflows using advanced drag-and-drop mechanics.

---

## 🚀 Overview

This Kanban board isn't just about moving cards; it's about **performance** and **precision**. By leveraging `@dnd-kit` for physics-based movement and `Immer` for immutable state management, the application ensures that every interaction feels snappy and reliable.

### ✨ Key Features

- **Intuitive Drag & Drop:** Move tasks between columns or reorder them within the same column.
- **Empty Column Support:** A specialized "Droppable" logic allows you to move tasks into empty columns effortlessly.
- **Dynamic Task Management:** Create, edit, and delete tasks and columns in real-time.
- **Optimized State:** Uses `Immer` to handle deep state updates efficiently, preventing unnecessary re-renders.
- **Modern UI:** Styled with **Tailwind CSS v4**, featuring a clean, responsive, and accessible design.

---

## 📸 Screenshots

| Desktop View                                               | Add New Board                                                 |
| :--------------------------------------------------------- | :------------------------------------------------------------ |
| ![Main Board](./src/assets/screenshoots/screenshoot-1.png) | ![Add New Board](./src/assets/screenshoots/screenshoot-2.png) |

| Edit and Delete Board Menu                                                  | Edit Board                                                 |
| :-------------------------------------------------------------------------- | :--------------------------------------------------------- |
| ![Edit and Delete Board Menu ](./src/assets/screenshoots/screenshoot-3.png) | ![Edit Board](./src/assets/screenshoots/screenshoot-4.png) |

| Delete Board                                                  | Drag & Drop in Action                                                 |
| :------------------------------------------------------------ | :-------------------------------------------------------------------- |
| ![Delete Board ](./src/assets/screenshoots/screenshoot-5.png) | ![Drag & Drop in Action](./src/assets/screenshoots/screenshoot-6.png) |

---

## 🛠️ Tech Stack

| Technology          | Purpose                                               |
| :------------------ | :---------------------------------------------------- |
| **React 19**        | Core UI library with the latest concurrent features.  |
| **Tailwind CSS v4** | Next-generation styling with improved performance.    |
| **@dnd-kit**        | Modular drag-and-drop primitives for React.           |
| **Immer**           | Seamless immutable state management for complex data. |
| **Vite**            | Lightning-fast build tool and dev server.             |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/kanban-board.git](https://github.com/your-username/kanban-board.git)
    cd kanban-board
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 🧠 Technical Highlights

- **Collision Detection:** Utilizes `closestCorners` strategy to ensure accurate drop targets even in complex layouts.
- **State Persistence:** Architecture ready for easy integration with LocalStorage or Backend APIs.
- **Reusable Components:** Modular design with decoupled `WorkSpace`, `Column`, and `Card` components.

---

## 🤝 Contributing

Contributions are welcome! If you have a feature request or found a bug, feel free to open an issue or submit a pull request.

---
