import { CSSProperties } from 'react';

export const emailVerify_input: (
  isCurrentInputValue: boolean,
) => CSSProperties = (isCurrentInputValue) => {
  return {
    width: '50px',
    height: '50px',
    background: isCurrentInputValue ? '#545252' : '#D9D9D9',
    borderRadius: '10px',
    border: '0px',
    fontWeight: 'bolder',
    fontSize: '24px',
    textAlign: 'center',
    color: '#7e7d7d',
    margin: '0 1.5px 0 1.5px',
  };
};
