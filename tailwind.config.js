const defaultTheme = require("tailwindcss/defaultTheme");

const withTransparent = (colorValue) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `oklch(${colorValue} / ${opacityValue})`;
    } else {
      return `oklch(${colorValue})`;
    }
  };
};

const colors = {
  white: "oklch(var(--white-color))",
  dark: "oklch(var(--dark-color))",
  gray: "oklch(var(--gray-color))",
};

module.exports = {
  mode: "jit",
  safelist: [
    "primary-regular-btn",
    "primary-outline-btn",
    "primary-link-btn",
    "secondary-regular-btn",
    "secondary-outline-btn",
    "secondary-link-btn",
    "tertiary-regular-btn",
    "tertiary-outline-btn",
    "tertiary-link-btn",
  ],

  theme: {
    extend: {
      textColor: {
        primary: {
          ...colors,
          muted: "oklch(var(--muted-color, #000000))",
          color: "oklch(var(--text-color))",
          fill: "oklch(var(--fill, #000000))",
          "fill-bg": "oklch(var(--fill-bg, #000000))",
          link: "oklch(var(--link-color, #000000))",
          "link-hover": "oklch(var(--link-color-hover, #000000))",
          btn: {
            color: "oklch(var(--btn-color))",
            outline: "oklch(var(--primary-btn-outline-color))",
          },
          marked: "oklch(var(--marked-color))",
          card: {
            color: "oklch(var(--primary-card-text, #000000))",
            marked: "oklch(var(--primary-card-title, #000000))",
          },
        },
        secondary: {
          ...colors,
          color: "oklch(var(--secondary-text-color, #000000))",
          fill: "oklch(var(--secondary-fill, #000000))",
          "fill-bg": "oklch(var(--secondary-fill-bg, #000000))",
          muted: "oklch(var(--secondary-muted-color, #000000))",
          // "card": "oklch(var(--secondary-card-text, #000000))",
          // "card-title": "oklch(var(--secondary-card-title, #000000))",
          btn: {
            color: "oklch(var(--secondary-btn-color))",
            outline: "oklch(var(--secondary-btn-outline-color))",
          },
          link: "oklch(var(--secondary-link-color, #000000))",
          "link-hover": "oklch(var(--secondary-link-color-hover, #000000))",
          input: "oklch(var(--secondary-input))",
          marked: "oklch(var(--secondary-marked-color, #000000))",
          "card-2-title": "oklch(var(--secondary-card-2-title, #000000))",
          "card-2": "oklch(var(--secondary-card-2-text, #000000))",
          card: {
            1: "oklch(var(--secondary-card-text, #000000))",
            "1-marked": "oklch(var(--secondary-card-title, #000000))",
            2: "oklch(var(--secondary-card-2-text, #000000))",
            "2-marked": "oklch(var(--secondary-card-2-title, #000000))",
          },
        },
        tertiary: {
          ...colors,
          color: "oklch(var(--tertiary-text-color, #000000))",
          muted: "oklch(var(--tertiary-muted-color, #000000))",
          btn: {
            color: "oklch(var(--tertiary-btn-color))",
            outline: "oklch(var(--tertiary-btn-outline-color))",
          },
          link: "oklch(var(--tertiary-link-color, #000000))",
          "link-hover": "oklch(var(--tertiary-link-color-hover, #000000))",
          marked: "oklch(var(--tertiary-marked-color))",
          input: "oklch(var(--tertiary-input))",
          fill: "oklch(var(--tertiary-fill, #000000))",
          "fill-bg": "oklch(var(--tertiary-fill-bg, #000000))",
          card: {
            color: "oklch(var(--tertiary-card-text, #000000))",
            marked: "oklch(var(--tertiary-card-title, #000000))",
          },
        },
      },
      backgroundColor: {
        primary: {
          ...colors,
          gray: withTransparent("var(--gray-color, transparent)"),
          white: withTransparent("var(--white-color, transparent)"),
          dark: withTransparent("var(--dark-color, transparent)"),
          color: withTransparent("var(--bg-color, transparent)"),
          btn: {
            color: withTransparent("var(--btn-bg)"),
            outline: withTransparent("var(--primary-btn-outline-bg)"),
            hover: withTransparent("var(--btn-bg-hover)"),
          },
          fill: withTransparent("var(--fill-bg)"),
          marked: withTransparent("var(--marked-bg)"),
          card: {
            1: withTransparent("var(--primary-bg-card, transparent)"),
            "1-marked": withTransparent(
              "var(--primary-bg-card-marked, transparent)"
            ),
            2: withTransparent("var(--primary-bg-card-2, transparent)"),
            "2-marked": withTransparent(
              "var(--primary-bg-card-2-marked, transparent)"
            ),
          },
        },
        secondary: {
          ...colors,
          gray: withTransparent("var(--gray-color, transparent)"),
          white: withTransparent("var(--white-color, transparent)"),
          dark: withTransparent("var(--dark-color, transparent)"),
          color: withTransparent("var(--secondary-bg-color, transparent)"),
          btn: {
            color: withTransparent("var(--secondary-btn-bg)"),
            outline: withTransparent("var(--secondary-btn-outline-bg)"),
            hover: withTransparent("var(--secondary-btn-bg-hover)"),
          },
          fill: withTransparent("var(--secondary-fill-bg)"),
          marked: withTransparent("var(--secondary-bg-marked, transparent)"),
          card: {
            1: withTransparent("var(--secondary-bg-card, transparent)"),
            "1-marked": withTransparent(
              "var(--secondary-bg-card-marked, transparent)"
            ),
            2: withTransparent("var(--secondary-bg-card-2, transparent)"),
            "2-marked": withTransparent(
              "var(--secondary-bg-card-2-marked, transparent)"
            ),
          },
        },
        tertiary: {
          ...colors,
          gray: withTransparent("var(--gray-color, transparent)"),
          white: withTransparent("var(--white-color, transparent)"),
          dark: withTransparent("var(--dark-color, transparent)"),
          btn: {
            color: withTransparent("var(--tertiary-btn-bg)"),
            outline: withTransparent("var(--tertiary-btn-outline-bg)"),
            hover: withTransparent("var(--tertiary-btn-bg-hover)"),
          },
          fill: withTransparent("var(--tertiary-fill-bg)"),
          marked: withTransparent("var(--tertiary-bg-marked, transparent)"),
          color: withTransparent("var(--tertiary-bg-color, transparent)"),
          card: {
            1: withTransparent("var(--tertiary-bg-card, transparent)"),
            "1-marked": withTransparent(
              "var(--tertiary-bg-card-marked, transparent)"
            ),
            2: withTransparent("var(--tertiary-bg-card-2, transparent)"),
            "2-marked": withTransparent(
              "var(--tertiary-bg-card-2-marked, transparent)"
            ),
          },
        },
      },
      gradientColorStops: {
        primary: {
          line: withTransparent("var(--primary-gradient-line, #ffffff)"),
        },
        secondary: {
          line: withTransparent("var(--secondary-gradient-line, #ffffff)"),
        },
        tertiary: {
          line: withTransparent("var(--tertiary-gradient-line, #ffffff)"),
        },
      },
      borderColor: {
        primary: {
          ...colors,
          color: withTransparent("var(--primary-border-color, transparent)"),
          marked: withTransparent("var(--primary-border-marked, transparent)"),
          text: withTransparent("var(--primary-border-text, transparent)"),
          btn: {
            color: withTransparent("var(--primary-border-btn, transparent)"),
            outline: withTransparent("var(--primary-btn-outline-border)"),
          },
          "text-hover": withTransparent(
            "var(--primary-border-text-hover, transparent)"
          ),
        },
        secondary: {
          ...colors,
          color: withTransparent("var(--secondary-border-color, transparent)"),
          marked: withTransparent(
            "var(--secondary-border-marked, transparent)"
          ),
          text: withTransparent("var(--secondary-border-text, transparent)"),
          btn: {
            color: withTransparent("var(--secondary-border-btn, transparent)"),
            outline: withTransparent("var(--secondary-btn-outline-border)"),
          },
          "text-hover": withTransparent(
            "var(--secondary-border-text-hover, transparent)"
          ),
        },
        tertiary: {
          ...colors,
          color: withTransparent("var(--tertiary-border-color, transparent)"),
          marked: withTransparent("var(--tertiary-border-marked, transparent)"),
          text: withTransparent("var(--tertiary-border-text, transparent)"),
          btn: {
            color: withTransparent("var(--tertiary-border-btn, transparent)"),
            outline: withTransparent("var(--tertiary-btn-outline-border)"),
          },
          "text-hover": withTransparent(
            "var(--tertiary-border-text-hover, transparent)"
          ),
        },
      },
      borderRadius: {
        btn: "var(--btn-border-radius)",
      },
      borderWidth: {
        large: "28px",
      },
      fontFamily: {
        "theme-title": "var(--font-title)",
        "theme-text": "var(--font-text)",
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
