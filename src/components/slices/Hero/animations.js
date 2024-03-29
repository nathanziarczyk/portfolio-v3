export const variants = {
  title: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
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
        duration: 0.25,
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
