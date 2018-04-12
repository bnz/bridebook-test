// @flow
import ComponentStyles from './Label.style';
import React from 'react';
import Box from '../fela/components/Box';

export type PropTypes = {|
  id?: string,
  label?: string | Object,
  required?: boolean,
  error?: boolean,
  disabled?: boolean,
  color?: string,
|};

const Label = (props: PropTypes) => {
  const { id, label, required, error } = props;

  const styles = ComponentStyles(props);

  const content = label ? (
    <Box htmlFor={id} as="label" style={styles.labelWrapper}>
      <Box>{label}</Box>
      {(required || error) && <Box style={styles.labelRequired}>*</Box>}
    </Box>
  ) : null;

  return content;
};

export default Label;
