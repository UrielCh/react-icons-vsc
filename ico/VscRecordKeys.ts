import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RecordKeys icon from VS Code Icons
 * @module
 */
export function VscRecordKeys(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M14 3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 8H3V4h11v7zm-3-6h-1v1h1V5zm-1 2H9v1h1V7zm2-2h1v1h-1V5zm1 4h-1v1h1V9zM6 9h5v1H6V9zm7-2h-2v1h2V7zM8 5h1v1H8V5zm0 2H7v1h1V7zM4 9h1v1H4V9zm0-4h1v1H4V5zm3 0H6v1h1V5zM4 7h2v1H4V7z"}}]})(props);
}
export default VscRecordKeys;
