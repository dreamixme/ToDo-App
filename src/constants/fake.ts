import { MTaskDataModel, StatusEnum } from '../models/todo/DataModel';

export const TempTodoList: MTaskDataModel[] = [
  {
    id: '8426',
    title: 'تسک شماره 1',
    description: 'توضیحات تسک',
    priority: 4,
    deadline: '2',
    timeSpent: '1',
    status: StatusEnum.TODO,
  },
  {
    id: '2509',
    title: 'تسک شماره 2',
    description: 'ندارد',
    priority: 8,
    deadline: '2',
    timeSpent: '1',
    status: StatusEnum.TODO,
  },
  {
    id: '6354',
    title: 'تسک شماره 3',
    description: '---',
    priority: 8,
    deadline: '2',
    timeSpent: '1',
    status: StatusEnum.TODO,
  },
];
