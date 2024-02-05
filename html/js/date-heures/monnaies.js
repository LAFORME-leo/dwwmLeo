const frDisplayName = new Intl.DisplayNames("fr", { type: "dateTimeField" });
const frDisplayNameCurrency = new Intl.DisplayNames("fr", { type: "currency" });
console.log(frDisplayName.of('month'));

const dnDialect = new Intl.DisplayNames("ar", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-US"))

const euro = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 4
});
console.log(euro.format(1500));
console.log(frDisplayNameCurrency.of('KRW'));
