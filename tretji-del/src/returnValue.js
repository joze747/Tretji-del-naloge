function returnValue(options, value) {
    for (let i = 0; i < options.length; i++) {
      if (value === options[i].value) {
        return options[i].text;
      }
    }
    return value;
  }
  export default returnValue;
  