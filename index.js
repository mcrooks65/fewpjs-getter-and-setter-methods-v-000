
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  const pi = Math.pi
  get diameter() {
    return this.radius * 2;
  }
  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
    return ( this.radius * 2 ) * pi
  }

  set circumference( circumference ) {
    this.radius = circumference / ( pi * 2 )
  }
}
