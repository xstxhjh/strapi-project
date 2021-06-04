module.exports = {
  settings: {
    timeout: 1000,
    load: {
      before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
      order: [],
      after: ["parser", "router"],
    },
    hjh: {
      enabled: true,
    },
  },
};
