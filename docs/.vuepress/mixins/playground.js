export const playground = {
  data() {
    return {
      shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      colors: [
        "white",
        "black",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink",
      ],
      background: "blue",
      text: "white",
      shade: "500",
    };
  },
  computed: {
    bgColor() {
      if (this.background == "black" || this.background == "white") {
        return `bg-${this.background}`;
      } else {
        return `bg-${this.background}-${this.shade}`;
      }
    },
    textColor() {
      if (this.text == "black" || this.text == "white") {
        return `text-${this.text}`;
      } else {
        return `text-${this.text}-${this.shade}`;
      }
    },
  },
};
