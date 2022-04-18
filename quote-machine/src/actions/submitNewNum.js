const NUM = 'NUM';

export const submitNewNum = (num) => {
  return {
    type: NUM,
    num
  }
};