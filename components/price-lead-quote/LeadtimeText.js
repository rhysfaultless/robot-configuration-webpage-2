import { Leadtime } from "/components/price-lead-quote/Leadtime";

function LeadtimeText(props) {
  return <p> {"Lead Time: " + Leadtime(props.statesArray).toString() + " Weeks"} </p>;
}

export default LeadtimeText;
