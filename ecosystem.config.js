module.exports = {
  apps: [{
    name: "twitter",
    script: './bin/www',
    instances: 'maw',
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
