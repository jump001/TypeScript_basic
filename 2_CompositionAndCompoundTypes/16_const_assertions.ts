
const theme = {
    colers: {
       apple : '#9b56b5', //as const;,ใส่ตรงนี้ก็ได้
       carrot : '#e67e22',
    }
}as const;



const carrot = theme.colers.carrot;
//การทำ const assertions จะทำให้เราสะดวกในการรู้ค่าสี เมื่อเอาtheme.color.carrot
//เมื่อชี้ไปที่carrot จะแสดงค่าเป็น '#e67e22' ซึ่งถ้าไม่ทำเราจะเห็นเป็น stringเฉยๆ
//สะดวกเมื่อโปรเจคเราใหญ่ขึ้น มีบรรทัดโค้ดเยอะๆ