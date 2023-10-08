let t;// ========================
function e(t){return fetch(t).then(t=>{if(!t.ok&&"Not Found"===t.statusText)throw Error("Something Wrong");return t.json()}).catch(t=>{console.log(t)})}// ========================
// ADD BOOKS DATA TO CARDS===========================================
function o(t,e){t.then(t=>{let o=t.items;e&&o.forEach(t=>{let o=`EGP${t.saleInfo.listPrice?.amount.toFixed(2)}`;if("NOT_FOR_SALE"===t.saleInfo.saleability&&(o="NOT AVAILABLE"),"NOT_FOR_SALE"!==t.saleInfo.saleability){let a=`<div class="col">
        <div class="card h-100">
        <a class="img-container"
         href="./singleBook.html?productId=${decodeURIComponent(t.id)}
        ">
          <img
            src=${t.volumeInfo.imageLinks?.thumbnail}
            class="card-img-top mx-auto "
            alt="book cover"
          />
         
          </a>
          <div class="card-body">
            <h5 class="card-title mb-3 "><a class="text-unstyled text-dark" href="./singleBook.html?productId=${decodeURIComponent(t.id)}
            " >${t.volumeInfo.title}</a></h5>
            <h6 class="card-author mb-3">${t.volumeInfo?.authors}</h6>
            <p class="card-text card-price">
              ${o}
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary"
              >Last updated 3 days ago</small
            >
          </div>
        </div>
      </div>`;e.innerHTML+=a}})})}// GLOBAL FUNCTIONS ##########################
AOS.init();// ========================
// dark and light mode===============================================
let a=document.querySelector(".top-nav__switch-input"),n=document.querySelector(".top-nav__theme-text"),s=document.querySelector(".top-nav__theme-icon");a.addEventListener("change",t=>{let e=t.target.checked;c(e?"dark":"light")});const i=window.document.documentElement,l=window.localStorage.getItem("theme");if(l)c(l);else{let t=function(){let t=window.matchMedia("(prefers-color-scheme: dark)").matches;return t?"dark":"light"}();c(t)}function c(t){window.localStorage.setItem("theme",t),"dark"===t?(a.checked=!0,n.textContent="Dark Mode",s.classList.replace("fa-sun","fa-moon"),i.dataset.theme=t):(n.textContent="Light Mode",s.classList.replace("fa-moon","fa-sun"),i.setAttribute("data-theme",t))}// ========================
//  ADD TO CART TO localSTORAGE==================================
let r=g("cart")||[];function d(){let t=document.querySelectorAll(".add-carts");t.forEach(function(t){f(t,r,"cart")})}// ========================
// ADD TO WISH TO localSTORAGE==================================
let u=g("wish")||[];function m(){let t=document.querySelectorAll(".add-wish");t.forEach(function(t){f(t,u,"wish")})}// ========================
function f(t,e,o){t.addEventListener("click",t=>{// e.target.classList.add("disabled");
let a=t.target.dataset.id,n=e.findIndex(t=>t.id===a);-1!==n?e[n].count++:e.push({id:a,count:1}),y(e,o),b()})}// ===============================
// update counts of wish and cart=================================
const h=document.querySelector(".cart-count"),p=document.querySelector(".wish-count");function b(){let t=[...new Set(g("cart"))],e=[...new Set(g("wish"))];h.innerText=t.length||0,p.innerText=e.length||0}// ========================
// ========================
// DELETE ITEM FROM localSTORAGE==================================
function _(t){document.querySelectorAll(".deleteBtn").forEach(e=>{!// ========================================
function(t,e){t.addEventListener("click",t=>{let o=t.target.dataset.id,a=t.target.dataset.index;$("#"+e+"-"+o).remove();let n=g(e);n.splice(a,1),y(n,e),b(),window.location.reload()})}(e,t)});// window.location.reload();
}// ========================
function g(t="tasks"){return JSON.parse(localStorage.getItem(t))||[]}// ========================
function y(t,e="tasks"){localStorage.setItem(e,JSON.stringify(t))}b();// ========================
// adding year in footer======================================
const v=document.querySelector(".footer-year");// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// HOME PAGE ##################
// ===========================
// COUNT UP FOR STATICS SECTION=====================================
function x(t,e){let o=document.getElementById(t);var a=parseInt(o.innerText);a<e&&(a++,o.innerText=a,setTimeout(function(){x(t,e)},1))}v&&(v.textContent=new Date().getFullYear());const I=document.querySelector(".statics");if(I){let t=new IntersectionObserver((t,e)=>{t.forEach(t=>{t.isIntersecting&&(x("statics__books",642),x("statics__awards",359),x("statics__recycle",457),x("statics__customers",554),x("statics-decimal1",530),x("statics-decimal2",327),x("statics-decimal3",415),e.unobserve(t.target))})},{root:null,rootMargin:"0px",threshold:.5});t&&t.observe(I)}// ========================
// ADDING MONTH TO CAROUSEL SECTION============================================
const w=window.document.querySelectorAll(".current-month"),k=new Date().toLocaleString("en-us",{month:"long"});w.forEach(t=>{t.textContent=k});// =========================
// ADDING BESTSELLERS CARDS=====================================================
const L=document.getElementById("bestsellers-cards");function S(t,o){return e(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyAkKEefa5iChTT8PGGZyMKfk_5Jy6kbu4A&startIndex=${t}&maxResults=${o}`)}o(S(0,30),L);// =========================
// ADDING NEW RELEASES CARDS=====================================================
const E=document.getElementById("new-imgs");S(40,8).then(t=>{let e=t.items;E&&e.forEach(t=>{let e=`<div class="col">
      <div class="card h-100">
        <a class="img-container" href="./singleBook.html?productId=${decodeURIComponent(t.id)}">
        <img
        src=${t.volumeInfo.imageLinks?.thumbnail}
          class="card-img-top mx-auto"
          alt="book cover"
        />
      </a>
      </div>
    </div>`;E.innerHTML+=e})});// ===============================
// SCROLL Y DIRECTIONS======================================================
const T=document.querySelector(".scroll-top");T&&(T.addEventListener("click",function(){window.scroll({top:0,left:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){0===window.scrollY?T.classList.add("d-none"):T.classList.remove("d-none")}),0===window.scrollY&&T.classList.add("d-none"));// ===============================
// SCROLL X DIRECTIONS======================================================
const q=document.querySelector(".scroll-right"),A=document.querySelector(".scroll-left"),P=document.querySelector(".section__cards");(q||A)&&(q.addEventListener("click",function(){P.scrollBy({left:100,behavior:"smooth"}),A.classList.remove("d-none"),P.scrollLeft==P.scrollWidth-P.clientWidth?q.classList.add("d-none"):q.classList.remove("d-none")}),A.addEventListener("click",function(){P.scrollBy({left:-100,behavior:"smooth"}),q.classList.remove("d-none"),0===P.scrollLeft&&A.classList.add("d-none")}),0===P.scrollLeft&&A.classList.add("d-none"));// ========================
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// ABOUT PAGE ##################
const B=document.querySelector(".team__members");let N=e("https://dummyjson.com/users"),O=[];B&&N.then(t=>{O.push(...t.users),// console.log(users);
// ===========================
function(t){t.forEach(t=>{B.innerHTML+=`<figure
    class="col-md-4 col col-12"
    >
    <img src="${t.image}" class="img-fluid mx-auto" alt="person image" />
  <figcaption class="mt-4">
  <h6 class="team__name" > ${t.firstName} ${t.lastName} </h6>
  <p class="team__text text-primary">${t.company.title}</p>
  </figcaption>
  </figure>`})}(O.slice(0,3))});// ============================================================================================================================================
// ========================
const F=document.querySelector(".search__input"),M=document.querySelector(".search__btn"),R=document.querySelector(".search__xmark"),C=document.getElementById("author"),H=document.getElementById("show-more"),G=document.querySelector(".error-msg");document.querySelector(".img-container");let U=[],z="author";(M||R)&&(M.addEventListener("click",// =========================
// search for input value author or book title===========================
function(){// errorMessage.classList.add("d-none");
let t=F.value;z=C.checked?"author":"title";let o=e(`https://www.googleapis.com/books/v1/volumes?q=in${z}:${t}&key=AIzaSyAkKEefa5iChTT8PGGZyMKfk_5Jy6kbu4A`);""!==t&&o.then(t=>{void 0!=(U=t.items)?(D.innerHTML="",H.classList.add("d-none"),Y()):(G.classList.remove("d-none"),H.classList.remove("d-none"))})}),R.addEventListener("click",// =========================
// CLEAR SEARCH INPUT=====================================================
function(){F.value="",D.innerHTML="",G.classList.add("d-none"),H.classList.remove("d-none"),W()}));// =========================
// ADDING BOOKS CARDS=====================================================
const D=document.getElementById("book-cards");let J=8;H&&H.addEventListener("click",function(){D.innerHTML="",J+=8,Y()});let K=S(0,40);function W(){K.then(t=>{(U=[]).push(...t.items),Y()})}// ========================================
function Y(){let t=U.slice(0,J);40==t.length&&H.classList.add("d-none"),D&&t.forEach(t=>{// =======================
let e=`EGP${t.saleInfo.listPrice?.amount.toFixed(2)}`;"NOT_FOR_SALE"==t.saleInfo.saleability&&(e="Not Available");// =======================
let o=`<div class="col">
      <div class="card h-100">
      <a class="img-container"
       href="./singleBook.html?productId=${decodeURIComponent(t.id)}
      ">
        <img
          src=${t.volumeInfo.imageLinks?.thumbnail}
          class="card-img-top mx-auto "
          alt="book cover"
        />

        </a>
        <div class="card-body">
          <h5 class="card-title mb-3 "><a class="text-unstyled text-dark" href="./singleBook.html?productId=${decodeURIComponent(t.id)}
          " >${t.volumeInfo.title}</a></h5>
          <h6 class="card-author mb-3">${t.volumeInfo?.authors}</h6>
          <p class="card-text card-price">
            ${e}
          </p>
        </div>
        <div class="card-footer bg-transparent border-0 card__buttons d-flex flex-column ">

              <button type="button" data-id=${t.id} class="add-carts btn btn-primary text-light my-3 p-2">
                <i class="fa-solid fa-cart-arrow-down"></i> Add to cart
              </button>
              <button type="button" data-id=${t.id} class="add-wish btn btn-outline-primary my-3 p-2">
                <i class="fa-solid fa-heart"></i> Add to wish
              </button>

        </div>
      </div>
    </div>`;// ========================
D.innerHTML+=o,d(),m()})}// =======================================
W();// ========================================================================================================================================================================
// import { specificData, readFromStorage, deleteTableBtn } from "./main.js";
// ========================
let j=S(0,40),V=0,Z=0;$("#cart")&&j.then(t=>{let e=g("cart"),o=[];for(let a=0;a<e.length;a++){let n=t.items.filter((t,o)=>t.id==e[a].id);n&&(n[0].count=e[a].count||1),o.push(n[0]);// console.log(cartArray);
}$(o).each((t,e)=>{let o,a,n,s;"NOT_FOR_SALE"==e.saleInfo.saleability?(s="",o="Not Available",n=0,a=0):(s="EGP",o=`EGP${e.saleInfo.listPrice?.amount.toFixed(2)}`,n=`${(e.saleInfo.listPrice?.amount*e.count).toFixed(2)}`,a=`${e.saleInfo.listPrice?.amount.toFixed(0)}`),// console.log(book.count);
// =========================================================
// let singlePrice = book[0].id;
$(".cart__content").append(`<tr data-id="${e.id}" id="cart-${e.id}" class="cart-products table__products">
        <th  id="cart__closeButton" class="table__deleteIem"  scope="row">
          <button  class="border-0 bg-transparent" >
            <i data-index= ${t} data-id=${e.id}  class="deleteBtn fa-solid fa-circle-xmark fs-2"></i>
          </button>
        </th>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(e.id)}">
            <img src="${e.volumeInfo.imageLinks?.thumbnail}" class="table__img cart-img mx-auto " alt="book cover"/>
          </a>
        </td>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(e.id)}"
            class="text-decoration-none ">${e.volumeInfo.title}
          </a>
          <br/>
          <a
          href="../books.html"
            class="text-decoration-none "
            >${e.volumeInfo?.authors}</a>
        </td>
        <td class="product-price" colspan="1"><span class="cart__singlePrice">${o}</span>
          
        </td>
        <td class="quantity">
          <form>
            <input value=${e.count}  type="number" id="quantity"  name="quantity"
              min="1" data-price=".${a}"  data-singlePrice="${a}"
              class="cart__box border rounded border-dark text-dark  fw-bold text-center"
            />
          </form>
        </td>
        <td class="product-totalPric fw-bold"colspan="1"><span>${s}</span><span class="product-totalPrice fw-bold ${a}" >${n}</span>
        
        </td>
      </tr>`),"NOT_FOR_SALE"!==e.saleInfo.saleability&&(V+=Number(e.saleInfo.listPrice?.amount.toFixed(2)))}),$('input[data-singleprice="0"]').each(function(){$(this).prop("disabled",!0).attr("min",0).val(0)}),_("cart"),// console.log(totalPrice);
$(".sub-totalPrice__price").html("EGP"+V.toFixed(2)),$(".cart__box").on("change",function(t){let e,o=$($(this).attr("data-price")),a=$(this).attr("data-singlePrice"),n=Number($(this).val());$(o).html((a*n).toFixed(2)),e=0,$(".product-totalPrice").each((t,o)=>{e+=Number($(o).html())}),$(".sub-totalPrice__price").html("EGP"+e.toFixed(2))})}),// ===============================================================
j.then(t=>{let e=g("wish"),o=[];for(let a=0;a<e.length;a++){let n=t.items.filter((t,o)=>t.id==e[a].id);o.push(n[0])}// console.log(wishArray);
let a=[...new Set(o)];console.log(a),$(a).each((t,e)=>{Z="NOT_FOR_SALE"==e.saleInfo.saleability?"Not Available":`EGP${e.saleInfo.listPrice?.amount.toFixed(2)}`,// =========================================================
// let singlePrice = book[0].id;
$(".wish__content").append(`<tr id="wish-${e.id}" class="wish-products table__products">
        <th  id="wish__closeButton" class="table__deleteIem"  scope="row">
          <button  class="border-0 bg-transparent" >
            <i data-index= ${t} data-id=${e.id}  class="deleteBtn fa-solid fa-circle-xmark fs-2"></i>
          </button>
        </th>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(e.id)}">
            <img src="${e.volumeInfo.imageLinks?.thumbnail}" class="table__img wish-img mx-auto " alt="book cover"/>
          </a>
        </td>
        <td>
          <a href="./singleBook.html?productId=${decodeURIComponent(e.id)}"
            class="text-decoration-none ">${e.volumeInfo.title}
          </a>
          <br/>
          <a
          href="../books.html"
            class="text-decoration-none "
            >${e.volumeInfo?.authors}</a>
        </td>
        <td class="product-price fw-bold" colspan="1"><span class="wish__singlePrice">${Z}</span>
        </td>
        <td class="wish-btn fw-bold" colspan="1">
        <button class="add-carts btn btn-primary text-light" data-id=${e.id}>
              <i class="fa-solid fa-cart-plus"></i>
        </button>
        </td>
      </tr>`)}),_("wish"),d()}),// ========================================================================================================================================================================
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
// console.log(bookButtons);
// getPromiseData(0, 20);
function(t){e(`https://www.googleapis.com/books/v1/volumes/${t}`).then(t=>{let e=`EGP${t?.saleInfo?.listPrice?.amount.toFixed(2)}`;t.saleInfo?.saleability=="NOT_FOR_SALE"&&(e="NOT AVAILABLE"),(Q||X||te||tt||to||ta||tn||ts)&&(Q.innerText=t.volumeInfo.title,// ===================
X.src=t.volumeInfo.imageLinks.small,t.volumeInfo.industryIdentifiers.forEach(t=>{// ===================
te.innerHTML+=`<p>${t.type.toUpperCase()}:<span class="book__isbn ms-2 fw-bold">${t.identifier}</span></p>`}),// ===================
tn.innerText=`${e}`,// ===================
tt.innerText=t.volumeInfo.title,// ===================
ta.innerText=t.volumeInfo.authors,"NOT_FOR_SALE"!==t.saleInfo.saleability?(ts.innerHTML='<i class="fa-solid fa-circle-check text-success"></i> Available',ts.classList.add("text-success")):(ts.innerHTML='<i class="fa-solid fa-circle-xmark text-danger "></i> Not Available',ts.classList.add("text-danger"))),tc&&(tc.innerHTML=`<button
        type="button" data-id=${t.id}
        class="add-carts add-cart-singleProduct btn btn-primary text-light my-3"
        >
        <i class="fa-solid fa-cart-arrow-down"></i> Add to cart
        </button>
        <button
        type="button" data-id=${t.id}
        class="add-wish btn btn-outline-primary my-3"
        >
        <i class="fa-solid fa-heart"></i> Add to wish
        </button>`),(ti||tl)&&(ti.innerHTML=t.volumeInfo.description),// ===================
tl.innerHTML=`
       <p class="text-capitalize information__text text-secondary">
        price: <span class="information__price fw-bold">${e}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        publisher:
        <span class="information__publisher fw-bold">${t.volumeInfo?.publisher}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        publisher date:
        <span class="information__date fw-bold">${t.volumeInfo?.publishedDate}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        pages: <span class="information__pages fw-bold">${t.volumeInfo?.pageCount}</span>
        </p>
        <p class="text-capitalize information__text text-secondary">
        language: <span class="information__language fw-bold">${t.volumeInfo?.language}</span>
        </p>`,// }
// ===================
// console.log(item.volumeInfo.imageLinks.large);
// console.log(item.id);
d(t),m(t)});// ddd();
}(null==(t=RegExp("[?&]productId=([^&#]*)").exec(window.location.href))?null:t[1]||0);const Q=document.getElementById("book-name"),X=document.querySelector(".book__img"),tt=document.querySelector(".book__name"),te=document.querySelector(".book__isbn"),to=document.querySelector(".book__isbn13"),ta=document.querySelector(".book__author"),tn=document.querySelector(".book__price"),ts=document.querySelector(".book__availability"),ti=document.querySelector(".book__description-text"),tl=document.querySelector(".information__details"),tc=document.querySelector(".book__buttons");// =========================
// ADDING BESTSELLERS CARDS=====================================================
let tr=Math.floor(34*Math.random());const td=document.getElementById("related-cards");o(S(tr,tr+5),td);// ========================================
//# sourceMappingURL=index.2ba6bee7.js.map

//# sourceMappingURL=index.2ba6bee7.js.map
