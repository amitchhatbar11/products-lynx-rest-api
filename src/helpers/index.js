var currencyExchangeRate = require("currency-exchange-rate");

export const successResponse = (res, data, code = 200) =>
  res.send({
    code,
    data,
    success: true,
  });

export const errorResponse = (
  res,
  errorMessage = "Something went wrong",
  code = 500,
  error = {},
) =>
  res.status(code).json({
    code,
    errorMessage,
    error,
    data: null,
    success: false,
  });

export const currentCurrencyRate = (currency) => {
  const rate = currencyExchangeRate
    .getCurrencyExchangeRate({ fromCurrency: "USD", toCurrency: currency })
    .then(function (exchangeRateValue) {
      console.log(exchangeRateValue);
      return exchangeRateValue;
    })
    .catch((error) => {
      console.log(error);
    });
  return rate;
};
