export const bit = item => (item ? 1 : 0);

export const hexadecimal = item => `0x${item.toString(16)}`;
export const binary = item => `B${item.toString(2).padStart(8, 0)}`;
export const decimal = item => item.toString(10);

const createMode = ([name, method]) => ({ name, method });

export const modes = [
  ['hexadecimal', hexadecimal],
  ['binary', binary],
  ['decimal', decimal],
].map(createMode);
