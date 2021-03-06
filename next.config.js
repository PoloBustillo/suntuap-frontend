// const withImages = require("next-images");
// const { withPlugins } = require("next-compose-plugins");

// const nextConfig = {
//   env: {
//     API_URL: "https://multikart-graphql-dun.vercel.app/server.js",
//   },

//   // if you want to run with local graphQl un-comment below one and comment the above code
//   // env: {
//   //   API_URL: "http://localhost:4000/graphql",
//   // },

//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// module.exports = {swcMinify: true}, withPlugins([withImages], nextConfig);

const nextConfig = {
  env: {
    API_URL: "http://localhost:8000/graphql",
  },
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          limit: 100000,
        },
      },
    });
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker",
          },
        },
      ],
    });

    return config;
  },
};
