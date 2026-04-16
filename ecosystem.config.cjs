module.exports = {
  apps: [
    {
      name: 'real-estate-calc',
      script: '.output/server/index.mjs',
      cwd: '/root/real-estate-calc',
      instances: 1,
      exec_mode: 'fork',
      node_args: '--max-old-space-size=512',
      max_memory_restart: '400M',
      restart_delay: 3000,
      max_restarts: 10,
      min_uptime: '10s',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0',
      },
      error_file: '/root/.pm2/logs/real-estate-calc-error.log',
      out_file: '/root/.pm2/logs/real-estate-calc-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
