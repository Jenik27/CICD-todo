import Task from "./Task";

interface TaskProp {
  id: number;
  title: string;
  description?: string; // Optional description
  completed: boolean;
}

type TasksProps = TaskProp[]

export default function Tasks({ tasks, onDelete }: {tasks: TasksProps, onDelete: (id: number) =>void  }) {
  return (
    <div>
      {tasks.map((task: TaskProp) => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </div>
  );
}
