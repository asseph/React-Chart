const toDecimal = (number) => {
    const result = Number(number.toFixed(2));
    return result === null || result === Infinity ? 0 : result;
};

const getPercent = (partial, total) => {
    const result = toDecimal( (partial / total) * 100);
    return result === null || result === Infinity || isNaN(result) ? 0 : result;
};

const getPercentDif = (currentPeriodValue, lastPeriodValue) => {
    const result = toDecimal( ((currentPeriodValue / lastPeriodValue) * 100) - 100);
    return result === null || result === Infinity || isNaN(result) ? 0 : result;
};

module.exports = {
    toDecimal,
    getPercent,
    getPercentDif,
};