import { useRef, useState } from "react";
import StatusButton from "../components/StatusButton";

const Tasks = () => {

  type Task = {
    status: boolean;
    content: string;
  }

  const todoRef = useRef<HTMLInputElement>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className="container mx-auto flex justify-center items-center px-8 md:px-16 lg:px-24">
      <section className="w-5/6 flex flex-col gap-2">
        <div className="flex justify-between items-center gap-5">
            <input
              type="text"
              name="todo"
              id="todo"
              className="border border-gray-300 h-8 rounded-md w-full"
              ref={todoRef}
              required
            />
            <button
              className="py-2 px-4 bg-gray-300 rounded-md hover:bg-gray-900 transition-all duration-300"
              onClick={() => setTasks([...tasks, {status: false, content: todoRef.current?.value || ""}])}>Create</button>
        </div>
        <div className="mt-16 overflow-auto text-gray-900 bg-gray-100 rounded-sm grid grid-cols-5 w-full">
          <div className="p-2">Status</div>
          <div className="p-2 col-span-4">Content</div>
        </div>
        {
          tasks.map((task, index) => (
            <div className="overflow-auto rounded-sm grid grid-cols-5 items-center border-b w-full">
                <div><StatusButton status={task.status}/></div>
                <div className="col-span-2">{task.content}</div>
                <div>
                  <button
                    onClick={() => setTasks(tasks.map((t, i) => i === index ? {...t, status: true} : t))}
                    className="py-2 px-4 bg-gray-300 text-sm rounded-md hover:bg-gray-900 transition-all duration-300">Complete
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                    className="py-2 px-4 bg-gray-300 text-sm rounded-md hover:bg-gray-900 transition-all duration-300">Delete
                  </button>
                </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Tasks;