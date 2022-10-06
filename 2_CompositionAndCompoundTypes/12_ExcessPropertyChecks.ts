//คือจะเป็นการระบุเช็คว่า  มีtypeอะไรเกินมาบ้าง
/*
interface Person22 {
  name: string;
  age: number;
  gender: string;
}
const trt: Person22 = { //เช่น const trt: Person22 = { จะerrorตรง nickname
  name: "Jump",
  age: 34,
  gender: "male",
  nickname: "sommm",
};
*/

// อีกตัวอย่าง
interface Regtangle {
  width: number;
  height: number;
}

function getArea(shape: Regtangle) {
  return shape.width * shape.height;
}

/*const shape ={width:19,height:32,depth:34};//วิธีนนี้จะไม่ถุกเช็คเพราะมันไม่รู้โครงสร้าง
getArea(shape);*/

//วิธีที่จะให้เช็ควิธีที่หนึ่ง
//getArea({width:19,height:32,depth:34});//ส่งobjไปตรงๆ

/*const shape :Regtangle={width:19,height:32,depth:34};//วิธี2 ระบุไปว่ามีชนิดช้อมูลเป็น Regtangle
getArea(shape);*/
