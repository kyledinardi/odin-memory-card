export default function arrayRandomizer(array) {
  const currentArray = [...array];
  const newArray = [];

  while (currentArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * currentArray.length);
    const randomItem = currentArray.splice(randomIndex, 1);
    newArray.push(randomItem[0]);
  }
  
  return newArray;
}
