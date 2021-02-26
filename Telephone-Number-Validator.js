function telephoneCheck(str) {
  let reGex = new RegExp(/^1?\s?[\s|-]?(\(\d{3}\)|\d{3})+[\s|-]?(\d{3})+[\s|-]?(\d{4})$/);
  const found = str.match(reGex);
  console.log(found);
  console.log(reGex.test(str));
  return reGex.test(str);
}

telephoneCheck("1 (555)-555-5555");
