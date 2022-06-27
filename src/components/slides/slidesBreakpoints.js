const breakpoints = {
  '(min-width: 300px)': {
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
    slides: {
      origin: 'auto',
      perView: bg ? 3 : 4,
      spacing: bg ? 15 : 12
    }
  },
  '(min-width: 800px)': {
    slides: {
      origin: 'auto',
      perView: bg ? 4 : 4,
      spacing: bg ? 15 : 12
    }
  },
  '(min-width: 1000px)': {
    slides: {
      origin: 'auto',
      perView: 5,
      spacing: 15
    }
  },
}

export default breakpoints