export const variants = {
  h1: {
    word: {
      hidden: {
        opacity: 0,
        y: 50,
        skewY: 5,
      },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
          duration: 0.5,
          delay: i * 0.025,
        },
      }),
    },
  },
  content: {
    hidden: {
      opacity: 0,
      y: 2,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.75,
      },
    },
  },
  buttons: {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: 0.35,
      },
    }),
  },
};
