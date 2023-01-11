import { init } from '@rematch/core';
import updatedPlugin from '@rematch/updated';
import loadingPlugin from '@rematch/loading';
import * as models from '../models';

export const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: process.env.NODE_ENV === 'production',
    },
  },
  plugins: [loadingPlugin(), updatedPlugin()],
});

export const { dispatch } = store;
