"use strict";
// ----------------------------------------EMAIL------------------------------------------
document.querySelector(".submitBtn").addEventListener("click", function () {
  let emailValue = document.querySelector(".emailInput").value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    emailValue?.trim() !== "" &&
    regex.test(emailValue) &&
    emailValue === "huybq8899@gmail.com"
  ) {
    document.querySelector(".mainForm").classList.add("hidden");
    document.querySelector(".mainContentInfo").classList.remove("hidden");
    document.getElementById("validName").style.color = "#a5a5a5";
    document.getElementById("validBirthday").style.color = "#a5a5a5";
    document.getElementById("validPhoneNumber").style.color = "#a5a5a5";
    document.getElementById("validEmail").style.color = "#a5a5a5";
    document.getElementById("validAddress").style.color = "#a5a5a5";
    document.getElementById("validWebsite").style.color = "#a5a5a5";
    // const mainContent = (document.getElementById("validEmail").innerHTML =
    //   emailValue);
    console.log(mainContent);
  } else {
    const error = document.getElementById("error");
    error.innerHTML = "メール書式が正しくない！！！";
    error.style.fontSize = "1rem";
    error.style.marginTop = "1rem";
  }
});

// ----------------------------------------VIEW MORE BUTTON------------------------------------------
// VIEW MORE KINH NGHIEM
let flagKinhNghiem = true;
let viewContentBtnKinhNghiem = document.getElementById("viewMoreBtnKinhNghiem");
// View More KINH NGHIEM
function viewMoreKinhNghiem() {
  if (flagKinhNghiem) {
    viewContentBtnKinhNghiem.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-kinhNghiem").style.height = "575px";
    document
      .querySelector(".hidden-content-kinhNghiem")
      .classList.remove("hidden");
    flagKinhNghiem = false;
  } else if (!flagKinhNghiem) {
    viewContentBtnKinhNghiem.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-kinhNghiem").style.height = "140px";
    document
      .querySelector(".hidden-content-kinhNghiem")
      .classList.add("hidden");
    flagKinhNghiem = true;
  }
}

// VIEWMOREKYNANG
let flagKyNang = true;
let viewContentBtnKyNang = document.getElementById("viewMoreBtnKyNang");
// View More Ky Nang
function viewMoreKyNang() {
  if (flagKyNang) {
    viewContentBtnKyNang.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-kyNang").style.height = "575px";
    document.querySelector(".hidden-content-kyNang").classList.remove("hidden");
    flagKyNang = false;
  } else if (!flagKyNang) {
    viewContentBtnKyNang.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-kyNang").style.height = "140px";
    document.querySelector(".hidden-content-kyNang").classList.add("hidden");
    flagKyNang = true;
  }
}

// VIEW MORE NGON NGU
let flagNgonNgu = true;
let viewContentBtnNgonNgu = document.getElementById("viewMoreBtnNgonNgu");
// View More Ky Nang
function viewMoreNgonNgu() {
  if (flagNgonNgu) {
    viewContentBtnNgonNgu.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-ngonNgu").style.height = "575px";
    document
      .querySelector(".hidden-content-ngonNgu")
      .classList.remove("hidden");
    flagNgonNgu = false;
  } else if (!flagNgonNgu) {
    viewContentBtnNgonNgu.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-ngonNgu").style.height = "140px";
    document.querySelector(".hidden-content-ngonNgu").classList.add("hidden");
    flagNgonNgu = true;
  }
}

// VIEW MORE HOAT DONG - Tablet
let flagHoatDongMd = true;
let viewContentBtnHoatDongMd = document.getElementById("viewMoreBtnHoatDongMd");
// View More Ky Nang
function viewMoreHoatDongMd() {
  if (flagHoatDongMd) {
    viewContentBtnHoatDongMd.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-hoatDongMd").style.height = "575px";
    document
      .querySelector(".hidden-content-hoatDongMd")
      .classList.remove("hidden");
    flagHoatDongMd = false;
  } else if (!flagHoatDongMd) {
    viewContentBtnHoatDongMd.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-hoatDongMd").style.height = "140px";
    document
      .querySelector(".hidden-content-hoatDongMd")
      .classList.add("hidden");
    flagHoatDongMd = true;
  }
}

// VIEW MORE HOAT DONG - Laptop
let flagHoatDong = true;
let viewContentBtnHoatDong = document.getElementById("viewMoreBtnHoatDong");
// View More Ky Nang
function viewMoreHoatDong() {
  if (flagHoatDong) {
    viewContentBtnHoatDong.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-hoatDong").style.height = "575px";
    document
      .querySelector(".hidden-content-hoatDong")
      .classList.remove("hidden");
    flagHoatDong = false;
  } else if (!flagHoatDong) {
    viewContentBtnHoatDong.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-hoatDong").style.height = "140px";
    document.querySelector(".hidden-content-hoatDong").classList.add("hidden");
    flagHoatDong = true;
  }
}

// VIEW MORE HOC VAN
let flagHocVan = true;
let viewContentBtnHocVan = document.getElementById("viewMoreBtnHocVan");
// View More Ky Nang
function viewMoreHocVan() {
  if (flagHocVan) {
    viewContentBtnHocVan.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-hocVan").style.height = "575px";
    document.querySelector(".hidden-content-hocVan").classList.remove("hidden");
    flagHocVan = false;
  } else if (!flagHocVan) {
    viewContentBtnHocVan.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-hocVan").style.height = "140px";
    document.querySelector(".hidden-content-hocVan").classList.add("hidden");
    flagHocVan = true;
  }
}

// VIEW MORE SO THICH
let flagSoThich = true;
let viewContentBtnSoThich = document.getElementById("viewMoreBtnSoThich");
// View More Ky Nang
function viewMoreSoThich() {
  if (flagSoThich) {
    viewContentBtnSoThich.innerHTML = `<i class="fa-solid fa-caret-up" style="margin-right: 5px;"></i>非表示`;
    document.querySelector(".conitem-soThich").style.height = "575px";
    document
      .querySelector(".hidden-content-soThich")
      .classList.remove("hidden");
    flagSoThich = false;
  } else if (!flagSoThich) {
    viewContentBtnSoThich.innerHTML = `<i class="fa-solid fa-caret-down" style="margin-right: 5px;"></i>表示`;
    document.querySelector(".conitem-soThich").style.height = "140px";
    document.querySelector(".hidden-content-soThich").classList.add("hidden");
    flagSoThich = true;
  }
}

// ----------------------------------------VIEW MORE BUTTON------------------------------------------
