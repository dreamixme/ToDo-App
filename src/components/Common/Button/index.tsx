import { ReactElement } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

export type colorType =
  | 'primary'
  | 'secondary'
  | 'inherit'
  | 'success'
  | 'info'
  | 'error'
  | 'warning';
export type variantType = 'outlined' | 'contained' | 'text';
export type sizeType = 'large' | 'small' | 'medium';
export type buttonType = 'submit' | 'button';

interface Props {
  text?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  color?: colorType;
  startIcon?: any;
  endIcon?: any;
  variant?: variantType;
  fullWidth?: boolean;
  size?: sizeType;
  type?: buttonType;
  children?: any;
  theme?: 'default' | 'light' | 'pink';
}

const _Button = (props: Props): ReactElement => {
  const {
    text,
    size,
    type,
    className,
    disabled,
    loading,
    color,
    startIcon,
    endIcon,
    variant,
    fullWidth,
    onClick,
    children,
  } = props;
  return (
    <Button
      disableFocusRipple
      classes={{
        contained: 'flex px-40',
      }}
      className={className}
      disabled={loading || disabled}
      onClick={onClick}
      type={type}
      color={color}
      fullWidth={fullWidth}
      variant={variant}
      startIcon={!loading && startIcon}
      endIcon={!loading && endIcon}
      size={size}
    >
      {loading ? (
        <div className="flex w-full items-center justify-center py-2 px-5">
          <CircularProgress color="primary" size="1rem" />
        </div>
      ) : (
        text || children
      )}
    </Button>
  );
};

_Button.defaultProps = {
  text: '',
  className: '',
  disabled: false,
  loading: false,
  color: 'primary',
  type: 'button',
  variant: 'contained',
  fullWidth: false,
  size: 'medium',
  theme: 'default',
};

export default _Button;
