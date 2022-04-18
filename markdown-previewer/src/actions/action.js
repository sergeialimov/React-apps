const TEXT = 'TEXT';

export const action = (text) => {
  return {
    type: TEXT,
    text
  }
};