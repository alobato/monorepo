// src/index.js
var colors = {
  black: "hsl(213deg 15% 14%)",
  blue: "hsl(207deg 69% 53%)",
  white: "hsl(0deg 0% 100%)",
  danger: "hsl(0deg 72% 51%)",
  hairline: "hsl(212deg 25% 90%)",
  snow: "hsl(214deg 33% 96%)",
  muted: "hsl(212deg 25% 60%)",
  darker: "hsl(220deg 24% 7%)",
  dark: "hsl(215deg 21% 11%)",
  darkless: "hsl(212deg 12% 21%)"
};
var reset = {
  a: {
    color: "inherit",
    textDecoration: "none"
  },
  svg: {
    display: "block"
  },
  "*": {
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  },
  "*::before": {
    boxSizing: "border-box"
  },
  "*::after": {
    boxSizing: "border-box"
  }
};
var theme = {
  debug: false,
  fonts: {
    body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: "inherit"
  },
  fontWeights: { thin: 200, body: 400, bold: 500, heading: 600, monospace: 400 },
  lineHeights: { body: 1.2, heading: 1.125, monospace: 1.2 },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  radii: { small: 4, default: 8, extra: 12, ultra: 16, circle: 99999 },
  colors: {
    ...colors,
    primary: colors.blue,
    primaryContrast: colors.white,
    canvas: colors.white,
    text: colors.black,
    sheet: colors.snow,
    elevated: colors.snow,
    positive: "hsl(159deg 96% 33%)",
    negative: "hsl(350deg 62% 50%)",
    attention: "hsl(45deg 100% 51%)",
    good: "hsl(207deg 90% 54%)",
    modes: {
      dark: {
        canvas: colors.dark,
        text: "hsl(210deg 17% 82%)",
        elevated: colors.darkless,
        muted: "hsl(212deg 12% 50%)",
        hairline: colors.darkless,
        danger: "hsl(0deg 43% 49%)",
        positive: "hsl(148deg 66% 41%)",
        negative: "hsl(0deg 72% 56%)"
      }
    }
  },
  primary: {
    color: "primaryContrast",
    bg: "primary"
  },
  text: {
    neon: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    ib: {
      display: "inline-block"
    },
    pill: {
      display: "inline-block",
      background: "elevated",
      px: "3px",
      py: "2px",
      mr: 2,
      fontSize: 1,
      fontWeight: "heading",
      color: "muted",
      borderRadius: "2px"
    },
    highlight: {
      fontWeight: "bold",
      bg: "elevated",
      p: 2
    },
    strong: {
      fontWeight: "heading"
    },
    small: {
      fontSize: 1
    },
    uppercase: {
      textTransform: "uppercase"
    },
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    display: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    detailsLink: {
      cursor: "pointer",
      textDecoration: "underline",
      textUnderlinePosition: "under",
      textDecorationColor: "hairline",
      textDecorationThickness: "2px",
      lineHeight: 1.4,
      "&:hover": {
        textDecorationColor: "inherit"
      }
    }
  },
  forms: {
    input: {
      p: 2,
      bg: "elevated",
      borderColor: "hairline",
      "&:disabled": {
        color: "muted"
      }
    },
    select: {
      p: 2,
      pr: 4,
      bg: "elevated",
      borderColor: "hairline"
    },
    label: {
      fontWeight: "bold",
      lineHeight: 1.5
    }
  },
  buttons: {
    primary: {
      py: "0.6em",
      px: "1.2em",
      color: "primaryContrast",
      bg: "blue"
    },
    raw: {
      p: 0,
      bg: "transparent",
      color: "inherit",
      border: 0,
      cursor: "pointer"
    }
  },
  modals: {
    small: {
      bg: "canvas",
      width: ["calc(100% - 32px)", "calc(100% - 256px)"],
      maxWidth: 600,
      top: [16, 32],
      boxShadow: "0px 4px 44px hsl(0deg 0% 0% / 10%)"
    },
    side: {
      bg: "canvas",
      position: "fixed",
      display: "flex",
      top: 0,
      right: 0,
      bottom: 0,
      width: [300, 600],
      borderLeft: "1px solid var(--theme-ui-colors-hairline)"
    },
    sidebig: {
      bg: "canvas",
      position: "fixed",
      display: "flex",
      top: 0,
      right: 0,
      bottom: 0,
      width: [300, 900],
      borderLeft: "1px solid var(--theme-ui-colors-hairline)"
    }
  },
  styles: {
    root: {
      ...reset,
      bg: "canvas",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
      ".link": {
        textDecoration: "underline",
        color: "primary"
      },
      ".noselect": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect ": "none",
        "msUserSelect": "none",
        userSelect: "none"
      },
      ".font-size-10": {
        fontSize: "calc(10 * 1.3px) !important"
      },
      ".font-size-11": {
        fontSize: "calc(11 * 1.3px)"
      },
      ".font-size-12": {
        fontSize: "16px"
      },
      ".font-size-14": {
        fontSize: "calc(14 * 1.3px)"
      },
      ".font-size-18": {
        fontSize: "calc(18 * 1.3px)"
      },
      ".font-size-24": {
        fontSize: "calc(24 * 1.3px)"
      },
      ".font-size-32": {
        fontSize: "calc(32 * 1.3px)"
      },
      ".align-right": {
        textAlign: "right"
      },
      ".align-center": {
        textAlign: "center"
      },
      ".align-left": {
        textAlign: "left"
      },
      ".align-justify": {
        textAlign: "justify"
      },
      ".DraftEditor-root": {
        height: "calc(100vh - 140px)",
        overflow: "auto",
        "&::-webkit-scrollbar": { width: 8, height: 8 },
        "&::-webkit-scrollbar-thumb": { backgroundColor: "hsl(0, 0%, 0%, 0.38)" }
      },
      ".DraftEditor-editorContainer": {
        lineHeight: 1.4
      },
      ".DraftEditor-editorContainer > div": {
        height: "100%",
        padding: "2rem"
      },
      'span[data-offset-key="b9870-0-0"]': {
        fontSize: "13px"
      },
      ".tbl .center": {
        textAlign: "center"
      },
      ".tbl .left": {
        textAlign: "left"
      },
      ".tbl .right": {
        textAlign: "right"
      },
      ".tbl .justify": {
        textAlign: "justify"
      },
      ".tbl table": {
        borderCollapse: "collapse",
        borderSpacing: 0,
        width: "100%"
      },
      ".tbl td, .tbl th": {
        padding: "4px",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "hairline",
        background: "canvas"
      },
      ".tbl th": {
        textAlign: "center",
        fontWeight: "bold"
      },
      ".tbl tr:nth-child(even) td": {
        background: "canvas"
      },
      ".tbl .small": {
        fontSize: "9px",
        textAlign: "justify"
      },
      "@keyframes flash": {
        "0%": { opacity: 1 },
        "50%": { opacity: 0.3 },
        "100%": { opacity: 1 }
      },
      ".recording": {
        color: "red",
        animationName: "flash",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite"
      }
    }
  }
};
var src_default = theme;
export {
  src_default as default
};
