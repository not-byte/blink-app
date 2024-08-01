/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: "Inter",
            },
            colors: {
                smoke: "hsla(0, 0%, 96%, 1)",
                lavender: "hsla(240, 33%, 86w, 68%, 1)",
                "ultra-violet": "hsla(254, 31%, 36%, 1)",
                "rasin-black": "hsla(240, 7%, 13%, 1)",
                "slate-blue": "hsla(266, 100%, 72%, 1)",
            },
            // background: {
            //     base: "rgb(0,0,0,0)",
            // },
            backgroundImage: {
                base: 'url("../image/background.svg")',
            },
        },
    },
    screens: {
        "3xl": "1920px",
    },
    plugins: [],
};
