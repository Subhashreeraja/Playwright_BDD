const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "reports",
  reportPath: "reports/html-report",
  reportName: "Playwright BDD Report",
  pageTitle: "Tutorialninja website test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
device: "Subhashree R-Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Tutorialninja website Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },      ],    },  });

