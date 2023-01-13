import { Box, Fab, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import illustration from '../../assets/image/illustration.jpg';
import TodoIcon from '../../assets/image/icon/logo.png';
import AddIcon from '@mui/icons-material/Add';
import DrawerTask from './DrawerTask';
import CardTask from './Card';
import Empty from '../../assets/image/icon/empty.png';
import { MTaskDataModel, StatusEnum } from '../../models/todo/DataModel';
import SortTask from './Sort';

const TodoApp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [tabValue, setTabValue] = useState<string>(StatusEnum.TODO);
  const [todoList, setTodoList] = useState<MTaskDataModel[]>([]);
  const [taskItem, setTaskItem] = useState<any>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const Head = (
    <div className="bg-white w-full flex justify-between ">
      <img src={illustration} className="w-24" alt="" />
      <h1 className="text-4xl mt-8 text-blue-900">ToDo App</h1>
      <img className="w-20 h-20 mr-4 mt-2" src={TodoIcon} alt="logo" />
    </div>
  );

  const TodoTabs = (
    <Box className="border-b bg-indigo-50">
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab className="w-full" value={StatusEnum.TODO} label="TODO" />
        <SortTask
          todoList={todoList}
          setTodoList={(todoList: MTaskDataModel[]) => {
            setTodoList(todoList);
            setRendered(!rendered);
          }}
        />
        <Tab className="w-full" value={StatusEnum.DOING} label="DOING" />
        <SortTask
          todoList={todoList}
          setTodoList={(todoList: MTaskDataModel[]) => {
            setTodoList(todoList);
            setRendered(!rendered);
          }}
        />
        <Tab className="w-full" value={StatusEnum.DONE} label="DONE" />
        <SortTask
          todoList={todoList}
          setTodoList={(todoList: MTaskDataModel[]) => {
            setTodoList(todoList);
            setRendered(!rendered);
          }}
        />
      </Tabs>
    </Box>
  );

  const GetTodoList = () => todoList.filter((task: MTaskDataModel) => task.status === tabValue);

  const TodoContent = (
    <div
      className="flex flex-col w-full items-center bg-pink-50 h-full p-6 rounded-lg overflow-scroll"
      style={{ height: '75vh' }}
    >
      {GetTodoList().length === 0 ? (
        <img src={Empty} className="w-1/3 mt-8" alt="" />
      ) : (
        GetTodoList().map((task: MTaskDataModel, index: number) => {
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
                setTabValue(StatusEnum.DONE);
              }}
              key={`todoList${index}`}
            />
          );
        })
      )}
    </div>
  );

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
        addTask={(task: MTaskDataModel) => setTodoList((old: any) => [...old, ...[task]])}
        updateTask={(id: number, task: MTaskDataModel) =>
          setTodoList(
            todoList.map((item: MTaskDataModel) => (item.id === id ? { ...item, ...task } : item)),
          )
        }
        deleteTask={(id: number) => setTodoList(todoList.filter((item: any) => item.id !== id))}
      />
    </div>
  );
};

export default TodoApp;
