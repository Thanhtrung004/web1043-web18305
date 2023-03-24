let a = parseInt(prompt("nhập a:"));
let b= parseInt(prompt("nhập b:"));
let c= parseInt(prompt("nhập c:"));
if (a< b+ c && b < a + c && c < a + b) {
    if (a1== b || a == c || c == b) {
      document.write("tam giac can:");
    } else if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == b * b + a * a
    ) {
      document.write("tam giac vuong");
    } else {
      document.write("tam giac thuong");
    }
  } else {
    document.write("!");
  }