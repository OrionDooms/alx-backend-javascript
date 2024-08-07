export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (!filename) {
      resolve();
    } else {
      reject(Error(`${filename} cannot be processed`));
    }
  });
}
