import { basicConfig } from "./basic-config.mjs";

const THREE_SECONDS_IN_MS = 3000;
const scenarios = [];
const viewports = [];

basicConfig.relativeUrls.map(relativeUrl => {
  scenarios.push({
    label: relativeUrl,
    url: `${basicConfig.baseUrl}${relativeUrl}`,
    delay: THREE_SECONDS_IN_MS,
    requireSameDimensions: false,
  });
});

basicConfig.viewports.map(viewport => {
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

/**
 * @function pushViewport
 * @description Add a viewport to the viewports array. The viewports array is used in the backstop.json config file.
 * @param {string} viewport - The name of the viewport. Supported values are "phone", "tablet", and "desktop".
 * @param {number} width - The width of the viewport.
 * @param {number} height - The height of the viewport.
 */
function pushViewport(viewport, width, height) {
  viewports.push({
    name: viewport,
    width,
    height,
  });
}

export const mainConfig = {
  id: basicConfig.projectId,
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
