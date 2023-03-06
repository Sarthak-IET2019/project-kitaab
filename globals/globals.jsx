export const CODES = {
  ERROR: 400,
  SUCCESS: 200,
};

// Convert timestamp to the date
export function GetDate(timestamp) {
  let date = new Date(timestamp);
  let dateFormat = date.toDateString();
  return dateFormat;
}
