const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-01-02");

console.log(matchers);