import { Box, Fab, Grid, Typography } from '@mui/material';
import React, { useState} from 'react';
import illustration from '../../assets/image/illustration.jpg';
import TodoIcon from '../../assets/image/icon/logo.png';
import AddIcon from '@mui/icons-material/Add';
import DrawerTask from './DrawerTask';
import CardTask from './Card';
import { MTaskDataModel, StatusEnum } from '../../models/todo/DataModel';
import SortTask from './Sort';


const TodoApp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [rendered, setRendered] = useState(false);

  const [todoList, setTodoList] = useState<MTaskDataModel[]>([]);
  // const [doingList, setDoingList] = useState<MTaskDataModel[]>([]);
  // const [doneList, setDoneList] = useState<MTaskDataModel[]>([]);
  const [taskItem, setTaskItem] = useState<any>(null);

  const Head = (
    <div className="bg-white w-full flex justify-between">
      <img src={illustration} className="w-24" alt="" />
      <h1 className="text-4xl mt-8 text-blue-900">ToDo App</h1>
      <img className="w-20 h-20 mr-4 mt-2" src={TodoIcon} alt="logo" />
    </div>
  );

  const TodoTabs = (
    <Box className="border-b border-blue bg-indigo-50 ">
      <Grid container>
        <Grid item lg={4} className="flex items-center justify-center py-6">
          <Typography className="text-blue-900 font-bold">TODO</Typography>
          <SortTask
            todoList={todoList}
            setTodoList={(todoList: MTaskDataModel[]) => {
              setTodoList(todoList);
              setRendered(!rendered);
            }}
          />
        </Grid>
        <Grid
          item
          lg={4}
          className="flex items-center justify-center border-r border-l border-blue  py-6"
        >
          <Typography className="text-blue-900 font-bold">DOING</Typography>
          <SortTask
            todoList={todoList}
            setTodoList={(todoList: MTaskDataModel[]) => {
              setTodoList(todoList);
              setRendered(!rendered);
            }}
          />
        </Grid>
        <Grid item lg={4} className="flex items-center justify-center py-6">
          <Typography className="text-blue-900 font-bold">DONE</Typography>
          <SortTask
            todoList={todoList}
            setTodoList={(todoList: MTaskDataModel[]) => {
              setTodoList(todoList);
              setRendered(!rendered);
            }}
          />
        </Grid>
      </Grid>

      {/*<Tabs value={tabValue} onChange={handleTabChange} centered>*/}
      {/*  <Tab className="w-full" value={StatusEnum.TODO} label="TODO" />*/}

      {/*  <Tab className="w-full" value={StatusEnum.DOING} label="DOING" />*/}

      {/*  <Tab className="w-full" value={StatusEnum.DONE} label="DONE" />*/}

      {/*</Tabs>*/}
    </Box>
  );

  const GetTodoList = (status: StatusEnum ) => todoList.filter((task: MTaskDataModel) => task.status === status);

  const TodoContent = (
    <div
      className="flex flex-col w-full items-center bg-indigo-50 h-full border  rounded-lg overflow-scroll"
      style={{ height: '75vh' }}
    >
      <Grid container>
        <Grid item lg={4}>
          {GetTodoList(StatusEnum.TODO).map((task: MTaskDataModel, index: number) => {
            return (
              <CardTask
                task={task}
                setTaskItem={(task: MTaskDataModel) => {
                  setTaskItem(task);
                  setOpenDrawer(true);
                }}
                updateTask={(id: number, task: MTaskDataModel) => {
                  setTodoList(
                    todoList.map((item: MTaskDataModel) =>
                      item.id === id ? { ...item, ...task } : item,
                    ),
                  );
                }}
                key={`todoList${index}`}
              />
            );
          })}
        </Grid>

        <Grid
          item
          lg={4}
          className="flex items-start justify-center border-r border-l border-blue-200 "
        >
          {GetTodoList(StatusEnum.DOING).map((task: MTaskDataModel, index: number) => {
            return (
              <CardTask
                task={task}
                setTaskItem={(task: MTaskDataModel) => {
                  setTaskItem(task);
                  setOpenDrawer(true);
                }}
                updateTask={(id: number, task: MTaskDataModel) => {
                  setTodoList(
                    todoList.map((item: MTaskDataModel) =>
                      item.id === id ? { ...item, ...task } : item,
                    ),
                  );
                }}
                key={`todoList${index}`}
              />
            );
          })}
        </Grid>

        <Grid item lg={4} className="flex items-start justify-center ">
          {GetTodoList(StatusEnum.DONE).map((task: MTaskDataModel, index: number) => {
            return (
              <CardTask
                task={task}
                setTaskItem={(task: MTaskDataModel) => {
                  setTaskItem(task);
                  setOpenDrawer(true);
                }}
                updateTask={(id: number, task: MTaskDataModel) => {
                  setTodoList(
                    todoList.map((item: MTaskDataModel) =>
                      item.id === id ? { ...item, ...task } : item,
                    ),
                  );
                }}
                key={`todoList${index}`}
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );

  const AddTask = (task: MTaskDataModel) =>  setTodoList((old: any) => [...old, ...[task]]);

  const UpdateTask = (id: number, task: MTaskDataModel) => setTodoList(
      todoList.map((item: MTaskDataModel) => (item.id === id ? { ...item, ...task } : item)),
  );

  const DeleteTask = (id: number) =>  setTodoList(todoList.filter((item: any) => item.id !== id));

  return (
    <div className="w-full flex flex-col items-center ">
      {Head}

      <div className="w-2/3">
        {TodoTabs}

        {TodoContent}
      </div>

      <div className="absolute right-8 bottom-8">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            setOpenDrawer(true);
            if (taskItem) setTaskItem(null);
          }}
        >
          <AddIcon />
        </Fab>
      </div>

      <DrawerTask
        openDrawer={openDrawer}
        closeDrawer={setOpenDrawer}
        taskItem={taskItem}
        addTask={AddTask}
        updateTask={UpdateTask}
        deleteTask={DeleteTask}
      />
    </div>
  );
};

export default TodoApp;
