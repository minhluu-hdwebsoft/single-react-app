export const apiClient = (ms: number) => {
  console.log("Loading Async delay", ms);
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle("null");
    }, ms);
  });
};
