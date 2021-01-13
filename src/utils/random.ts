function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomElement<T>(arr: T[]): T {
  return arr[getRandomInt(arr.length)];
}
