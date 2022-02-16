import { Price } from "/components/price-lead-quote/Price";

function PriceText(props) {
  let returnedString = "PRICE: $" + Price(props.statesArray).toString();
  return <p> {returnedString} </p>;
}

export default PriceText;
