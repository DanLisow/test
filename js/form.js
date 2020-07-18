const input = document.querySelectorAll(".form-control");
const span = document.querySelectorAll(".form-group span");

input.forEach((elem) => {
  elem.onfocus = () => {
    span.forEach((item) => {
      item.style.opacity = "1";
    });
  };
  elem.onblur = () => {
    span.forEach((item) => {
      item.style.opacity = "0";
    });
  };
});
