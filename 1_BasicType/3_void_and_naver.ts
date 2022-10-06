

/*void จะใช้ในฟังชั่นที่ไม่รีเทิร์นค่า */
function gr() {
  console.log("hello");
}

//never จะสื่อความหมายว่า ไม่มีทางเกิดขึ้นได้

function formatFloat(num: string | number) {
  switch (typeof num) {
    case "string":
      return parseFloat(num).toFixed(2);
    case "number":
      return num.toFixed(2);
    default:
      return num; //type never
  }
}
