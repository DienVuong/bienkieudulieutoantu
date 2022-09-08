let diemly ;
let diemhoa;
let diemsinh;
diemly = +prompt( 'Nhập điểm lý');
diemhoa = +prompt(' Nhập điểm hóa');
diemsinh = +prompt(' Nhâpk điểm sinh');
/*document.write('diem trung binh:'+(diemly + diemhoa + diemsinh)/3 );
document.write("<br>")
document.write('Tong diem:'+( diemly + diemhoa + diemsinh))*/
let tongdiem = diemly + diemhoa + diemsinh;
let diemtrungbinh = (diemly + diemhoa + diemsinh) / 3;
document.write('Tổng Điểm :'+ tongdiem );
document.write("<br>")
document.write('Điểm trung bình:'+ diemtrungbinh);


