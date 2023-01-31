import { MTaskDataModel, StatusEnum } from '../../../../models/todo/DataModel';
import CardTask from '../../Card';
import { Grid } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import clsx from 'clsx';
import { styles } from '../../style';

type IDoingListProps = {
  doingList: MTaskDataModel[];
  setTaskItem: (task: MTaskDataModel) => void;
  setOpenDrawer: (openDrawer: boolean) => void;
};

const DoingList = (props: IDoingListProps) => {
  const { doingList, setOpenDrawer, setTaskItem } = props;

  return (
    <>
      <Droppable droppableId={StatusEnum.DOING} type="todo">
        {(provided, snapshot) => {
          return (
            <Grid
              item
              lg={4}
              className={clsx(
                'bg-blue-600',
                styles.dropperDestination,
                snapshot.isDraggingOver && styles.dropOver,
              )}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {!snapshot.isDraggingOver && (
                <div className="w-full border-r border-l border-blue-200  ">
                  {doingList.map((task: MTaskDataModel, index: number) => {
                    return (
                      <CardTask
                        task={task}
                        setTaskItem={(task: MTaskDataModel) => {
                          setTaskItem(task);
                          setOpenDrawer(true);
                        }}
                        key={`todoList${index}`}
                      />
                    );
                  })}
                </div>
              )}
              {provided.placeholder}
            </Grid>
          );
        }}
      </Droppable>
    </>
  );
};

export default DoingList;
