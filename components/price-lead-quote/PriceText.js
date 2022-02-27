import { Price } from "/components/price-lead-quote/Price";

function PriceText(props) {
  let returnedString = "Price: $" + Price(props.statesArray).toString();
  return <p> {returnedString} </p>;
}

export default PriceText;
