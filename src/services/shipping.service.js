const SHIPPING_COST = 200;
module.exports.SHIPPING_COST = SHIPPING_COST;
const FREE_SHIPPING_THRESHOLD = 5000;
module.exports.FREE_SHIPPING_THRESHOLD = FREE_SHIPPING_THRESHOLD;
const STANDARD_SHIPPING_LABEL = "Standard shipping";
const FREE_SHIPPING_LABEL = "Free shipping";

const calculateShipping = (rawSubtotal) => {
  const isFreeShipping = rawSubtotal >= FREE_SHIPPING_THRESHOLD;
  return {
    cost: isFreeShipping ? 0 : SHIPPING_COST,
    label: isFreeShipping ? FREE_SHIPPING_LABEL : STANDARD_SHIPPING_LABEL,
    isFreeShipping,
  };
};
module.exports.calculateShipping = calculateShipping;
