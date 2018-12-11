export function dummyAction() {
  console.log('%c dummyAction ', 'background: #222; color: orange');
  return {
    type: 'SOME_DUMMY_CONSTANT',
    payload: {
      client: 'google',
      request: {
        method: 'get',
        url: `/todos/1`,
      }
    }
  };
}