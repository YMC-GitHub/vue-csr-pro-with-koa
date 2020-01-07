const myPluginWithSnapshot = store => {
  let prevState = _.cloneDeep(store.state);
  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state);

    // compare `prevState` and `nextState`...

    // save state for next mutation
    prevState = nextState;
  });
};
