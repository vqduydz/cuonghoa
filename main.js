var diemCuongHoa;
var diemCuongHoaTC;
var lvCH = 0;
var buaMM;
var buaMT;
var phanTram;
var ranDom;
var a = 0, b = 0, c = 0;
var phanTramElm = document.querySelector('.phan-tram-ch');
//Trả về điểm cường hóa thành công tính theo cấp cường hóa (lvCH)
(xuatA = () => {
	a = Number(document.getElementById("a").value);
	phanTramCH()
});
(xuatB = () => {
	b = Number(document.getElementById("b").value);
	phanTramCH()
});
(xuatC = () => {
	c = Number(document.getElementById("c").value);
	phanTramCH()
});

(buaMayThuat = () => {
	var checkMT = document.querySelector('#bua-mt')
	if (checkMT.checked == true) {
		buaMT = true;
	} else {
		buaMT = false;
	}
});

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
//Tính điển cường hóa sau khi cho đá ch vào
diemCH = () => {
	// clBmm()
	if (buaMM > 0) {
		diemCuongHoa = Number((a + b + c) + (((a + b + c) * buaMM) / 100));
	} else {
		diemCuongHoa = Number(a + b + c);
	}
};


//Tính phần trăm 
tinhPT = () => {
	phanTram = Number(((diemCuongHoa * 100) / diemCuongHoaTC).toFixed(1));
	if (phanTram <= 100) {
		phanTramElm.value = phanTram;
	} else {
		phanTramElm.value = 100;
	}
}
//Trả về % sau khi cho đá vào
phanTramCH = () => {
	// console.log('test %')
	diemCHS()
	diemCH()
	tinhPT()
};

clBmm = () => {
	// console.log('test clBm')
	diemCHS()
	diemCH()
	phanTramCH()
};

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

//
(cuongHoa = () => {
	buaMayThuat()
	diemCHS()
	diemCH()
	phanTramCH()
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
					console.log(`Cường hóa thất bại TT cấp cường hóa hiện tại là ${lvCH}`)
				} else {
					if (buaMT == false)
						--lvCH;
					console.log(`Cường hóa thất bại TT Và bị trừ cấp cường hóa, cấp cường hóa hiện tại là ${lvCH}`)
				}
			} else {
				++lvCH;
				console.log(`Cường hóa thành công ^^ cấp cường hóa hiện tại là ${lvCH}`)
			}
			// console.log(buaMM, buaMT, a, b, c, diemCuongHoa, diemCuongHoaTC, ranDom, phanTram, lvCH)
		} else {
			console.log('Cấp cường hóa đã max, hãy chọn trang bị khác !')
		}
	}
	resetF()
})
