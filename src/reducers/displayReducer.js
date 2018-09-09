const display = (state = 'home', action) => {
  switch (action.type) {
  case 'DISPLAY_SELECTED':
    return action.selected;
  default: 
    return state;
  }
};

export default display;