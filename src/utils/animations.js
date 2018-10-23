import { TweenMax, Power3 } from "gsap";

export const introPageAnimation = (node, path) => {
  switch (node.id) {
    case "about": {
      aboutIntroAnimation();
      break;
    }
    case "craftmanship": {
      craftmanshipIntroAnimation();
      break;
    }
    case "collection": {
      if (path.split("/").length < 3) {
        collectionIntroAnimation(node);
      }
      break;
    }
    case "resources": {
      if (path.split("/").length < 3) {
        resourcesIntroAnimation();
      }
      break;
    }
    default:
      return null;
  }
};

export const outroPageAnimation = (node, path) => {
  switch (node.id) {
    case "about": {
      aboutOutroAnimation();
      break;
    }
    case "craftmanship": {
      craftmanshipOutroAnimation();
      break;
    }
    case "collection": {
      if (path.split("/").length < 3) {
        collectionOutroAnimation();
      }

      break;
    }
    case "resources": {
      if (path.split("/").length < 3) {
        resourcesOutroAnimation();
      }
      break;
    }
    default:
      return null;
  }
};

// export const contactAnimation = () => {
//   TweenMax.fromTo(
//     "#contactwindow",
//     0.3,
//     { css:{marginTop: 100%} },
//     { css:{marginTop: 0}, ease: Power3.easeOut}
//   )
// }

const aboutIntroAnimation = () => {
  TweenMax.fromTo(
    "#about",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const aboutOutroAnimation = () => {
  TweenMax.fromTo(
    "#about",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

const craftmanshipIntroAnimation = () => {
  TweenMax.fromTo(
    "#craftmanship",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const craftmanshipOutroAnimation = () => {
  TweenMax.fromTo(
    "#craftmanship",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

const collectionIntroAnimation = path => {
  TweenMax.fromTo(
    "#collection",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const collectionOutroAnimation = () => {
  TweenMax.fromTo(
    "#collection",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

// const collectionSubIntro = () => {
//   console.log("subintro");
//   // TweenMax.fromTo(
//   //   "#collection .collectionList",
//   //   0.4,
//   //   { opacity: 0 },
//   //   { opacity: 1, ease: Power3.easeOut, delay: 0.6 }
//   // );
// };

// const collectionSubOutro = () => {
//   // TweenMax.fromTo(
//   //   "#resources .sub-nav",
//   //   0.4,
//   //   { opacity: 0 },
//   //   { opacity: 1, ease: Power3.easeOut, delay: 0.4 }
//   // );
//   TweenMax.fromTo(
//     "#collection .collectionList",
//     0.4,
//     { opacity: 1 },
//     { opacity: 0, ease: Power3.easeOut }
//   );
// };

const resourcesIntroAnimation = () => {
  TweenMax.fromTo(
    "#resources",
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  );
};

const resourcesOutroAnimation = () => {
  TweenMax.fromTo(
    "#resources",
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  );
};

// const resourcesSubIntro = () => {
//   //console.log("called");
//   // TweenMax.fromTo(
//   //   "#resources .sub-nav",
//   //   0.4,
//   //   { opacity: 1 },
//   //   { opacity: 0, ease: Power3.easeOut }
//   // );
//   TweenMax.fromTo(
//     "#resources .collectionList",
//     0.4,
//     { opacity: 0 },
//     { opacity: 1, ease: Power3.easeOut, delay: 0.6 }
//   );
// };

// const resourcesSubOutro = () => {
//   // TweenMax.fromTo(
//   //   "#resources .sub-nav",
//   //   0.4,
//   //   { opacity: 0 },
//   //   { opacity: 1, ease: Power3.easeOut, delay: 0.4 }
//   // );
//   TweenMax.fromTo(
//     "#resources .collectionList",
//     0.4,
//     { opacity: 1 },
//     { opacity: 0, ease: Power3.easeOut }
//   );
// };
