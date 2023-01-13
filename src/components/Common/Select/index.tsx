import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, TextField, MenuItem } from '@mui/material';

interface Props {
  label: string;
  placeholder?: string;
  helperText?: string;
  className: string;
  size: any;
  options: any;
  error?: boolean;
  disabled?: boolean;
}

const _Select = (props: Props): ReactElement => {
  const { helperText, label, placeholder, className, options, error, disabled, ...rest } = props;

  return (
    <>
      <FormControl error={!!helperText} className="w-full">
        <TextField
          className={className}
          select
          error={error}
          label={label}
          disabled={disabled}
          InputLabelProps={{ shrink: true }}
          placeholder={placeholder}
          {...rest}
        >
          {options?.map(({ name, value }: any) => (
            <MenuItem
              key={`${value}`}
              // eslint-disable-next-line max-len
              className={`text-sm rtl text-gray-900 rounded m-1 ${
                value === 0 ? 'text-md text-gray-50 pointer-events-none font-semibold' : ''
              }`}
              value={value}
            >
              {name}
            </MenuItem>
          ))}
        </TextField>
        {helperText && <FormHelperText className="text-red-600">{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

_Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

_Select.defaultProps = {
  helperText: '',
  placeholder: '',
  className: '',
  label: '',
  size: 'small',
  disabled: false,
};

export default _Select;
