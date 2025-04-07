module.exports = {
  apps: [
    {
      name: 'interstellar-proxy',
      script: './index.js',  // Change this to your main proxy entry file
      watch: true,           // Automatically restart on file changes
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
