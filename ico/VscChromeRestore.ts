import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChromeRestore icon from VS Code Icons
 * @module
 */
export function VscChromeRestore(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 5v9h9V5H3zm8 8H4V6h7v7z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5 5h1V4h7v7h-1v1h2V3H5v2z"},child:[]}]})(props);
}
export default VscChromeRestore;
