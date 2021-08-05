export const variants = {
  title: {
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
  content: {
    hidden: {
      opacity: 0,
      y: 2,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.75,
        duration: 0.75,
      },
    },
  },
};
