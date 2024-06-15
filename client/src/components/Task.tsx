interface TaskProps {
  _id: string;
  title: string;
  description?: string; // Optional description
  status: "pending" | "completed";
}

const Task = ({ task, onDelete }: { task: TaskProps, onDelete: (id: string) => void }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-300">
      <span>{task.title}</span>
      <div className="flex gap-2">
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Edit
        </button>
        <button className="bg-red-600 text-white p-2 rounded hover:bg-red-700" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
