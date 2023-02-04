export function addGmail(txt) {
  if (!txt.endsWith("@gmail.com")) {
    return txt + "@gmail.com";
  }
  return txt;
}
