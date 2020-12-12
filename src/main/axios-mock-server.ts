// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: Cannot find module
import mock from "../../mocks/$mock.js";
if (process.env.NODE_ENV === "development" || process.env.VUE_APP_IS_GH_PAGES)
  mock();
