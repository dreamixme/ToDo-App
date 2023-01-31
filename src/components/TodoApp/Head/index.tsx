import illustration from "../../../assets/image/illustration.jpg";
import TodoIcon from "../../../assets/image/icon/logo.png";
import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import SortTask from "../Sort";
import {MTaskDataModel} from "../../../models/todo/DataModel";


type IHeadAppProps = {
  setTodoList: (todoList: MTaskDataModel[]) => void;
  setRendered: () => void;
  todoList: MTaskDataModel[];
}


const HeadApp = (props: IHeadAppProps) => {

  const {todoList, setTodoList, setRendered} = props;

  return (
    <>
      <div className="bg-white w-full flex justify-between">
        <img src={illustration} className="w-24" alt="" />
        <h1 className="text-4xl mt-8 text-blue-900">ToDo App</h1>
        <img className="w-20 h-20 mr-4 mt-2" src={TodoIcon} alt="logo" />
      </div>

      <Box className="border-b border-blue bg-indigo-50 w-2/3 ">
        <Grid container>
          <Grid item lg={4} className="flex items-center justify-center py-6">
            <Typography className="text-blue-900 font-bold">TODO</Typography>
            <SortTask
                todoList={todoList}
                setTodoList={(todoList: MTaskDataModel[]) => {
                  setTodoList(todoList);
                  setRendered();
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
                  setRendered();
                }}
            />
          </Grid>
          <Grid item lg={4} className="flex items-center justify-center py-6">
            <Typography className="text-blue-900 font-bold">DONE</Typography>
            <SortTask
                todoList={todoList}
                setTodoList={(todoList: MTaskDataModel[]) => {
                  setTodoList(todoList);
                  setRendered();
                }}
            />
          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default HeadApp;
