const webpack = require('webpack');

module.exports = {
  // ...existing code...
  plugins: [
    // ...existing code...
    new webpack.DefinePlugin({
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true)
    })
  ],
  // ...existing code...
};
