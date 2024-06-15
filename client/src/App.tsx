import { useState, useEffect } from "react";
import Tasks from "./components/Tasks";

interface TaskProps {
  _id: string;
  title: string;
  description?: string; // Optional description
  status: "pending" | "completed";
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = async () => {
    try {
      const newTask: TaskProps = {
        _id: Date.now().toString(),
        title: taskTitle,
        description: taskDescription,
        status: "pending",
      };

      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        console.log(new Error("Failed to add task"));
      }

      // Update local state if needed (e.g., if your backend returns the new task with an ID)
      const data = await response.json();
      setTasks([...tasks, data]); // Or adjust based on your API's response

      setTaskTitle("");
      setTaskDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task.");
      }

      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
      // Handle errors, e.g., show an error message to the user
    }
  }

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tasks");
        if (!response.ok) {
          console.log(new Error("Failed to fetch tasks"));
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

    fetchTasks().catch((error) => console.error(error));
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
              value={taskTitle}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Add todo"
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="">
            <button className="bg-blue-600 text-white p-2 rounded w-full px-4 hover:bg-blue-700" onClick={addTask}>
              Add
            </button>
          </div>
        </div>
        <div className="mt-6">
          <ul>
            <Tasks tasks={tasks} onDelete={deleteTask}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
