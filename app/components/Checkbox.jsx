import React from 'react';
import { Field } from 'redux-form';

const Checkbox = ({ styles, contents }) => {
  return <div>
    <label style={styles.checkboxLabel}>
      <Field
        name={contents.name}
        component="input"
        type="checkbox"
        value={contents.value}
        style={styles.checkbox}
      />
      {contents.value}
    </label>
  </div>;
};

export default Checkbox;
