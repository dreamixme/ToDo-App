import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  FormControl,
} from '@mui/material';

interface Props {
  label?: string;
  helperText?: any;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  fullWidth?: boolean;
  error?: boolean;
  type?: string;
  startAdornment?: any;
  endAdornment?: any;
  inputProps?: any;
  inputRef?: any;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  size?: any;
}

const _Input = (props: Props): ReactElement => {
  const {
    label,
    helperText,
    disabled,
    placeholder,
    className,
    error,
    type,
    fullWidth,
    endAdornment,
    startAdornment,
    inputRef,
    multiline,
    maxRows,
    minRows,
    size,
    ...rest
  } = props;

  return (
    <>
      <FormControl className="w-full">
        <TextField
          variant="outlined"
          inputRef={inputRef}
          label={label}
          multiline={multiline}
          maxRows={maxRows}
          minRows={minRows}
          InputProps={{
            startAdornment,
            endAdornment,
          }}
          size={size}
          placeholder={placeholder}
          fullWidth={fullWidth}
          className={className}
          helperText={helperText}
          disabled={disabled}
          type={type}
          error={error}
          {...rest}
        />
      </FormControl>
    </>
  );
};

_Input.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
  endAdornment: PropTypes.element || null,
  startAdornment: PropTypes.element || null,
  inputProps: PropTypes.shape({}),
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.shape({}) }),
  ]),
  multiline: PropTypes.bool,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  size: PropTypes.string,
};

_Input.defaultProps = {
  label: '',
  helperText: '',
  disabled: false,
  placeholder: '',
  className: '',
  error: false,
  type: 'text',
  fullWidth: false,
  endAdornment: <></>,
  startAdornment: <></>,
  inputProps: {},
  inputRef: () => { },
  multiline: false,
  maxRows: 1,
  minRows: 1,
  size: 'small',
};

export default _Input;
