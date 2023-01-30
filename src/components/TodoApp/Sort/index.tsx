import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MenuItem, MenuList, Popover, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { MTaskDataModel } from '../../../models/todo/DataModel';

type ISortTaskProps = {
  setTodoList: (todoList: MTaskDataModel[]) => void;
  todoList: MTaskDataModel[];
};

const SortTask = (props: ISortTaskProps) => {
  const { setTodoList, todoList } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onClickSortList = (by: string) => {
    if (todoList?.length !== 0) {
      const sorted = todoList.sort((a: any, b: any) => (a[by] > b[by] ? 1 : -1));
      setTodoList(sorted);
      handleClose();
    } else handleClose();
  };

  return (
    <>
      <div
        className="flex flex-col relative cursor-pointer mb-2"
        aria-describedby={id}
        onClick={handleClick}
      >
        <ArrowDropUpIcon className="text-white" fontSize={'large'} />
        <ArrowDropDownIcon className="absolute top-1/4 text-white" fontSize={'large'} />
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper className="text-right bg-white">
          <MenuList className="text-gray-900 border border-gray-200 shadow-xl rounded-lg p-2">
            <MenuItem
              className=" text-right rounded-md py-2 hover:bg-lightPurple text-red-700"
              onClick={() => onClickSortList('priority')}
            >
              <Typography className="text-md" variant="inherit">
                بر اساس اولویت
              </Typography>
            </MenuItem>

            <MenuItem
              className="flex justify-end rounded-md py-2 hover:bg-lightPurple text-red-700"
              onClick={() => onClickSortList('deadline')}
            >
              <Typography className="text-md" variant="inherit">
                بر اساس زمان سپری
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>
    </>
  );
};

export default SortTask;
