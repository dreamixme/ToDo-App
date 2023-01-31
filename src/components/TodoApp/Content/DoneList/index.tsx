import { MTaskDataModel } from '../../../../models/todo/DataModel';
import CardTask from '../../Card';
import { Grid } from '@mui/material';

type IDoneListProps = {
  doneList: MTaskDataModel[];
  setTaskItem: (task: MTaskDataModel) => void;
  setOpenDrawer: (openDrawer: boolean) => void;
};

const DoneList = (props: IDoneListProps) => {
  const { doneList, setOpenDrawer, setTaskItem } = props;

  return (
    <>
      <Grid item lg={4} className="bg-red-700">
        {doneList.map((task: MTaskDataModel, index: number) => {
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
      </Grid>
    </>
  );
};

export default DoneList;
