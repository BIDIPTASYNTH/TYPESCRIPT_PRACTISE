type User = {
  readonly _id: number;
  name: string;
  roll_number: number;
  good: boolean;
};

const u1: User = {
  _id: 5,
  name: "neo",
  roll_number: 505,
  good: true,
};

console.log(Object.keys(u1));
