import { globals } from "@test-runners/nightwatch/nightwatch-globals.mjs";

const THREE_SECONDS_IN_MS = 3000;
const scenarios = [];
const viewports = [];

globals.relativeUrls.map(relativeUrl => {
  scenarios.push({
    label: relativeUrl,
    url: `${globals.baseUrl}${relativeUrl}`,
    delay: THREE_SECONDS_IN_MS,
    requireSameDimensions: false,
  });
});

globals.viewports.map(viewport => {
  if (viewport === "phone") {
    pushViewport(viewport, 320, 480);
  }
  if (viewport === "tablet") {
    pushViewport(viewport, 1024, 768);
  }
  if (viewport === "desktop") {
    pushViewport(viewport, 1280, 1024);
  }
});

function pushViewport(viewport, width, height) {
  viewports.push({
    name: viewport,
    width,
    height,
  });
}

module.exports = {
  id: globals.projectId,
  viewports,
  scenarios,
  paths: {
    bitmaps_reference: "backstop-result/bitmaps_reference",
    bitmaps_test: "backstop-result/bitmaps_test",
    html_report: "backstop-result/html_report"
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
};
