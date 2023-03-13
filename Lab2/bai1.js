// Nhạp a 
let a = prompt ("Mời nhập a:");
let a1= parseInt(a);
// nhập b
let b = prompt (" Mời nhập b :");
let b1= parseInt(b);
// nhập c
let c = prompt("Mời nhạp c:");
let c1= parseInt(c);
// Tính phương trình bậc 2
if (a == 0) {
    if (b == 0) {
      if (c == 0) {
        document.write("phuong trinh vo so nghiem");
      } else {
        document.write("phuong trinh vo nghiem");
      }
    } else {
      var x = -c / b;
      document.write("phuong trinh co nghiem duy nhat la " + x);
    }
  } else {
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
      document.write("phuong trinh vo nghiem");
    } else if (delta == 0) {
      var x = -b / (2 * a);
    } else {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a);
      var x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
      document.write(
        "phuong trinh co 2 nghiem la " + x1.toFixed(2) + " " + x2.toFixed(2)
      );
    }
  }