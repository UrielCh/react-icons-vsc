import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SymbolBoolean icon from VS Code Icons
 * @module
 */
export function VscSymbolBoolean(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zM14 4H8v3.493h-.5l-3.574-.005 2.09-2.09-.707-.707-2.955 2.955v.708l2.955 2.955.707-.707-2.114-2.114 3.996.005H8v-.986l3.907.005-2.114-2.114.707-.707 2.956 2.955v.708L10.5 11.309l-.707-.707 2.09-2.09L8 8.507V12h6V4z"}}]})(props);
}
export default VscSymbolBoolean;
