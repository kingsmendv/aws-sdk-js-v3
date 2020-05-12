import { name, version } from "./package.json";
import { Sha256 } from "@aws-crypto/sha256-js";
import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";
import { streamCollector } from "@aws-sdk/stream-collector-web";
import { parseUrl } from "@aws-sdk/url-parser-node";
import { ClientDefaults } from "./RestXmlProtocolClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  defaultUserAgent: `aws-sdk-js-v3-react-native-${name}/${version}`,
  requestHandler: new FetchHttpHandler(),
  runtime: "react-native",
  sha256: Sha256,
  streamCollector,
  urlParser: parseUrl
};
