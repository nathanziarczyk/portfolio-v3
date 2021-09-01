export const variants = {
  title: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.65,
      },
    },
  },
  image: {
    hidden: {
      opacity: 0,
    },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: i * 0.05,
      },
    }),
  },
};
