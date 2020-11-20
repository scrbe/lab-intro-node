class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b;
    })
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
    } else {
      throw new Error('Out of bounds')
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }
  

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((acc,next) => {
        return acc + next;
      })
    } else {
      return 0
    }
  }

  avg() {
    if (this.items.length > 0) {
      const sum = this.items.reduce((acc,next) => {
        return acc + next;
      })

      return sum / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
