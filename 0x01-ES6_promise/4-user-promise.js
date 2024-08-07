export default function signUpUser(firstName, lastName) {
  return new Promise((result) => {
    result({
      firstName,
      lastName,
    });
  });
}
