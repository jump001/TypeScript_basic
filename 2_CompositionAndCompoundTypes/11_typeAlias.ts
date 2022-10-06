//คือจะใช้เพื่อจับคู่typeที่มีอยู้แล้ว

type Role = "Admin" | "Moderator" | "Editor";
//การสร้างtype Alias จะขึ้นต้นด้วยtypeก่อน  การนำไปใช้เช่น
const role1: Role = "Admin";

//typeAlis จะใช้เหมือน interface จะไม่มีextendsแต่จะใช้ && เชื่อม
type Person4 = {
  name: string;
  age: number;
  gender: string;
};
type Website = {
  url: string;
};

type Article = {
  title: string;
  content: string;
};

type BlogPost = Website &
  Article & {
    view: number;
  };
