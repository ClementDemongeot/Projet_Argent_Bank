export const isValidName = (name) => {
  return typeof name === "string" && name.length > 0;
};

export const isValidEmail = (email) => {
  return email.includes("@") && email.includes(".");
};

export const isValidPassword = (password) => {
  return (
    password.length >= 3 && /\d/.test(password) && /[A-Za-z]/.test(password)
  );
};
