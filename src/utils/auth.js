// Simple Auth utils for demo (localStorage)
export const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true' || localStorage.getItem('isGuest') === 'true';
};

export const login = (userData) => {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.removeItem('isGuest');
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('isGuest');
  localStorage.removeItem('userData');
};

export const getUserData = () => {
  const data = localStorage.getItem('userData');
  return data ? JSON.parse(data) : null;
};

export const updateUserData = (newUserData) => {
  localStorage.setItem('userData', JSON.stringify(newUserData));
};

export const loginAsGuest = () => {
  localStorage.setItem('isGuest', 'true');
  localStorage.removeItem('isLoggedIn');
};

