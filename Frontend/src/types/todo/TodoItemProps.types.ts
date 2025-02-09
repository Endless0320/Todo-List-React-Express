export default interface TodoItemPropsTypes {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onUpdate: (id: string, updatedTodo: Partial<{ title: string; completed: boolean }>) => void;
  onDelete: (id: string) => void;
  onEdit: () => void;
}