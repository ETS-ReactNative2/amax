import { TweenMax, Power3 } from 'gsap'

export const introPageAnimation = (node, fullPath) => {
  switch (node.id) {
    case 'about': {
      aboutIntroAnimation()
      break
    }
    case 'craftmanship': {
      craftmanshipIntroAnimation()
      break
    }
    case 'collection': {
      collectionIntroAnimation(node)
      break
    }
    case 'resources': {
      resourcesIntroAnimation()
      break
    }
    default:
      return null
  }
}

export const outroPageAnimation = (node, fullPath) => {
  const path = fullPath.split('/')[1]
  switch (node.id) {
    case 'about': {
      aboutOutroAnimation()
      break
    }
    case 'craftmanship': {
      craftmanshipOutroAnimation()
      break
    }
    case 'collection': {
      if (path !== 'collection') {
        collectionOutroAnimation()
      }
      break
    }
    case 'resources': {
      if (path !== 'resources') {
        resourcesOutroAnimation()
      }
      break
    }
    default:
      return null
  }
}

const aboutIntroAnimation = () => {
  TweenMax.fromTo(
    '#about',
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  )
}

const aboutOutroAnimation = () => {
  TweenMax.fromTo(
    '#about',
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  )
}

const craftmanshipIntroAnimation = () => {
  TweenMax.fromTo(
    '#craftmanship',
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.3 }
  )
}

const craftmanshipOutroAnimation = () => {
  TweenMax.fromTo(
    '#craftmanship',
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  )
}

const collectionIntroAnimation = () => {
  TweenMax.to('#collection', 0.4, {
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.3
  })
}

const collectionOutroAnimation = () => {
  TweenMax.fromTo(
    '#collection',
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  )
}

export const collectionSubIntro = () => {
  TweenMax.fromTo(
    '#collection .collectionList',
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.6 }
  )
}

export const collectionSubOutro = () => {
  TweenMax.fromTo(
    '#collection .collectionList',
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  )
}

const resourcesIntroAnimation = () => {
  TweenMax.to('#resources', 0.4, {
    opacity: 1,
    ease: Power3.easeOut,
    delay: 0.3
  })
}

const resourcesOutroAnimation = () => {
  TweenMax.fromTo(
    '#resources',
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  )
}

export const resourcesSubIntro = () => {
  TweenMax.fromTo(
    '#resources .collectionList',
    0.4,
    { opacity: 0 },
    { opacity: 1, ease: Power3.easeOut, delay: 0.6 }
  )
}

export const resourcesSubOutro = () => {
  TweenMax.fromTo(
    '#resources .collectionList',
    0.4,
    { opacity: 1 },
    { opacity: 0, ease: Power3.easeOut }
  )
}
