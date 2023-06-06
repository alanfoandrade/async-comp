interface AsyncCompProps {
  isTrue: boolean;
  username: string;
}

export async function AsyncComp({ isTrue, username }: AsyncCompProps) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  const todo = await response.json()

  console.log({ isTrue, username, todoTitle: todo.title })

  return (
    <div>
      <h2 className="text-gray-200">AsyncComp</h2>

      <p className="text-gray-200">title: {todo.title}</p>
    </div>
  )
}