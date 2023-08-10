const { format } = require('date-fns');

const data = new Date(2020, 9, 5);

const dataFormatada1 = format(data, "dd 'de' MMMM 'de' yyyy")
const dataFormatada2 = format(data, "dd/MM/yyyy")
const dataFormatada3 = format(data, "d MMM")
const dataFormatada4 = format(data, "dd MMM yyyy")
const dataFormatada5 = format(data, "dd 'de' MMM 'de' yyyy")
const dataFormatada6 = format(data, "dd/MMM")



console.log(`a)${dataFormatada1}  b)${dataFormatada2}  c)${dataFormatada3}  d)${dataFormatada4}  e)${dataFormatada5}  f)${dataFormatada6}`);