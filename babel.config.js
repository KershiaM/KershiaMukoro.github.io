module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),  // Docusaurus preset
    // Configure Babel preset for React to handle JSX
    ['@babel/preset-react', {
      runtime: 'automatic',  // Enable new JSX transform
      development: process.env.NODE_ENV === 'development',  // Adds specific optimizations for dev mode
    }],
  ],
};

