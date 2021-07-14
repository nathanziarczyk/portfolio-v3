export const variants = {
  fadeIn: {
    hidden: {
      opacity: 0,
      y: -5,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: i * 0.1,
      },
    }),
  },
};
