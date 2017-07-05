function formatName(user) {
  return user.firstname + ' ' + user.lastName;
}

const user = {
  firstName: 'Bob',
  lastName: 'Smith'
};

const element = (
  <h1>Hello, {formatName(user)}!</h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
