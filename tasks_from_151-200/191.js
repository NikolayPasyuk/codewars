const likeOrDislike = (buttons) => buttons.reduce((state, button) => button === state ?
  Nothing : button, Nothing);
