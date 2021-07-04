export const variants = {
  hidden: {
    opacity: 0,
  },
  visible: (i) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};
