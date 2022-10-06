let num6: unknown;
num6 = 20;
(num6 as number).toFixed(2);
//เป็นการบอกให้typeเชื่อว่าnum6 เป็นชนิดnumber *as number จึงฟิกค่าได้
//อีกวิธีหนึ่งคือ (<number>num6).toFixed(2);
