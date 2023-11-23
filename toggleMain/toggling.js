const main = document.querySelectorAll(".main");

const tile = document.querySelectorAll(".header__tile");

const homeScreen = document.getElementById("homeScreen");

const contact = document.querySelector(".main--contact");


export const Opening = (div) => {
  setTimeout(function() {
    div.classList.remove("hideAnimation", "display--off")
    div.classList.add("open")
  }, 750)
}

export const OpenFast = (div) => {
  div.classList.remove("hideAnimation", "display--off");
  div.classList.add("openNoAnimation");
}

export const Hiding = (div) => {
  div.classList.replace("open", "hideAnimation");
  setTimeout(function() {
    div.classList.add("display--off");
  }, 750)
}

export const hideFast = (div) => {
  div.classList.remove("open", "openNoAnimation", "hideAnimation");
  div.classList.add("display--off");
}

export const tileSwitchOn = (target) => {
  tile.forEach(function(li) {
    if (li.getAttribute("data-target") === target) {
      li.classList.add("header__tile--focused", "header__tile--hovered"); 
    } else {
      li.classList.remove("header__tile--focused", "header__tile--hovered");
    }
  });
}

export const tileSwitchOff = (li) => {
  tile.forEach(function(li) {
    li.classList.remove("header__tile--focused", "header__tile--hovered");
  });
  homeScreen.classList.add("header__tile--focused", "header__tile--hovered");
};

if (matchMedia) {
  const mq = window.matchMedia("(max-width: 980px)");
  mq.addEventListener("change", widthChange);
  widthChange(mq); 
}

export function widthChange(mq) {

  if (mq.matches) {
    main.forEach(function(div) {
      OpenFast(div);
      contact.classList.replace("openNoAnimation", "display--off");
    });
  } else {
      main.forEach(function(div) {
        if (div.id !== "home") {
          hideFast(div);
          tileSwitchOff();
       }
    })
  }
  history.pushState(null, null, "#home");
};


//export function changeHash(desktopWidth) {
//
//    if (desktopWidth.matches) {
//      console.log("frčim typičo");
//      const href = window.location.href 
//      main.forEach(function(div) {
//        if (href.includes(div.id)) {
//          Opening(div);
//          console.log("dopiči už")
//        } else {
//          Hiding(div);
//        }
//    });
//  }
//}
//
//const desktopWidth = window.matchMedia("(min-width: 980px)");
//changeHash(desktopWidth);
//desktopWidth.addEventListener("hashchange", changeHash); 
//
//
//console.log(desktopWidth);



// if (matchMedia) {
//   const desktopWidth = window.matchMedia("(min-width: 980px)");
//   desktopWidth.addEventListener("hashchange", changeHash);
//   changeHash(desktopWidth); 
// }
// 
// export function changeHash(desktopWidth) {
// 
//     if (desktopWidth.matches) {
//       console.log("frčim typičo");
//       const href = window.location.href 
//       main.forEach(function(div) {
//         if (href.includes(div.id)) {
//           Opening(div);
//         } else {
//           Hiding(div);
//         }
//     });
//   }
// }