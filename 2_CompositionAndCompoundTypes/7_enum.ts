/*//เพื่อให้เกิดการรวมกลุ่มกัน คือ enum
 enum Role{
     Admin ,  //ถ้าconsole.log(role)โดยจะเริ่มที่admin มีค่าเป็น0..1..2 เพราะยังไม่กำหนดค่า
     Moderator,
     Editor,
 }
 const role:Role=Role = Rolw.Moderator;
 console.log(role);
*/
//////////////////////////////////////////////////////////////////////////////
/*
เป็นการกำหนดค่าให้เปแ็นสตริง
enum Role{
    Admin ='Admin',  
    Moderator ='Moderator',
    Editor='Editor',
    const role:Role=Role = Rolw.Moderator;
 console.log(role);
}
*/

/*
ทำย้อนกลับ
 connst enum Role{ ///จะทำให้แปลงโคดเป็นjsอ่านง่ายเมื้อใช้const
    Admin ,  
    Moderator ,//1
    Editor,

    const role:Role=Role = Rolw.Moderator;
 console.log(Role[1]);  จะมีค่าเป็นModrator
}
*/
