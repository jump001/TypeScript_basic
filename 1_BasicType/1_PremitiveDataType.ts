//string
let str: string = "hi"; //tsสามารถ อนุมานค่าได้ เช่น
let s = "kkk"; //เมื่อเอาเม้าชี้ที่ s จะมีค่าเป็นstring สารถเปลี่ยนค่าได้
const aa = "gg"; //เมื่อเอาเม้าชี้ที่ aa จะมีค่าเป็นgg คือไม่สามารถเปลี่ยนค่า
s = aa; //สามารถเอาค่าไปใส่ได้ แต่ถ้า aa=s ไม่สามารถทำได้

//ลองสร้างฟังชั่นstring literal types
function permission(role: "admin" | "moderator" | "editor") {}
const role = "admin";
permission(role); /*เรียกใช้งานฟังชั่น แต่ถ้าเปลียนเป็น let 
จะไม่สามารถโยนstringไปในกลุ่มstring literal types ถ้าconstมีค่าตามที่ประกาศ
เพราะว่า let มีค่าเป็น string ไม่ใช่ค่าในฟังชั่นstring literal types*/

//number
//bigint
let num1: number = 11;
//boolean
let bool: boolean = true;

//null

//undefined

//symbol
