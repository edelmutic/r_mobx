import { makeAutoObservable } from 'mobx';

class Counter {
  count = 10;
  timer = 60;
  constructor() {
    makeAutoObservable(this);
  }
  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1;
  }
}

export default new Counter();
