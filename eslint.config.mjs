// import globals from "globals";
// import pluginJs from "@eslint/js";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
// ];


import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        require: true,   // Tambahkan require sebagai global
        module: true,    // Tambahkan module sebagai global
        __dirname: true, // Tambahkan __dirname sebagai global
      },
    },
  },
  pluginJs.configs.recommended,
];
