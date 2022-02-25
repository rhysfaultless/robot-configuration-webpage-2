import { Leadtime } from "/components/price-lead-quote/Leadtime";

function LeadtimeText(props) {
  let returnedString = "Lead Time: " + Leadtime(props.statesArray).toString() + " Weeks";
  return <p> {returnedString} </p>;
}

export default LeadtimeText;
