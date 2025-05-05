module.exports = {
  ci: {
    collect: {
      staticDistDir: './', // Serve all modules from here
      url: [
        'http://localhost:5500/2025/',
        'http://localhost:5500/lom/timeline.html',
        // 'http://localhost:5500/lom/merged.html',
      ],
      numberOfRuns: 1,
    },
    upload: {
      target: 'filesystem',
      // reportFilenamePattern: '[name].html',
      // // Will use `id=...` as part of name
    },
  },
};
