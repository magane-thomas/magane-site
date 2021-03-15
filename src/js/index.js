const main = (state => {
  return {
    init() {
      state.appLoaded ? console.log('Application has loaded successfully.')
      : console.log('Application failed to load successfully.');
    }
  }
})({});

// App instanciation
main.init();
