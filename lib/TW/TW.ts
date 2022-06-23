// lib/tailwind.js
import { create } from "twnrc";

// create the customized version...
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TW: any = create(require(`./tailwind.config`)); // <- your path may differ

// ... and then this becomes the main function your app uses
export default TW;
