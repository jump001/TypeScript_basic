//การประกาศอาเรย์
const dd: number[] = [12, 4, 4];
const num77: unknown[] = ["nnnn", 3, false];
const num11: Array<number> = [2, 3, 5];
num11[0] = 1; //การเข้าถึงindex
const ci: readonly number[] = [1, 3, 4]; //อ่านได้อย่างเดียว
//const ci[0]=10   ไม่สามารถแก้ได้
const jj11: ReadonlyArray<number> = [1, 2, 3, 45, 5, 5]; //อีกวิธีของการเขียนreadonly
// jj11[0]=233 ไม่สามารถแก้ได้

//ถ้าอยากเขียนค่าของอาเรที่มี่readonly ให้ใช้ as number[] จะไม่ติด
const num21 = jj11 as number[];
