import newsletterView from "./views/newsletter.js";

import "core-js";
import "regenerator-runtime/runtime";

function init() {
  newsletterView.initiateSubmitListener();
  newsletterView.initiateDismissListener();
}

init();
