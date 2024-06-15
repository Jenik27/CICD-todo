import Task from "./Task";

interface TaskProp {
  _id: string;
  title: string;
  description?: string; // Optional description
  status: "pending" | "completed";
}

type TasksProps = TaskProp[]

export default function Tasks({ tasks, onDelete }: {tasks: TasksProps, onDelete: (id: string) =>void  }) {
  return (
    <div>
      {tasks.map((task: TaskProp) => (
        <Task key={task._id} task={task} onDelete={onDelete}/>
      ))}
    </div>
  );
}
