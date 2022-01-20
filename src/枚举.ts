enum FileAccess {
  Read = 1 << 2,
  G = "123".length,
}

console.log(FileAccess);

enum Direction {
  NORTH = 3,
  SOUTH,
  EAST = 10,
  WEST,
}

// console.log(Direction);
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
console.log(Enum);

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: "#00FF00",
  label: "VGA",
};

type Options = typeof INIT_OPTIONS;
