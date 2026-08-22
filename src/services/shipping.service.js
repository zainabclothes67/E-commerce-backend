const SHIPPING_COST = 0;
module.exports.SHIPPING_COST = SHIPPING_COST;

const FREE_SHIPPING_THRESHOLD = 0;
module.exports.FREE_SHIPPING_THRESHOLD = FREE_SHIPPING_THRESHOLD;

const STANDARD_SHIPPING_LABEL = "Free shipping";
const FREE_SHIPPING_LABEL = "Free shipping";

const calculateShipping = (rawSubtotal) => {
  return {
    cost: 0,
    label: FREE_SHIPPING_LABEL,
    isFreeShipping: true,
  };
};

module.exports.calculateShipping = calculateShipping;