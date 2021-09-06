import numeral from "numeral";

const dollarFilter = (value) => {
  if (!value) {
    return "$ 0";
  }
  return numeral(value).format("$ 0.0");
};

const percentFilter = (value) => {
  if (!value) {
    return "$ 0";
  }
  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilter, percentFilter };
