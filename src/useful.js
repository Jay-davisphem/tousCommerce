export function checkImage(url) {
  if (url === "None") return false;
  let request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function () {
    status = request.status;
    if (request.status == 200) {
      //if(statusText == OK)
      console.log(url);
      return url;
    } else {
      return false;
    }
  };
}
