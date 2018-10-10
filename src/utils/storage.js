/* global sessionStorage */
class Storage {
  getSessionStorage = key => sessionStorage.getItem(key);

  setSessionStorage = (key, val) => sessionStorage.setItem(key, val);
}
export default new Storage();
