export async function AsyncComp() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  console.log({ response })

  const todo = await response.json()

  return (
    <div>
      <h2 className="text-gray-200">AsyncComp</h2>

      <p className="text-gray-200">title: {todo.title}</p>
    </div>
  )
}