const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  optimizeFonts: true,
  output: 'standalone',
  distDir: '.next/standalone',
};

module.exports = nextConfig;
