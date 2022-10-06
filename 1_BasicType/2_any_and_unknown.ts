/*การที่เราจะใช้anyก็ต่อเมื่อเราทำการย้ายโค้ด.jsมา.ts ให้เราไปปิดกฎ" noImplicitAny": true,
 จะทำให้โค้ด.js สามารถรันได้ แล้วค่อยไปแก้typeให้มัน*/

//การใช้ unknown จะมีประโยชน์มากว่า any เพราะสามารถเช็คชนิดข้อมูล
let num2: unknown = "10.225658"; //unknown ยังไม่รู้ค่าที่แท้จริง
num2 = 1321563.21155;
num2 = false;

if (typeof num2 === "number") {
  console.log(num2);
}
