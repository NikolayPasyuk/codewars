const bald = (x) => {
  const hairCount = x.split('/').length - 1;
  const cleanedHead = x.replace(/\//g, '-');

  const result = hairCount === 0 ? "Clean!"
    : hairCount === 1 ? "Unicorn!"
      : hairCount === 2 ? "Homer!"
        : hairCount <= 5 ? "Careless!"
          : "Hobo!";

  return [cleanedHead, result];
};
