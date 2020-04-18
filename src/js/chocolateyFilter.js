const chocolateyFilter = () => {
  return ({
    filterStr: '',
    isShow(string) {
      if (!this.filterStr) {
        return true;
      }
      return string.toLowerCase().includes(this.filterStr.toLowerCase()) ? true : false;
    }
  });
};

export default chocolateyFilter;
