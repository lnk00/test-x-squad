export default () => {
  if (localStorage.getItem('user')) {
    return '/dashboard';
  }

  return true;
};
