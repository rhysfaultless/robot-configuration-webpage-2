import { Leadtime } from "/components/price-lead-quote/Leadtime";

function LeadtimeText(props) {
  let returnedString = "LEAD TIME: " + Leadtime(props.statesArray).toString() + " WEEKS";
  return <p> {returnedString} </p>;
}

export default LeadtimeText;
