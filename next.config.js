const {NextFederationPlugin} = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, {isServer}) {
    config.plugins.push(
        new NextFederationPlugin({
          name: 'shop',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {},
          exposes: {
            './Search': './pages/search/index.jsx',
            './Category': './pages/category/index.jsx',
            './Product': './pages/product/index.jsx',
          },
          shared: {
            react: {singleton: true, eager: true, requiredVersion: deps.react},
            'react-dom': {
              singleton: true,
              eager: true,
              requiredVersion: deps['react-dom'],
            },
          },
        })
    );

    return config;
  },
}

module.exports = nextConfig
