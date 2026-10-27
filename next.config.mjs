/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/industries', destination: '/industry', permanent: true },
      { source: '/download', destination: '/brochure', permanent: true },
      { source: '/product', destination: '/products', permanent: true },
      { source: '/n-loc', destination: '/products/n-loc', permanent: true },
      { source: '/nloc', destination: '/products/n-loc', permanent: true },
      { source: '/cable-cleat', destination: '/products/cable-cleat', permanent: true },
      { source: '/cable-cleats', destination: '/products/cable-cleat', permanent: true },
      { source: '/link-box', destination: '/products/link-box', permanent: true },
      { source: '/junction-box', destination: '/products/link-box', permanent: true },
      { source: '/lugx', destination: '/products/lugx', permanent: true },
      { source: '/cnc-machine-component', destination: '/products/cnc-machine-component', permanent: true },
      { source: '/cnc', destination: '/products/cnc-machine-component', permanent: true },
      { source: '/products/cnc', destination: '/products/cnc-machine-component', permanent: true },
      { source: '/sheet-metal-press-parts', destination: '/products/sheet-metal-press-parts', permanent: true },
      { source: '/press-parts', destination: '/products/sheet-metal-press-parts', permanent: true },
      { source: '/sheet-metal', destination: '/products/sheet-metal-press-parts', permanent: true },
      { source: '/products/press-parts', destination: '/products/sheet-metal-press-parts', permanent: true },
    ];
  },
};

export default nextConfig;
