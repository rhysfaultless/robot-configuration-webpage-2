export function Leadtime(inputArray) {
  let leadTimeValue = 16;
  let leadTimeArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    leadTimeArray.push(inputArray[i].leadTime);
  }
  console.log(leadTimeArray);
  leadTimeValue = Math.max(...leadTimeArray);
  return leadTimeValue;
}
