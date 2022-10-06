//interface จะเป็นการรวมกลุ่มความสำพันธ์ของฟิวต่างๆในออบเจ็ค
interface Person {
  name: string;
  age: number;
  gender: string;
}
let person: Person; //เป็นการเอาpersonมาเป็นชนิดข้อมูลให้ตัวแปร ถ้าลืมใส่ฟิว จะเออเร่อ

person = {
  name: "Somchai",
  age: 24,
  gender: "male",
};
