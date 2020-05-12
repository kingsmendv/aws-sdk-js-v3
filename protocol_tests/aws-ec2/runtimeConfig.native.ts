import { name, version } from "./package.json";
import { Sha256 } from "@aws-crypto/sha256-js";
import { streamCollector } from "@aws-sdk/stream-collector-web";
import { FetchHttpHandler } from "@aws-sdk/fetch-http-handler";

import { parseUrl } from "@aws-sdk/url-parser-node";
import { ClientDefaults } from "./EC2ProtocolClient";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";

export const ClientDefaultValues: Required<ClientDefaults> = {
  ...BrowserDefaults,
  requestHandler: new FetchHttpHandler(),
  runtime: "react-native",
  defaultUserAgent: `aws-sdk-js-v3-react-native-${name}/${version}`,
  sha256: Sha256,
  streamCollector,
  urlParser: parseUrl
};
