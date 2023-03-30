import {
  useLoaderData
} from "/build/_shared/chunk-5WBD222L.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TKXO56P5.js";

// empty-module:../../helpers/readData.server
var require_readData = __commonJS({
  "empty-module:../../helpers/readData.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/dashboard/index.tsx
var import_readData = __toESM(require_readData());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DashboardMain() {
  const { launchpadDescription } = useLoaderData();
  console.log(launchpadDescription);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { flexDirection: "column", width: "70%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Contenido principal del dashboard" }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic magnam eum expedita dicta maxime nostrum eligendi cum dolorem, voluptates culpa quis, sint quam magni sit ipsam. Assumenda, velit animi!" }, void 0, false, {
      fileName: "app/routes/dashboard/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
export {
  DashboardMain as default
};
//# sourceMappingURL=/build/routes/dashboard/index-CKNFYNHL.js.map
