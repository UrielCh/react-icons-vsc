import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NotebookTemplate icon from VS Code Icons
 * @module
 */
export function VscNotebookTemplate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 5H0V4h1v1zm0 2H0V6h1v1zm0 2H0V8h1v1zm0 2H0v-1h1v1zm0 2H0v-1h1v1zm0 1v1H0v-1h1zm0 1h1v1H1v-1zm2 0h1v1H3v-1zM1 1H0V0h1v1zm2 0H2V0h1v1zm1-1h1v1H4V0zm3 1H6V0h1v1zm2 0H8V0h1v1zm2 0h-1V0h1v1zm0 1V1h1v1h-1zm1 2h-1V3h1v1zM1 3H0V2h1v1z"}},{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M5 6l1-1h7l1 1v9l-1 1H6l-1-1V6zm1 0v9h7V6H6z"},child:[]},{tag:"path",attr:{d:"M15 7h1v2h-1V7zm0 3h1v2h-1v-2zm0 3h1v2h-1v-2zM7 8h5v1H7z"},child:[]}]})(props);
}
export default VscNotebookTemplate;
