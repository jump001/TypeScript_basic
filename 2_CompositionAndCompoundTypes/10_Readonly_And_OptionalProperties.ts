interface Person1 {
  firstName11: string;
  lastName: string;
  middleName?: string; //?เป็นการบอกว่าจะมีก็ได้ไม่มีก็ได้
  readonly gender: "male" | "female"; //readonly อ่านได้อย่างเดียว
}

let jump: Person1 = {
  firstName11: "jump",
  lastName: "sdfd",
  // middleName: "rerere", ตัดmiddleNameออกจะไม่errorเพราะใส่ ? แล้ว
  gender: "male", //gender เป็นสิ่งที่ติดตัวตลอดจำเป็นต้องมีและเปลี่ยนไม่ได้ jump.gender= 'femal'ไม่ได้
};
