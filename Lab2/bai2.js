let a = prompt("nhập a:");
let a1=parseInt(a);
let b= prompt("nhập b:");
let b1=parseInt(b);
let c= prompt("nhập c:");
let c1= parseInt(c);
if (a < b + c && b < a + c && c < a + b) {
    if (a == b || a == c || c == b) {
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