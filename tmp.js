var diemCuongHoa;
var diemCuongHoaTC;
var lvCH = 0;
var buaMM;
var buaMT;
var phanTram;
var ranDom;
var a = 0, b = 0, c = 0;
var phanTramElm = document.querySelector('.phan-tram-ch');
var thongBao = document.querySelector('.thong-bao');
var thongBaoVlChs = document.querySelectorAll('.ch');
console.log(thongBaoVlChs)

//Trả về điểm cường hóa thành công tính theo cấp cường hóa (lvCH)
diemCHS = () => {
	switch (lvCH) {
		case 0: { diemCuongHoaTC = 16; break; }
		case 1: { diemCuongHoaTC = 80; break; }
		case 2: { diemCuongHoaTC = 384; break; }
		case 3: { diemCuongHoaTC = 960; break; }
		case 4: { diemCuongHoaTC = 1365; break; }
		case 5: { diemCuongHoaTC = 2731; break; }
		case 6: { diemCuongHoaTC = 5476; break; }
		case 7: { diemCuongHoaTC = 11011; break; }
		case 8: { diemCuongHoaTC = 18963; break; }
		case 9: { diemCuongHoaTC = 33033; break; }
		case 10: { diemCuongHoaTC = 44522; break; }
		case 11: { diemCuongHoaTC = 56889; break; }
		default: break;
	}
};
//Bùa May Mắn
(buaMayMan = () => {
	var checkMM = document.querySelector('#bua-mm')
	if (checkMM.checked == true) {
		buaMM = true;
	} else {
		buaMM = false;
	}
});
//Bùa Ma Thuật
(buaMaThuat = () => {
	var checkMT = document.querySelector('#bua-mt')
	if (checkMT.checked == true) {
		buaMT = true;
	} else if (checkMT.checked == false) {
		buaMT = false;
	}
});
//Gán điểm ch 
(xuatA = () => {
	a = Number(document.getElementById("a").value);
    tinhPT()
});
(xuatB = () => {
	b = Number(document.getElementById("b").value);
    tinhPT()
});
(xuatC = () => {
	c = Number(document.getElementById("c").value);
    tinhPT()
});

//Tính điển cường hóa sau khi cho đá ch vào
diemCH = () => {
    buaMayMan()
	if (buaMM == true) {
		diemCuongHoa = Number((a + b + c) + (((a + b + c) * 25) / 100));
	} else if (buaMM == false) {
		diemCuongHoa = Number(a + b + c);
	}
};
//Tính và hiển thị % phần trăm 
tinhPT = () => {
    diemCHS()
    diemCH()
	phanTram = Number(((diemCuongHoa * 100) / diemCuongHoaTC).toFixed(1));
	if (phanTram <= 100) {
		phanTramElm.value = `${phanTram}%`;
	} else {
		phanTramElm.value = `100%`;
	}
}
clBmm = () => {
    tinhPT()
}
//Reset các tt sau khi ấn CH
resetF = () => {
	document.getElementById("a").value = 0;
	document.getElementById("b").value = 0;
	document.getElementById("c").value = 0;
	a = 0;
	b = 0;
	c = 0;
	var checkMM = document.querySelector('#bua-mm')
	var checkMT = document.querySelector('#bua-mt')
	checkMM.checked = false;
	checkMT.checked = false;
	phanTramElm.value = 0;
};
//Hiện thanh cường hóa
thanhCH = () => 
//Ấn cường hóa
(cuongHoa = () => {
	buaMaThuat()
	if (a + b + c == 0) {
		console.log('Mời chọn đá cường hóa')
	} else {
		//Hàm random
		(() => {
			ranDom = Number((Math.random() * 100).toFixed());
		})();
		if (lvCH < 12) {
			if (ranDom > phanTram) {
				if (buaMT == true || lvCH == 0 || lvCH == 3 || lvCH == 6 || lvCH == 9) {
                    thongBao.value = `Cường hóa thất bại`;
                    thongBaoVlCh.value = `${lvCH}`;
				} else if (buaMT == false){					
                    --lvCH;
                    thongBao.value = `Cường hóa thất bại`;
                    thongBaoVlCh.value = `${lvCH}`;
				}
			} else {
				++lvCH;
				thongBao.value = `Cường hóa thành công`;
                thongBaoVlCh.value = `${lvCH}`;
			}
		} else {
			console.log('Cấp cường hóa đã max, hãy chọn trang bị khác !')
		}
        console.log(buaMM, buaMT, a, b, c, diemCuongHoa, diemCuongHoaTC, ranDom, phanTram, lvCH)
	}
	resetF()
})
