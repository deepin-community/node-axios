import assert from "assert";
import axios, { AxiosHeaders } from "axios";

// axios default export is a function
assert.strictEqual(typeof axios, "function", "axios should be a function");

// axios.create() returns an instance
const instance = axios.create({ baseURL: "http://example.com" });
assert.strictEqual(typeof instance, "function", "axios.create() should return a function");

// axios has all expected HTTP methods
for (const method of ["get", "post", "put", "patch", "delete", "head", "options", "request"]) {
  assert.strictEqual(typeof axios[method], "function", `axios.${method} should be a function`);
}

// axios.defaults exists and has headers
assert.ok(axios.defaults, "axios.defaults should exist");
assert.ok(axios.defaults.headers, "axios.defaults.headers should exist");

// interceptors exist
assert.ok(axios.interceptors.request, "axios.interceptors.request should exist");
assert.ok(axios.interceptors.response, "axios.interceptors.response should exist");

// axios.all and axios.spread
assert.strictEqual(typeof axios.all, "function", "axios.all should be a function");
assert.strictEqual(typeof axios.spread, "function", "axios.spread should be a function");

// CancelToken, isCancel, isAxiosError
assert.ok(axios.CancelToken, "axios.CancelToken should exist");
assert.strictEqual(typeof axios.isCancel, "function", "axios.isCancel should be a function");
assert.strictEqual(typeof axios.isAxiosError, "function", "axios.isAxiosError should be a function");

// AxiosHeaders
assert.ok(AxiosHeaders, "AxiosHeaders should exist");

// VERSION is a string
assert.strictEqual(typeof axios.VERSION, "string", "axios.VERSION should be a string");

// Making a request with a custom adapter (no network needed)
const result = await axios.get("http://example.com/test", {
  adapter: (config) => Promise.resolve({
    data: { ok: true },
    status: 200,
    statusText: "OK",
    headers: {},
    config,
  }),
});
assert.deepStrictEqual(result.data, { ok: true }, "custom adapter request should return expected data");
assert.strictEqual(result.status, 200, "custom adapter request should return status 200");

console.log("ESM test passed");
