import moment from "moment";

export function dateCheck(value:string) {
  const dateValue = new Date(value);
  const dateMomentValue = moment(dateValue).format('YYYY. MM. DD.');

  return dateMomentValue;
}