class CounterObject {
  constructor(element, value, increment, interval) {
    this.element = element;
    this.value = value;
    this.increment = increment;
    this.interval = interval;

    this.incrementCounter = () => {
      let count = 0;

      setInterval(() => {
        if (count == this.value)
          clearInterval(count);
        else {
          count += this.increment;
          let countAsStr = String(count);

          if (countAsStr.length % 5 == 0) this.element.textContent = countAsStr.slice(0, 2) + "," + countAsStr.slice(1, 4)
          else if (countAsStr.length % 4 == 0) this.element.textContent = countAsStr.slice(0, 1) + "," + countAsStr.slice(1, 4)
          else this.element.textContent = countAsStr;
        }

      }, this.interval);
    };
  }
};