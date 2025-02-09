import { Card, CardContent, Checkbox, Typography, Button } from "@mui/material";
import TodoItemPropsTypes from "../../types/todo/TodoItemProps.types";

export const TodoItem = ({ id, title, description, completed, onUpdate, onDelete, onEdit }: TodoItemPropsTypes) => {
  return (
    <Card>
      <CardContent style={{ display: 'flex', alignItems: 'center', padding: '8px', gap: '8px' }}>
        <Checkbox checked={completed} onChange={() => onUpdate(id, { completed: !completed })} />
        <div style={{ flex: 1 }}>
          <Typography variant="h6" component="span" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </div>
        <Button variant="contained" color="primary" onClick={onEdit} style={{ marginRight: '8px' }}>Edit</Button>
        <Button variant="contained" color="error" onClick={() => onDelete(id)}>Delete</Button>
      </CardContent>
    </Card>
  );
};