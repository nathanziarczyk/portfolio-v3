export const variants = {
  image: {
    hidden: {
      scale: 1.1,
    },
    visible: {
      scale: 1.01,
      transition: {
        duration: 0.85,
        type: "tween",
      },
    },
  },
  content: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  },
};
