export function Leadtime(inputArray) {
  let leadTimeValue = 0;
  let leadTimeArrayMaxValues = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].leadTimeSumOrMax == "max" ) {
      leadTimeArrayMaxValues.push(inputArray[i].leadTime);
    } else if (inputArray[i].leadTimeSumOrMax == "sum" ) {
      leadTimeValue += inputArray[i].leadTime;
    } 
  }
  leadTimeValue += Math.max(...leadTimeArrayMaxValues);
  return leadTimeValue;
}
