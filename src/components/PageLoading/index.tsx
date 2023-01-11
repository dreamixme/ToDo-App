import PropTypes, { InferProps } from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Typography from '@mui/material/Typography/Typography';
import clsx from 'clsx';

export default function PageLoading({ className }: InferProps<typeof PageLoading.propTypes>) {
  return (
    <div className={clsx(className, 'w-full flex justify-center items-center flex-col')}>
      <CircularProgress size={45} thickness={4} value={100} className="mt-44" />
      <Typography className="mt-8 text-sm">چند لحظه صبر کنید ...</Typography>
    </div>
  );
}

PageLoading.propTypes = {
  className: PropTypes.string,
};

PageLoading.defaultProps = {
  className: 'h-screen',
};
