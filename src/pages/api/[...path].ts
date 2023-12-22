import httpProxy from "http-proxy";

const API_URL = process.env.REACT_APP_API_URL;

console.log({ API_URL });

const proxy = httpProxy.createProxyServer();

// Define your proxy route
const Proxy = (req, res) => {
  proxy.web(req, res, { target: API_URL, changeOrigin: true });
};

module.exports = Proxy;