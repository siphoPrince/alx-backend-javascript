export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  /*keeping it constant */
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
