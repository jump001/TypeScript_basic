//ประเภทของfunction
/*function getFullname(fname:string,lname:string){
    return `${fname} ${lname}`;
}

const getFullName = function(fname:string,lname:string){
    return `${fname} ${lname}`;
}


const getFullName = (fname:string,lname:string) =>{
    return `${fname} ${lname}`;
}
*/
// ใช้ type alais เพื่อที่จะสะดวกในการไม่ระบุtype ใน arrow function
type GetFullNameFn = (fname: string, lname: string) => string;

const getFullName: GetFullNameFn = (fname, lname) => {
  return `${fname} ${lname}`;
};
