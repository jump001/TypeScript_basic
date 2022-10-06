function addInt(n: number | string, m: number | string): number | string {
  if (typeof n === "number" && typeof m === "number") return n + m;
  if (typeof n === "string" && typeof m === "string") {
    return `${parseInt(n) + parseInt(m)}`;
  }

  throw new Error("must be the same type"); // ถ้าข้อมูลไม่ตรงกัน จะthrow error ออกมา
}
console.log(addInt(1, 2)); //3
console.log(addInt("3", "4")); //'7'
console.log(addInt(5, "6")); // error
