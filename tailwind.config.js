/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#f0f0f0",
      "white-hover": "#c2c7cc",
      "dark-background2": "#010101",
      "dark-background": "#050914",
      "light-background2": "#f0f0f0",
      "light-background": "#e3e3e3",
      yellow: "#ff0000",
      primary: "#ff0000",
      plight: "#ff3333",
      pdark: "#b20000",
      secondary: "#3c3c3b",
      slight: "#636362",
      sdark: "#2a2a29",
      "pdark-hover": "#b2000039",
      "p2dark-hover": "#b2000070",
      "dark-drawer-background": "#222222ce",
      "light-drawer-background": "#e3e3e3ce",
      error: "#CC0000",
      warning: "#FF8800",
      success: "#007733",
      info: "#0099CC",
    },
    extend: {
      fontSize: {
        body: "1rem",
        h3: "calc(20px + 39 * ((100vw - 320px)/1680))",
        h4: "calc(18px + 30 * ((100vw - 320px)/1680))",
        h5: "calc(15px + 20 * ((100vw - 320px)/1680))",
        footer: "13px",
        sctitle: "14px",
        stars: "12px",
      }, top: {
        list: "75px"
      }, marginTop: {
        small: "5px",
      }, borderRadius: {
        scard: "15px", button: "30px", circle: "100%",
      }, gap: {
        small: "10px", basic: "20px", medium: "40px",
      }, padding: {
        button: "5px 20px", error: "3rem", navbar: "20px",
      }, minHeight: {
        12: "3rem"
      }, height: {
        400: "400px", "90vh": "90vh", "80vh": "80vh", navbar: "60px", viewport: "100vh", scard: "180px", // small card
        icon: "35px",
      }, display: {
        "none": "none"
      }, maxHeight: {
        400: "400px", viewport: "100vh", scard: "180px",
      }, minWidth: {
        "small-th": "70px", large: "200px"
      }, width: {
        99: "99%",
        icon: "35px",
        half: "50%",
        "80per": "80%",
        viewport: "100vw",
        scard: "180px",
        "small-th": "70px",
        large: "200px"
      }, maxWidth: {
        scard: "180px",
      }, borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
}