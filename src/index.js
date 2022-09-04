function concatination(stringA, stringB) {
  return stringA + stringB;
}

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    const date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = concatination('0', hours);

    let mins = date.getMinutes();
    if (mins < 10) mins = concatination('0', mins);

    let secs = date.getSeconds();
    if (secs < 10) secs = concatination('0', secs);

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(option) {
    super(option);
    const { precision = 1000 } = option;
    this.precision = precision;
  }

  start() {
    this.render();

    this.timer = setInterval(() => this.render(), this.precision);
  }
}

class ExtendedClock2 extends ExtendedClock {
  constructor(option) {
    super(option);
    const { third = 1000 } = option;
    this.third = third;
  }

  start() {
    this.render();

    this.timer = setInterval(() => this.render(), this.precision + this.third);
  }
}

const lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 1000,
});

lowResolutionClock.start();

const middleResolutionClock = new ExtendedClock2({
  template: 'h:m:s',
  precision: 5000,
  fourth: 1000,
});

//middleResolutionClock.start();
