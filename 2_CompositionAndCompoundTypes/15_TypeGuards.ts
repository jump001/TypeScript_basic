//
type Item = string | number | unknown[];

function isNumber(item:Item):item is number{//item is number คือการบอกให้รู้ว่าitemเป็นtype number ไม่งั้นtypescript จะไม่รู้
    return typeof item === 'number';
}
function truncate(item: Item, length:number):Item{ //รับพาราามิเตอร์เป็น itemและlength
    //number  ถ้าเป็นตัวเลขจะเข้าเงื่อนไขนี้
    if(isNumber(item)){
    return Math.floor(item / 10 ** (length - 1));
    }
    // string||unknown[] ถ้าเป็นสตริงหรืออาเรย์จะเข้าเงื่อนไขนี้
    return item.slice(0, length);
  }
    console.log(truncate('Hello',3)); //'hel'
    console.log(truncate(123455,3)); //'123'
    console.log(truncate( [1, 2, 3, 4, 5],3)); // [1,2,3]
        
    
