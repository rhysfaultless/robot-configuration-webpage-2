import { Price } from "/components/price-lead-quote/Price";

function PriceText(props) {
  return <p> {"Price: $" + Price(props.statesArray).toString() + '\u00A0' + '\u00A0' + '\u00A0' + "USD"} </p>;
}

export default PriceText;
