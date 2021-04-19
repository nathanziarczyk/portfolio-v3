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
          duration: 0.75,
          delay: i * 0.1,
        },
      }),
    },
  },
};
