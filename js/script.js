
function maximum() {
   let a = +document.getElementById("tiv1").value;
   let b = +document.getElementById("tiv2").value;
   let c = +document.getElementById("tiv3").value;

   let max;

   if (a > b) {
      max = a;
   } else {
      max = b;
   }
   if (c > max) {
      max = c;
   }
   document.write("<h1> maximum =" + max + "</h1>");

}