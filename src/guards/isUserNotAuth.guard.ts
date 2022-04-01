export default () => {
  if (!localStorage.getItem('user')) {
    return '/';
  }

  return true;
};
