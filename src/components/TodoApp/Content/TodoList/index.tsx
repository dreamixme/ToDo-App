import { MTaskDataModel } from '../../../../models/todo/DataModel';
import CardTask from '../../Card';
import { Grid } from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import clsx from 'clsx';
import { styles } from '../../style';

type ITodoListProps = {
  todoList: MTaskDataModel[];
  setTaskItem: (task: MTaskDataModel) => void;
  setOpenDrawer: (openDrawer: boolean) => void;
  updateTask: (id: string, task: MTaskDataModel) => void;
};

const TodoList = (props: ITodoListProps) => {
  const { todoList, setOpenDrawer, setTaskItem, updateTask } = props;

  return (
    <>
      <Grid item lg={4} className="border border-blue-300 rounded-bl-xl h-[70vh]">
        <Droppable droppableId="devices" type="todo">
          {(provided, snapshot) => {
            return (
              <div
                className={clsx(
                  'w-full py-4 mt-2',
                  styles.dropper,
                  snapshot.isDraggingOver && styles.dropOver,
                )}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todoList?.map((task: MTaskDataModel, index: number) => {
                  return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided2, snapshot2) => {
                        return (
                          <div
                            ref={provided2.innerRef}
                            {...provided2.draggableProps}
                            {...provided2.dragHandleProps}
                            className={clsx(snapshot2.isDragging && styles.dragging)}
                          >
                            <CardTask
                              task={task}
                              setTaskItem={(task: MTaskDataModel) => {
                                setTaskItem(task);
                                setOpenDrawer(true);
                              }}
                              key={`todoList${index}`}
                              updateTask={updateTask}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </Grid>
    </>
  );
};

export default TodoList;
