import * as dotenv from "dotenv";
dotenv.config({ });

import * as n8configs from "./configs";
import * as n8Constants from "./constants";
console.log(n8Constants, n8configs);
export {n8configs, n8Constants};
