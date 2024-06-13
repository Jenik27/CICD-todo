import Task from "./Task";

interface TaskProp {
  id: number;
  title: string;
  description?: string; // Optional description
  completed: boolean;
}

interface TasksProps {
  tasks: TaskProp[];
}

export default function Tasks({ tasks }: TasksProps) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
