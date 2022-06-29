export default function slidesBreakpoints(bg) {
  return {
    '(min-width: 300px)': {
      resetSlide: true,
      slides: {
        origin: 0.065,
        perView: bg ? 2.34 : 3.5,
        spacing: bg ? 15 : 10
      },
      range: {
        min: 0,
        max: bg ? 8 : 7,
        align: false
      }
    },
    '(min-width: 520px)': {
      resetSlide: true,
      slides: {
        origin: bg ? 0.07 : 0.07,
        perView: bg ? 3.5 : 4.67,
        spacing: bg ? 15 : 12
      },
      range: {
        min: 0,
        max: bg ? 7 : 6,
        align: false
      }
    },
    '(min-width: 700px)': {
      resetSlide: true,
      slides: {
        origin: 'auto',
        perView: bg ? 3 : 4,
        spacing: bg ? 15 : 12
      }
    },
    '(min-width: 800px)': {
      resetSlide: true,
      slides: {
        origin: 'auto',
        perView: bg ? 4 : 4,
        spacing: bg ? 15 : 12
      }
    },
    '(min-width: 1000px)': {
      resetSlide: true,
      slides: {
        origin: 'auto',
        perView: 5,
        spacing: 15
      }
    },
  }
}