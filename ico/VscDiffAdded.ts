import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DiffAdded icon from VS Code Icons
 * @module
 */
export function VscDiffAdded(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12l.5-.5zM2 13h11V2H2v11z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M8 4H7v3H4v1h3v3h1V8h3V7H8V4z"},child:[]}]})(props);
}
export default VscDiffAdded;
