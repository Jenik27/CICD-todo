import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";

interface TaskProps {
  id: number;
  title: string;
  description?: string; // Optional description
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError("Error fetching tasks");
        console.error("Error fetching tasks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <h1 className="text-center bg-blue-600 font-bold text-3xl py-6 text-white">
        Todo app
      </h1>
      <div className="container mx-auto">
        <div className="flex gap-2 py-6 items-center">
          <div className="">
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Add todo"
            />
          </div>
          <div className="">
            <button className="bg-blue-600 text-white p-2 rounded w-full px-4 hover:bg-blue-700">
              Add
            </button>
          </div>
        </div>
        <div className="mt-6">
          <ul>
            <Tasks tasks={tasks} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
