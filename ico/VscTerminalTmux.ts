import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TerminalTmux icon from VS Code Icons
 * @module
 */
export function VscTerminalTmux(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M13.5 1h-12l-.5.5v13l.5.5h12l.5-.5v-13l-.5-.5zM7 7.5V13H2V2h5v5.5zm6 5.5H8V8h5v5zm0-6H8V2h5v5z"}}]})(props);
}
export default VscTerminalTmux;
