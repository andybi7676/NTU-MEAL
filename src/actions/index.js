export const login = (token, name, group, email, id) => ({
  type: 'LOGIN',
  token,
  name,
  group,
  email,
  id,
});

export const logout = () => ({type: "LOGOUT"});