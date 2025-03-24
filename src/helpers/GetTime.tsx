const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

export const currentDate = day + "/" + (month + 1) + "/" + year;
