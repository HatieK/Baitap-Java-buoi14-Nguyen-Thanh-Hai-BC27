// //Bài 1:
// Input: tạo biến là 3 số nguyên và gán với giá trị của 3 số là a b c
// Process: Xét các trường hợp để thỏa yêu cầu bài toán
// a < b và b < c
// a < c và c < b
// b < a và a < c
// b < c và c < a
// c < a và a < b
// c > b và c > a
// Output: Xuất ra kết quả số tự nhiên theo thứ tự tăng dần



// var a = prompt("Nhập số nguyên a:");
// var b = prompt("Nhập số nguyên b:");
// var c = prompt("Nhập số nguyên c:");
// if(a < b && b < c){
//     alert(a + " " + b + " " + c);
// }
// else if(a < c && c < b){
//     alert(a + " " + c + " " + b);
// }
// else if(b < a && a < c){
//     alert(b + " " + a + " " + c);
// }
// else if(b < c && c < a){
//     alert(b + " " + c + " " + a);
// }
// else if(c < a && a < b){
//     alert(c + " " + a + " " + b);
// }
// else{
//     alert(c + " " + b + " " + a);
// }

//Bài 2:
// Input: đặt case cho từng trường hợp ứng với các giá trị
// Process: với case = B ==> Chào bố
// với case = M ==> chào mẹ
// với case = A ==> chào anh trai
// với case = E ==> chào em gái
//  không trong trường hợp kể trên chào người lạ




var hello = prompt("Người sử dụng máy:");
switch (hello) {
    case "B": {
        alert("Chào bố");
        break;
    }
    case "M": {
        alert("Chào mẹ");
        break;
    }
    case "A": {
        alert("Chào anh trai");
        break;
    }
    case "E": {
        alert("Chào em gái");
        break;
    }
    default: {
        alert("Chào người lạ");
    }
}

////Bài 3:
// Input: tạo biến cho 3 số nguyên lần lượt là a b và c
// Process: Để kiểm tra 1 số là chẵn hay lẻ thì ta đem số đó chia với 2. Nếu chia hết thì là số chẵn, ngược lại là số lẻ
// Tạo biến để chứa giá trị khi đếm. Sau khi xác định được số đó chẵn hoặc lẻ thì tăng biến này lên 1 đơn vị
// Output: Xuất giá trị kết quả ra màn hình


// //Nhập
// var a = prompt("Nhập số nguyên a:");
// var b = prompt("Nhập số nguyên b:");
// var c = prompt("Nhập số nguyên c:");

// //Xử lý
// var odd = 0;
// var even = 0;
// //Xét a
// if(a % 2 == 0){
//     even += 1;
// }
// else{
//     odd += 1;
// }
// //Xét b
// if(b % 2 == 0){
//     even += 1;
// }
// else{
//     odd += 1;
// }
// //Xét c
// if(c % 2 == 0){
//     even += 1;
// }
// else{
//     odd += 1;
// }

// //Xuất
// alert("Có " + odd + " số lẻ");
// alert("Có " + even + " số chẵn");

////Bài 4:
// input: tạo biến cho 3 cạnh a b c và gán giá trị cho biến
// Process: Xét: Đều: Nếu 3 cạnh bằng nhau
// Cân: Nếu 2 cạnh bằng nhau
// vuông: nếu tổng bình phương 2 cạnh ngắn bằng tổng bình phương cạnh dài nhất trong 3 cạnh
// Output: Xuất ra giá trị tam giác cân vuông hoặc bình thường


// var a = prompt("Nhập cạnh a:");
// var b = prompt("Nhập cạnh b:");
// var c = prompt("Nhập cạnh c:");
// if(a == b && b == c & a == c){
//     alert("Tam giác đều");
// }
// else if(a == b || b == c || a == c){
//     alert("Tam giác cân");
// }
// else if(a * a + b * b == c * c || a * a + c * c == b * b || c * c + b * b == a * a){
//     alert("Tam giác vuông")
// }
// else{
//     alert("Tam giác bình thường")
// }