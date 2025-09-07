// src/App.jsx
function App() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Tailwind v4.1 + React
      </h1>
      <p className="text-lg text-gray-700 text-justify">
        Это простой пример страницы с использованием TailwindCSS версии 4.1 без `tailwind.config.js`.
        Все базовые стили заданы в index.css с помощью директивы `@apply` и `@import "tailwindcss";`.
      </p>
    </div>
  )
}

export default App
