import add from '@lerna-xecep/add';
import sub from '@lerna-xecep/sub';

function calculator(a: number, b: number, o: 'add' | 'sub'): number {
  const operation = { add, sub }[o];
  return operation(a,b);
}

export default calculator;