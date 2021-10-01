const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  devtool: false,

  module: {
    rules: [
      
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: "pure",
                auto: true,
                exportGlobals: true,
                namedExport: true,
                exportOnlyLocals: false,
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
