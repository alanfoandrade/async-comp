'use client'

import { useEffect, useState } from "react"

export function NormalComp() {

  const [todoTitle, setTodoTitle] = useState<string | null>(null)

  useEffect(() => {
    async function loadTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

      console.log({ response })

      const todo = await response.json()

      setTodoTitle(todo.title)
    }

    loadTodos();
  }, [])

  return (
    <div>
      <h2 className="text-gray-200">NormalComp</h2>

      <p className="text-gray-200">title: {todoTitle}</p>
    </div>
  )
}