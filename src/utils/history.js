import { createBrowserHistory } from 'history';
// Create a history of your choosing (we're using a browser history in this case)
export const history = createBrowserHistory();
export default {
  push(path) {
    history.push(path);
  },

  replace(path) {
    history.replace(path);
  },

  goBack() {
    history.go(-1);
  },
};
