import {
  Box,
  Button,
  Grid,
  Table,
  Text,
  c,
  faCheck,
  faCopy
} from "/build/_shared/chunk-JQBMPBG4.js";
import {
  apis_default
} from "/build/_shared/chunk-7J3JD5O5.js";
import {
  useSearchParams
} from "/build/_shared/chunk-5WBD222L.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-TKXO56P5.js";

// app/routes/dashboard/general/description.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Description() {
  const sectionMap = {
    "auth": "Authorization",
    "headers": "Headers",
    "errors": "Errors",
    "response": "Response",
    "request": "Request"
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [section, setSection] = (0, import_react2.useState)("headers");
  const [copied, setCopied] = (0, import_react2.useState)(-1);
  (0, import_react2.useEffect)(() => {
    if (searchParams.get("section") != null) {
      setSection(searchParams.get("section"));
    }
  }, [searchParams.get("section")]);
  (0, import_react2.useEffect)(() => {
    console.log("EXEC!");
    if (copied != -1) {
      setTimeout(
        () => setCopied(-1),
        1e3
      );
    }
  }, [copied]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { columns: 10, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "S1", children: sectionMap[section] }, void 0, false, {
      fileName: "app/routes/dashboard/general/description.tsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/general/description.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    apis_default[0].apis[0][section].map(
      (i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "S4", children: i.subtitle }, void 0, false, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 48,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "S5", children: i.info }, void 0, false, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 52,
          columnNumber: 25
        }, this),
        i.table && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table, { data: i.table }, void 0, false, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 57,
          columnNumber: 37
        }, this),
        i.json && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { style: { marginTop: 20, marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { columns: 12, style: { padding: 30, backgroundColor: c({ type: "grey-80" }) }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { style: { color: "lightgray" }, children: JSON.stringify(i.json, null, 2) }, void 0, false, {
            fileName: "app/routes/dashboard/general/description.tsx",
            lineNumber: 61,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { style: { display: "flex", alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { columns: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Button,
              {
                rightIcon: copied != i ? faCopy : faCheck,
                onClick: () => {
                  navigator.clipboard.writeText(JSON.stringify(i.json, null, 2)).then(() => {
                    setCopied(i);
                  });
                },
                label: copied != i ? "Copy to clipboard" : "Copied",
                disabled: copied == i,
                variant: copied != i ? "primary" : "tertiary"
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/general/description.tsx",
                lineNumber: 64,
                columnNumber: 45
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/dashboard/general/description.tsx",
              lineNumber: 63,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { columns: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                href: `data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(i.json)
                )}`,
                download: "filename.json",
                children: `Download Json`
              },
              void 0,
              false,
              {
                fileName: "app/routes/dashboard/general/description.tsx",
                lineNumber: 76,
                columnNumber: 41
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/dashboard/general/description.tsx",
              lineNumber: 74,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard/general/description.tsx",
            lineNumber: 62,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 60,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard/general/description.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard/general/description.tsx",
        lineNumber: 46,
        columnNumber: 21
      }, this)
    )
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/general/description.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard/general/description.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
}
export {
  Description as default
};
//# sourceMappingURL=/build/routes/dashboard/general/description-CKVO3WRT.js.map
