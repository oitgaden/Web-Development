export const store = {
    state: {
      loggedIn: false
    },

    setLoggedIn(loggedIn) {
        this.state.loggedIn = loggedIn;
    }
};