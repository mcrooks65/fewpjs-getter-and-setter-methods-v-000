const pi = Math.pi
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return pi * (this.radius * 2)
  }
  set circumference(circumference) {
    this.radius = circumference / (pi * 2);
  }
}
