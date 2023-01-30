import { MTaskDataModel } from '../../../../models/todo/DataModel';
import CardTask from '../../Card';
import { Grid } from '@mui/material';

type IDoneListProps = {
  doneList: MTaskDataModel[];
  setTaskItem: (task: MTaskDataModel) => void;
  setOpenDrawer: (openDrawer: boolean) => void;
  updateTask: (id: string, task: MTaskDataModel) => void;
};

const DoneList = (props: IDoneListProps) => {
  const { doneList, setOpenDrawer, setTaskItem, updateTask } = props;

  return (
    <>
      <Grid item lg={4} className="">
        {doneList.map((task: MTaskDataModel, index: number) => {
          return (
            <CardTask
              task={task}
              setTaskItem={(task: MTaskDataModel) => {
                setTaskItem(task);
                setOpenDrawer(true);
              }}
              key={`todoList${index}`}
              updateTask={updateTask}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default DoneList;
