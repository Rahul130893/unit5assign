const path = require("path");

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".", "build"), //where u want to generate with which name
        filename:"bundle.js" // name of file inside build
    },
    mode:"development",
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader","css-loader"] },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
}