import { Chip, IconButton, Typography } from '@mui/material';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { MTaskDataModel, StatusEnum } from '../../../models/todo/DataModel';
import ClearAllOutlinedIcon from '@mui/icons-material/ClearAllOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import StopIcon from '@mui/icons-material/Stop';
import { useState } from 'react';
import { useCountdown } from '../../../utils/countdown';

type ICardTaskProps = {
  task: MTaskDataModel;
  setTaskItem: (task: MTaskDataModel) => void;
  updateTask: (id: number, task: MTaskDataModel) => void;
};

type TaskStateEnum = 'PlAY' | 'PAUSE' | 'STOP';

const CardTask = (props: ICardTaskProps) => {
  const { task, setTaskItem, updateTask } = props;
  const { title, description, priority, timeSpent, status, id } = task;
  const [timeSpentState, setTimeSpentState] = useState<TaskStateEnum>('PlAY');

  const [, minutes, seconds] = useCountdown(parseInt(timeSpent, 10) * 60 * 60 * 60, timeSpentState);
  const hours = parseInt(timeSpent, 10) - 1;

  return (
    <div className="w-full flex items-center justify-center">
      <div
          onClick={() => setTaskItem(task)}
          className="w-11/12 flex flex-col justify-start shadow-xl bg-white hover:bg-blue-100 mt-4 rounded-lg p-4 border cursor-pointer "
      >
        <div className="flex items-center justify-start w-full">
          <div className="flex w-full flex-col">
            <div className="flex justify-end">
              <Typography className="text-gray-900 font-bold">{title}</Typography>
              <TaskOutlinedIcon className="text-gray-500 ml-4" />
            </div>
            <div className="flex justify-end mt-1">
              <Typography className="text-gray-500  mr-4">{description}</Typography>
              <FolderOpenOutlinedIcon className="text-gray-500 ml-4" />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-2">
          <Typography className="text-gray-800 mr-4">{`اولویت: ${priority}`}</Typography>
          <ClearAllOutlinedIcon className="text-gray-800 ml-4" />
        </div>

        <div className="flex items-center justify-between w-full pt-2 ">
          {timeSpent && status === StatusEnum.DOING && (
              <Chip label={`${hours}:${minutes}:${seconds}`} color={'info'} variant="outlined" />
          )}

          {status === StatusEnum.DOING && (
              <div>
                {timeSpentState == 'PlAY' && (
                    <IconButton aria-label="pause">
                      <PauseOutlinedIcon onClick={() => setTimeSpentState('PAUSE')} />
                    </IconButton>
                )}

                {timeSpentState !== 'PlAY' && (
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon
                          sx={{ height: 34, width: 34 }}
                          onClick={() => setTimeSpentState('PlAY')}
                      />
                    </IconButton>
                )}

                <IconButton aria-label="stop">
                  <StopIcon onClick={() => updateTask(id, { ...task, status: StatusEnum.DONE })} />
                </IconButton>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTask;
