const fontStyles = {
  largeBody: {
    fontFamily: "Outfit, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    color: "rgb(29, 37, 44)",
    fontSize: "40px",
    lineHeight: "40px",
    "@media (min-width: 768px)": {
      fontSize: "70px",
      lineHeight: "70px",
    },
    "@media (min-width: 1024px)": {
      fontSize: "120px",
      lineHeight: "120px",
    },
  },
  regularBody: {
    fontFamily: "Outfit, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    color: "rgb(46, 53, 59)",
    fontSize: "16px",
    lineHeight: "18px",
    "@media (min-width: 768px)": {
      fontSize: "18px",
      lineHeight: "20px",
    },
    "@media (min-width: 1024px)": {
      fontSize: "20px",
      lineHeight: "22px",
    },
  },
  button: {
    fontFamily: "Outfit, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    color: "rgb(29, 37, 44)",
    fontSize: "14px",
    lineHeight: "14px",
    "@media (min-width: 768px)": {
      fontSize: "15px",
      lineHeight: "15px",
    },
    "@media (min-width: 1024px)": {
      fontSize: "16px",
      lineHeight: "16px",
    },
  },
};

export { fontStyles };
