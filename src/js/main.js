// GLOBAL FUNCTIONS ##########################

AOS.init();
// ========================

function getPromiseData(url) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        if (res.statusText === "Not Found") {
          throw new Error("Something Wrong");
        }
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
// ========================
// ADD BOOKS DATA TO CARDS===========================================
function promiseToCard(promiseData, sectionHtml) {
  promiseData.then((data) => {
    let itemsData = data.items;
    if (sectionHtml) {
      itemsData.forEach((item) => {
        let price = `EGP${item.saleInfo.listPrice?.amount.toFixed(2)}`;
        if (item.saleInfo.saleability === "NOT_FOR_SALE") {
          price = "NOT AVAILABLE";
        }
        if (item.saleInfo.saleability !== "NOT_FOR_SALE") {
          let addDataToCards = `<div class="col">
        <div class="card h-100">
        <a class="img-container"
         href="./singleBook.html?productId=${decodeURIComponent(item.id)}
        ">
          <img
            src=${item.volumeInfo.imageLinks?.thumbnail}
            class="card-img-top mx-auto "
            alt="book cover"
          />
         
          </a>
          <div class="card-body">
            <h5 class="card-title mb-3 "><a class="text-unstyled text-dark" href="./singleBook.html?productId=${decodeURIComponent(
              item.id
            )}
            " >${item.volumeInfo.title}</a></h5>
            <h6 class="card-author mb-3">${item.volumeInfo?.authors}</h6>
            <p class="card-text card-price">
              ${price}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary"
              >Last updated 3 days ago</small
            >
          </div>
        </div>
      </div>`;

          sectionHtml.innerHTML += addDataToCards;
        }
      });
    }
  });
}
// ========================
// dark and light mode===============================================
let switchInput = document.querySelector(".top-nav__switch-input");
let themeText = document.querySelector(".top-nav__theme-text");
let themeIcon = document.querySelector(".top-nav__theme-icon");

switchInput.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  const theme = isChecked ? "dark" : "light";
  setMode(theme);
});

const htmlElement = window.document.documentElement;
const themeMode = window.localStorage.getItem("theme");

if (themeMode) {
  setMode(themeMode);
} else {
  const systemTheme = getCurrentSystemMode();
  setMode(systemTheme);
}

function getCurrentSystemMode() {
  const isSystemModeDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  // console.log("isSystemModeDark => ", isSystemModeDark);

  const systemTheme = isSystemModeDark ? "dark" : "light";
  return systemTheme;
}

function setMode(theme) {
  window.localStorage.setItem("theme", theme);
  if (theme === "dark") {
    switchInput.checked = true;
    themeText.textContent = "Dark Mode";
    themeIcon.classList.replace("fa-sun", "fa-moon");
    htmlElement.dataset.theme = theme;
  } else {
    themeText.textContent = "Light Mode";
    themeIcon.classList.replace("fa-moon", "fa-sun");
    htmlElement.setAttribute("data-theme", theme);
  }
}

// ========================
//  FILTER DATA COMING FROM localSTORAGE==================================
// ===============================================================
function filterDataStorage(data, items) {
  let booksArray = [];
  for (let i = 0; i < items.length; i++) {
    const item = data.items.filter((book, index) => book.id == items[i]);
    return booksArray.push(item[0]);
  }
}
// ========================
//  ADD TO CART TO localSTORAGE==================================
let idCartArray = readFromStorage("cart") || [];
function addToCartBtn() {
  const addCartBtn = document.querySelectorAll(".add-carts");
  addCartBtn.forEach(function (button) {
    clickAddToLocalStorage(button, idCartArray, "cart");
  });
}
// ========================
// ADD TO WISH TO localSTORAGE==================================
let idWishArray = readFromStorage("wish") || [];
function addToWishBtn() {
  const addCartBtn = document.querySelectorAll(".add-wish");
  addCartBtn.forEach(function (button) {
    clickAddToLocalStorage(button, idWishArray, "wish");
  });
}
// ========================

function clickAddToLocalStorage(button, arrayName, localKeyName) {
  button.addEventListener("click", (e) => {
    // e.target.classList.add("disabled");
    let dataId = e.target.dataset.id;

    let existingIndex = arrayName.findIndex((item) => item.id === dataId);

    if (existingIndex !== -1) {
      arrayName[existingIndex].count++;
    } else {
      arrayName.push({ id: dataId, count: 1 });
    }
    writeToStorage(arrayName, localKeyName);
    updateCartAndWishCount();
  });
}

// ===============================
// update counts of wish and cart=================================
const cartLengthElement = document.querySelector(".cart-count");
const wishLengthElement = document.querySelector(".wish-count");
updateCartAndWishCount();
function updateCartAndWishCount() {
  let cartLengthNumber = [...new Set(readFromStorage("cart"))];
  let wishLengthNumber = [...new Set(readFromStorage("wish"))];

  cartLengthElement.innerText = cartLengthNumber.length || 0;
  wishLengthElement.innerText = wishLengthNumber.length || 0;
}

// ========================
// ========================
// DELETE ITEM FROM localSTORAGE==================================
function deleteTableBtn(updateLocalName) {
  let delCartBtn = document.querySelectorAll(".deleteBtn");
  delCartBtn.forEach((element) => {
    deleteElement(element, updateLocalName);
  });
  // window.location.reload();
}
// ========================================
function deleteElement(element, updateLocalName) {
  element.addEventListener("click", (e) => {
    let dataId = e.target.dataset.id;
    let dataIndex = e.target.dataset.index;
    $("#" + updateLocalName + "-" + dataId).remove();
    let all = readFromStorage(updateLocalName);
    all.splice(dataIndex, 1);
    writeToStorage(all, updateLocalName);
    updateCartAndWishCount();
    window.location.reload();
  });
}

// ========================
function readFromStorage(key = "tasks") {
  return JSON.parse(localStorage.getItem(key)) || [];
}
// ========================
function writeToStorage(data, key = "tasks") {
  localStorage.setItem(key, JSON.stringify(data));
}
// ========================
function urlParam(name) {
  let results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return results[1] || 0;
  }
}
// ========================
// adding year in footer======================================
const footerYear = document.querySelector(".footer-year");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// HOME PAGE ##################
// ===========================
// COUNT UP FOR STATICS SECTION=====================================
function countUp(elementId, target) {
  let element = document.getElementById(elementId);
  var current = parseInt(element.innerText);

  if (current < target) {
    current++;
    element.innerText = current;
    setTimeout(function () {
      countUp(elementId, target);
    }, 1); // Adjust the delay as needed
  }
}

const staticsSection = document.querySelector(".statics");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp("statics__books", 642);
      countUp("statics__awards", 359);
      countUp("statics__recycle", 457);
      countUp("statics__customers", 554);
      countUp("statics-decimal1", 530);
      countUp("statics-decimal2", 327);
      countUp("statics-decimal3", 415);
      observer.unobserve(entry.target);
    }
  });
};
if (staticsSection) {
  const observer = new IntersectionObserver(callback, options);
  if (observer) {
    observer.observe(staticsSection);
  }
}
// ========================
// ADDING MONTH TO CAROUSEL SECTION============================================
const currentMonthElements = window.document.querySelectorAll(".current-month");
const currentMonth = new Date().toLocaleString("en-us", { month: "long" });
currentMonthElements.forEach((ele) => {
  ele.textContent = currentMonth;
});
// =========================
// ADDING BESTSELLERS CARDS=====================================================

const bestsellersCards = document.getElementById("bestsellers-cards");
function specificData(startIndex, maxNumber) {
  return getPromiseData(
    `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyAkKEefa5iChTT8PGGZyMKfk_5Jy6kbu4A&startIndex=${startIndex}&maxResults=${maxNumber}`
  );
}

let bestsellersData = specificData(0, 30);
promiseToCard(bestsellersData, bestsellersCards);
// =========================
// ADDING NEW RELEASES CARDS=====================================================
const newReleases = document.getElementById("new-imgs");
let newImgsData = specificData(40, 8);
newImgsData.then((data) => {
  let newData = data.items;
  if (newReleases) {
    newData.forEach((item) => {
      let addDataToimgs = `<div class="col">
      <div class="card h-100">
        <a class="img-container" href="./singleBook.html?productId=${decodeURIComponent(
          item.id
        )}">
        <img
        src=${item.volumeInfo.imageLinks?.thumbnail}
          class="card-img-top mx-auto"
          alt="book cover"
        />
      </a>
      </div>
    </div>`;

      newReleases.innerHTML += addDataToimgs;
    });
  }
});
// ===============================
// SCROLL Y DIRECTIONS======================================================
const scrollButton = document.querySelector(".scroll-top");
if (scrollButton) {
  scrollButton.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", checkScroll);
  if (window.scrollY === 0) {
    scrollButton.classList.add("d-none");
  }
}

function checkScroll() {
  if (window.scrollY === 0) {
    scrollButton.classList.add("d-none");
  } else scrollButton.classList.remove("d-none");
}

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// ===============================
// SCROLL X DIRECTIONS======================================================
const scrollRightButton = document.querySelector(".scroll-right");
const scrollLeftButton = document.querySelector(".scroll-left");
const sectionCards = document.querySelector(".section__cards");
if (scrollRightButton || scrollLeftButton) {
  scrollRightButton.addEventListener("click", scrollToRight);
  scrollLeftButton.addEventListener("click", scrollToLeft);
  if (sectionCards.scrollLeft === 0) {
    scrollLeftButton.classList.add("d-none");
  }
}
let scrollValue = 100;
function scrollToLeft() {
  sectionCards.scrollBy({
    left: -scrollValue,
    behavior: "smooth",
  });

  scrollRightButton.classList.remove("d-none");
  if (sectionCards.scrollLeft === 0) {
    scrollLeftButton.classList.add("d-none");
  }
}

function scrollToRight() {
  sectionCards.scrollBy({
    left: scrollValue,
    behavior: "smooth",
  });
  scrollLeftButton.classList.remove("d-none");

  if (
    sectionCards.scrollLeft ==
    sectionCards.scrollWidth - sectionCards.clientWidth
  ) {
    scrollRightButton.classList.add("d-none");
  } else scrollRightButton.classList.remove("d-none");
}

// ========================
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ABOUT PAGE ##################
const ourTeamElement = document.querySelector(".team__members");
let promiseUserData = getPromiseData(`https://dummyjson.com/users`);
// console.log(promiseUserData);
let itemUserData = [];
if (ourTeamElement) {
  promiseUserData.then((data) => {
    itemUserData.push(...data.users);
    // console.log(itemUserData);
    let users = itemUserData.slice(0, 3);
    // console.log(users);
    createOurTeamSection(users);
  });
}
// ===========================
function createOurTeamSection(data) {
  data.forEach((item) => {
    ourTeamElement.innerHTML += `<figure
    class="col-md-4 col col-12"
    >
    <img src="${item.image}" class="img-fluid mx-auto" alt="person image" />
  <figcaption class="mt-4">
  <h6 class="team__name" > ${item.firstName} ${item.lastName} </h6>
  <p class="team__text text-primary">${item.company.title}</p>
  </figcaption>
  </figure>`;
  });
}
// ============================================================================================================================================
// ========================
const searchInput = document.querySelector(".search__input");
const searchBtn = document.querySelector(".search__btn");
const searchXMark = document.querySelector(".search__xmark");
const authorOption = document.getElementById("author");
const showMoreBtn = document.getElementById("show-more");
const errorMessage = document.querySelector(".error-msg");
const imgContainer = document.querySelector(".img-container");
let itemsData = [];
let searchedBy = "author";

// =========================
if (searchBtn || searchXMark) {
  searchBtn.addEventListener("click", addSearchValue);
  searchXMark.addEventListener("click", deleteSearchInput);
}
// =========================
// search for input value author or book title===========================
function addSearchValue() {
  // errorMessage.classList.add("d-none");
  let inputValue = searchInput.value;
  if (authorOption.checked) {
    searchedBy = "author";
  } else {
    searchedBy = "title";
  }
  let promiseData = getPromiseData(
    `https://www.googleapis.com/books/v1/volumes?q=in${searchedBy}:${inputValue}&key=AIzaSyAkKEefa5iChTT8PGGZyMKfk_5Jy6kbu4A`
  );

  if (inputValue !== "") {
    promiseData.then((data) => {
      itemsData = data.items;
      if (itemsData != undefined) {
        booksCards.innerHTML = "";
        showMoreBtn.classList.add("d-none");
        createCards();
      } else {
        errorMessage.classList.remove("d-none");
        showMoreBtn.classList.remove("d-none");
      }
    });
  }
}

// =========================
// ADDING BOOKS CARDS=====================================================
const booksCards = document.getElementById("book-cards");

let lastIndex = 8;
if (showMoreBtn) {
  showMoreBtn.addEventListener("click", showMore);
}

let booksData = specificData(0, 40);

function showMore() {
  booksCards.innerHTML = "";
  lastIndex = lastIndex + 8;
  createCards();
}
// =======================================
allBooks();
function allBooks() {
  booksData.then((data) => {
    itemsData = [];
    itemsData.push(...data.items);
    createCards();
  });
}

// =========================
// CLEAR SEARCH INPUT=====================================================
function deleteSearchInput() {
  searchInput.value = "";
  booksCards.innerHTML = "";
  errorMessage.classList.add("d-none");
  showMoreBtn.classList.remove("d-none");

  allBooks();
}
// ========================================
function createCards() {
  let showingData = itemsData.slice(0, lastIndex);

  if (showingData.length == 40) {
    showMoreBtn.classList.add("d-none");
  }
  if (booksCards) {
    showingData.forEach((item) => {
      // =======================
      let price = `EGP${item.saleInfo.listPrice?.amount.toFixed(2)}`;
      if (item.saleInfo.saleability == "NOT_FOR_SALE") {
        price = "Not Available";
      }
      // =======================

      let addDataCards = `<div class="col">
      <div class="card h-100">
      <a class="img-container"
       href="./singleBook.html?productId=${decodeURIComponent(item.id)}
      ">
        <img
          src=${item.volumeInfo.imageLinks?.thumbnail}
          class="card-img-top mx-auto "
          alt="book cover"
        />

        </a>
        <div class="card-body">
          <h5 class="card-title mb-3 "><a class="text-unstyled text-dark" href="./singleBook.html?productId=${decodeURIComponent(
            item.id
          )}
          " >${item.volumeInfo.title}</a></h5>
          <h6 class="card-author mb-3">${item.volumeInfo?.authors}</h6>
          <p class="card-text card-price">
            ${price}
          </p>
        </div>
        <div class="card-footer bg-transparent border-0 card__buttons d-flex flex-column ">

              <button type="button" data-id=${
                item.id
              } class="add-carts btn btn-primary text-light my-3 p-2">
                <i class="fa-solid fa-cart-arrow-down"></i> Add to cart
              </button>
              <button type="button" data-id=${
                item.id
              } class="add-wish btn btn-outline-primary my-3 p-2">
                <i class="fa-solid fa-heart"></i> Add to wish
              </button>

        </div>
      </div>
    </div>`;
      // ========================

      booksCards.innerHTML += addDataCards;
      addToCartBtn();
      addToWishBtn();
    });
  }
}
// ========================================================================================================================================================================
// import { specificData, readFromStorage, deleteTableBtn } from "./main.js";
// ========================
let allData = specificData(0, 40);
// console.log(allData);
let totalPrice = 0;
if ($("#cart")) {
  allData.then((data) => {
    const items = readFromStorage("cart");
    // console.log(items[0].id);
    let cartArray = [];
    for (let i = 0; i < items.length; i++) {
      const item = data.items.filter((book, index) => book.id == items[i].id);
      // console.log(item);
      if (item) {
        item[0].count = items[i].count || 1;
      }
      cartArray.push(item[0]);
      // console.log(cartArray);
    }
    $(cartArray).each((i, book) => {
      let price;
      let dataPrice;
      let totPrice;
      let pound;
      if (book.saleInfo.saleability == "NOT_FOR_SALE") {
        pound = "";
        price = "Not Available";
        totPrice = 0;
        dataPrice = 0;
      } else {
        pound = "EGP";
        price = `EGP${book.saleInfo.listPrice?.amount.toFixed(2)}`;
        totPrice = `${(book.saleInfo.listPrice?.amount * book.count).toFixed(
          2
        )}`;
        dataPrice = `${book.saleInfo.listPrice?.amount.toFixed(0)}`;
      }
      // console.log(book.count);
      // =========================================================
      // let singlePrice = book[0].id;
      $(".cart__content").append(
        `<tr data-id="${book.id}" id="cart-${
          book.id
        }" class="cart-products table__products">
        <th  id="cart__closeButton" class="table__deleteIem"  scope="row">
          <button  class="border-0 bg-transparent" >
            <i data-index= ${i} data-id=${
          book.id
        }  class="deleteBtn fa-solid fa-circle-xmark fs-2"></i>
          </button>
        </th>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}">
            <img src="${
              book.volumeInfo.imageLinks?.thumbnail
            }" class="table__img cart-img mx-auto " alt="book cover"/>
          </a>
        </td>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}"
            class="text-decoration-none ">${book.volumeInfo.title}
          </a>
          <br/>
          <a
          href="../books.html"
            class="text-decoration-none "
            >${book.volumeInfo?.authors}</a>
        </td>
        <td class="product-price" colspan="1"><span class="cart__singlePrice">${price}</span>
          
        </td>
        <td class="quantity">
          <form>
            <input value=${
              book.count
            }  type="number" id="quantity"  name="quantity"
              min="1" data-price=".${dataPrice}"  data-singlePrice="${dataPrice}"
              class="cart__box border rounded border-dark text-dark  fw-bold text-center"
            />
          </form>
        </td>
        <td class="product-totalPric fw-bold"colspan="1"><span>${pound}</span><span class="product-totalPrice fw-bold ${dataPrice}" >${totPrice}</span>
        
        </td>
      </tr>`
      );
      if (book.saleInfo.saleability !== "NOT_FOR_SALE") {
        totalPrice += Number(book.saleInfo.listPrice?.amount.toFixed(2));
      }
    });
    filterNotForSale();
    deleteTableBtn("cart");
    calculateTotalPrice();
    updatePrice();
  });
}
// ===============================================================
allData.then((data) => {
  const itemsWish = readFromStorage("wish");
  let wishArray = [];
  for (let i = 0; i < itemsWish.length; i++) {
    const item = data.items.filter((book, index) => book.id == itemsWish[i].id);
    wishArray.push(item[0]);
  }
  // console.log(wishArray);
  let bookWishArray = [...new Set(wishArray)];
  // console.log(bookWishArray);
  $(bookWishArray).each((i, book) => {
    if (book.saleInfo.saleability == "NOT_FOR_SALE") {
      price = "Not Available";
    } else {
      price = `EGP${book.saleInfo.listPrice?.amount.toFixed(2)}`;
    }
    // =========================================================
    // let singlePrice = book[0].id;
    $(".wish__content").append(
      `<tr id="wish-${book.id}" class="wish-products table__products">
        <th  id="wish__closeButton" class="table__deleteIem"  scope="row">
          <button  class="border-0 bg-transparent" >
            <i data-index= ${i} data-id=${
        book.id
      }  class="deleteBtn fa-solid fa-circle-xmark fs-2"></i>
          </button>
        </th>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}">
            <img src="${
              book.volumeInfo.imageLinks?.thumbnail
            }" class="table__img wish-img mx-auto " alt="book cover"/>
          </a>
        </td>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(book.id)}"
            class="text-decoration-none ">${book.volumeInfo.title}
          </a>
          <br/>
          <a
          href="../books.html"
            class="text-decoration-none "
            >${book.volumeInfo?.authors}</a>
        </td>
        <td class="product-price fw-bold" colspan="1"><span class="wish__singlePrice">${price}</span>
        </td>
        <td class="wish-btn fw-bold" colspan="1">
        <button class="add-carts btn btn-primary text-light" data-id=${book.id}>
              <i class="fa-solid fa-cart-plus"></i>
        </button>
        </td>
      </tr>`
    );
  });
  deleteTableBtn("wish");
  addToCartBtn();
});
// ===============================================================
function calculateTotalPrice() {
  // console.log(totalPrice);
  $(".sub-totalPrice__price").html("EGP" + totalPrice.toFixed(2));
}
// ===========================
// Update price by quantity============================
function updatePrice() {
  $(".cart__box").on("change", function (e) {
    let coun = $($(this).attr("data-price"));
    let singlePrice = $(this).attr("data-singlePrice");
    let count = Number($(this).val());
    let price = singlePrice * count;
    $(coun).html(price.toFixed(2));
    // ===========
    totalCartPrice();
  });
}
// ========================
// total price update===================================
function totalCartPrice() {
  let total = 0;
  let allPrices = $(".product-totalPrice");
  allPrices.each((i, el) => {
    total += Number($(el).html());
  });
  $(".sub-totalPrice__price").html("EGP" + total.toFixed(2));
}
// ================================
function filterNotForSale() {
  $('input[data-singleprice="0"]').each(function () {
    $(this).prop("disabled", true).attr("min", 0).val(0);
  });
}

// ========================================================================================================================================================================
// import {
//   getPromiseData,
//   promiseToCard,
//   addToCartBtn,
//   addToWishBtn,
//   urlParam,
//   readFromStorage,
//   writeToStorage,
// } from "./main.js";

// console.log(urlParam("productId"));

// ========================
getSingleBook(urlParam("productId"));
const bookNameBreadcrumb = document.getElementById("book-name");
const bookImg = document.querySelector(".book__img");
const bookNameHeader = document.querySelector(".book__name");
const bookIsbn = document.querySelector(".book__isbn");
const bookIsbn13 = document.querySelector(".book__isbn13");
const bookAuthorHeader = document.querySelector(".book__author");
const bookPrice = document.querySelector(".book__price");
const bookAvailability = document.querySelector(".book__availability");
const bookDescription = document.querySelector(".book__description-text");
const bookDetails = document.querySelector(".information__details");
const bookButtons = document.querySelector(".book__buttons");
// console.log(bookButtons);

// getPromiseData(0, 20);

function getSingleBook(bookID) {
  getPromiseData(`https://www.googleapis.com/books/v1/volumes/${bookID}`).then(
    (data) => {
      let item = data;
      let price = `EGP${item?.saleInfo?.listPrice?.amount.toFixed(2)}`;
      if (item.saleInfo?.saleability == "NOT_FOR_SALE") {
        price = "NOT AVAILABLE";
      }

      if (
        bookNameBreadcrumb ||
        bookImg ||
        bookIsbn ||
        bookNameHeader ||
        bookIsbn13 ||
        bookAuthorHeader ||
        bookPrice ||
        bookAvailability
      ) {
        bookNameBreadcrumb.innerText = item.volumeInfo.title;
        // ===================
        bookImg.src = item.volumeInfo.imageLinks.small;
        // ===================
        let typeIsbn = item.volumeInfo.industryIdentifiers;
        typeIsbn.forEach((ele) => {
          // ===================
          bookIsbn.innerHTML += `<p>${ele.type.toUpperCase()}:<span class="book__isbn ms-2 fw-bold">${
            ele.identifier
          }</span></p>`;
        });
        // ===================

        bookPrice.innerText = `${price}`;
        // ===================
        bookNameHeader.innerText = item.volumeInfo.title;
        // ===================
        bookAuthorHeader.innerText = item.volumeInfo.authors;
        // ===================
        if (item.saleInfo.saleability !== "NOT_FOR_SALE") {
          bookAvailability.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> Available`;
          bookAvailability.classList.add("text-success");
        } else {
          bookAvailability.innerHTML = `<i class="fa-solid fa-circle-xmark text-danger "></i> Not Available`;
          bookAvailability.classList.add("text-danger");
        }
      }
      // onclick="addToCart(${item.id})"
      // ===================
      if (bookButtons) {
        bookButtons.innerHTML = `<button
        type="button" data-id=${item.id}
        class="add-carts add-cart-singleProduct btn btn-primary text-light my-3"
        >
        <i class="fa-solid fa-cart-arrow-down"></i> Add to cart
        </button>
        <button
        type="button" data-id=${item.id}
        class="add-wish btn btn-outline-primary my-3"
        >
        <i class="fa-solid fa-heart"></i> Add to wish
        </button>`;
      }
      // ===================
      if (bookDescription || bookDetails) {
        bookDescription.innerHTML = item.volumeInfo.description;
      }
      // ===================
      bookDetails.innerHTML = `
       <p class="text-capitalize information__text text-secondary">
        price: <span class="information__price fw-bold">${price}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        publisher:
        <span class="information__publisher fw-bold">${item.volumeInfo?.publisher}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        publisher date:
        <span class="information__date fw-bold">${item.volumeInfo?.publishedDate}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        pages: <span class="information__pages fw-bold">${item.volumeInfo?.pageCount}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        language: <span class="information__language fw-bold">${item.volumeInfo?.language}</span>
        </p>`;
      // }
      // ===================
      // console.log(item.volumeInfo.imageLinks.large);
      // console.log(item.id);
      addToCartBtn(item);
      addToWishBtn(item);
    }
  );
  // ddd();
}

// =========================
// ADDING BESTSELLERS CARDS=====================================================
let randomNumber = Math.floor(Math.random() * 34);

const relatedCards = document.getElementById("related-cards");
let relatedData = specificData(randomNumber, randomNumber + 5);
promiseToCard(relatedData, relatedCards);
// ========================================
