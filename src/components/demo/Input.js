import React from 'react';
import './Input.scss';

const Input = ({ name, label, placeholder = '', type = 'text', onChange, error = null }) => (
  <div className={`field ${error != null ? 'error' : ''}`}>
    <label htmlFor={name} className="label">
      { label } {error != null && <small className="error-msg">({error})</small>}
    </label>
    <div className="control">
      <input type={type} className="input" onChange={e => onChange(name, e.target.value)} id={name} name={name} placeholder={placeholder} />
    </div>
  </div>
);

export default Input;
