import { Drawer, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import Select from '../../Common/Select';
import {
  MTaskDataModel,
  PrioritySelectOption,
  StatusEnum,
  StatusSelectOption,
} from '../../../models/todo/DataModel';
import { Add, Delete, Edit } from '@mui/icons-material';
import { useEffect } from 'react';
import { convertNumbers2English } from '../../../utils/utils';

type IDrawerTaskProps = {
  openDrawer: boolean;
  closeDrawer: (openDrawer: false) => void;
  addTask: (task: MTaskDataModel) => void;
  updateTask: (id: number, task: MTaskDataModel) => void;
  deleteTask: (id: number) => void;
  taskItem: MTaskDataModel;
};

const defaultValues: any = {
  id: 0,
  title: '',
  description: '',
  priority: '',
  deadline: '',
  timeSpent: '',
  status: '',
};

const DrawerTask = (props: IDrawerTaskProps) => {
  const { openDrawer, closeDrawer, addTask, taskItem, deleteTask, updateTask } = props;
  const { id } = taskItem || {};

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({ defaultValues });

  const toggleDrawer = () => {
    closeDrawer(false);
  };

  const onSubmit = async (data: any) => {
    taskItem ? updateTask(id, data) : addTask({ ...data, id: Math.ceil(Math.random() * 10000) });
    toggleDrawer();
  };

  useEffect(() => {
    if (taskItem) {
      const { title, description, timeSpent, priority, deadline, status } = taskItem;
      setValue('title', title);
      setValue('description', description);
      setValue('timeSpent', timeSpent);
      setValue('priority', priority);
      setValue('deadline', deadline);
      setValue('status', status);
    }
  }, [taskItem]);

  const TitleInput = (
    <div className="w-full flex items-center">
      <Controller
        control={control}
        name="title"
        rules={{ required: true }}
        render={({ field: { ref, ...rest } }) => (
          <Input
            {...rest}
            fullWidth
            label="عنوان تسک"
            error={Boolean(errors?.title)}
            helperText={
              errors?.title && <span className="text-red-500"> عنوان تسک را وارد کنید</span>
            }
          />
        )}
      />
    </div>
  );

  const DescriptionInput = (
    <div className="w-full flex items-center">
      <Controller
        control={control}
        name="description"
        render={({ field: { ref, ...rest } }) => (
          <Input
            {...rest}
            fullWidth
            label="توضیحات تسک"
            error={Boolean(errors?.description)}
            helperText={
              errors?.description && <span className="text-red-500"> توضیحات تسک را وارد کنید</span>
            }
          />
        )}
      />
    </div>
  );

  const PrioritySelect = (
    <div className="w-full flex items-center">
      <Controller
        control={control}
        name="priority"
        rules={{ required: true }}
        render={({ field: { ref, ...rest } }) => (
          <Select
            {...rest}
            label="اولویت تسک"
            options={PrioritySelectOption}
            error={Boolean(errors?.priority)}
            helperText={errors?.priority && 'اولویت تسک را انتخاب کنید'}
          />
        )}
      />
    </div>
  );

  const DeadlineInput = (
    <div className="w-full flex items-center">
      <Controller
        control={control}
        name="deadline"
        rules={{ required: true }}
        render={({ field: { ref, ...rest } }) => (
          <Input
            {...rest}
            fullWidth
            label="ددلاین تسک"
            error={Boolean(errors?.deadline)}
            helperText={
              errors?.deadline && <span className="text-red-500"> توضیحات تسک را وارد کنید</span>
            }
          />
        )}
      />
    </div>
  );

  const TimeSpentInput = (
    <div className="w-full flex items-center">
      <Controller
        control={control}
        name="timeSpent"
        render={({ field: { ref, onChange, ...rest } }: any) => (
          <Input
            {...rest}
            fullWidth
            label="زمان سپری(ساعت)"
            error={Boolean(errors?.timeSpent)}
            inputProps={{ maxLength: '4' }}
            onChange={(e: any) => {
              e.target.value = convertNumbers2English(e.target.value);
              e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..?)\../g, '$1');
              onChange(e);
            }}
            helperText={
              errors?.timeSpent && <span className="text-red-500"> زمان سپری تسک را وارد کنید</span>
            }
          />
        )}
      />
    </div>
  );

  const StatusSelect = (
    <div className="w-full flex items-center">
      <Controller
        control={control}
        name="status"
        rules={{ required: true }}
        render={({ field: { ref, ...rest } }) => (
          <Select
            {...rest}
            label="وضعیت تسک"
            options={StatusSelectOption}
            error={Boolean(errors?.status)}
            helperText={errors?.status && 'وضعیت تسک را انتخاب کنید'}
          />
        )}
      />
    </div>
  );

  const ActionDrawer = (
    <div className="w-full flex items-center justify-center mt-8 gap-4 ">
      <Button
        className="w-60"
        startIcon={taskItem ? <Edit className="ml-2" /> : <Add className="ml-2" />}
        type="submit"
        text={taskItem ? 'ویرایش تسک' : 'ایجاد تسک'}
      />
      {taskItem && (
        <Button
          className="w-60 bg-red-400 text-red-400"
          startIcon={<Delete className="ml-2" />}
          variant={'outlined'}
          text="حذف"
          onClick={() => {
            deleteTask(id);
            toggleDrawer();
          }}
        />
      )}
    </div>
  );

  return (
    <Drawer
      anchor="bottom"
      open={openDrawer}
      classes={{
        paper: 'rounded-xl py-6',
      }}
      onClose={toggleDrawer}
    >
      <div className="w-full flex flex-col items-center justify-center p-4 ">
        <div className="w-full flex items-center justify-between px-4">
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>

          <Typography className="text-sm text-gray-900 mr-4">
            {taskItem
              ? ' برای آپدیت تسک فرم زیر را ویرایش کنید'
              : ' برای ایجاد تسک جدید فرم زیر را پر کنید'}
          </Typography>
        </div>

        <Grid item lg={10}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full rtl ">
            <Grid container className="mt-4 ">
              <Grid lg={4} item className="p-2 mt-2">
                {TitleInput}
              </Grid>
              <Grid lg={8} item className="p-2 mt-2">
                {DescriptionInput}
              </Grid>
              <Grid lg={6} item className="p-2 mt-2">
                {PrioritySelect}
              </Grid>
              <Grid lg={6} item className="p-2 mt-2">
                {DeadlineInput}
              </Grid>
              <Grid lg={6} item className="p-2 mt-2">
                {TimeSpentInput}
              </Grid>
              <Grid lg={6} item className="p-2 mt-2">
                {StatusSelect}
              </Grid>
            </Grid>

            {ActionDrawer}
          </form>
        </Grid>
      </div>
    </Drawer>
  );
};

export default DrawerTask;
