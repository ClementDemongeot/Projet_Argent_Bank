export const isValidName = (name) => {
  if (name == null) throw new Error("Name is required");
  return typeof name === "string" && name.length > 0;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email) => {
  if (email == null) throw new Error("Email is required");
  return emailRegex.test(email);
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{3,}$/;

export const isValidPassword = (password) => {
  if (password == null) throw new Error("Password is required");
  return passwordRegex.test(password);
};
