import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Browser icon from VS Code Icons
 * @module
 */
export function VscBrowser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12l.5-.5zM2 5v8h12V5H2zm0-1h12V2H2v2z"}}]})(props);
}
export default VscBrowser;
