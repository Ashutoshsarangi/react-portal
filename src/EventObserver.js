class EventObserver {
  constructor() {
    this.observer = [];
  }

  subscribe(fn) {
    this.observer.push(fn);
  }

  unSubscribe(fn) {
    this.observer = this.observer.filter((subscribeFn) => subscribeFn !== fn);
  }

  broadcast(data) {
    this.observer.forEach((subscriber) => subscriber(data));
  }
}

export const eventObserver = new EventObserver();
