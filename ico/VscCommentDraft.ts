import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CommentDraft icon from VS Code Icons
 * @module
 */
export function VscCommentDraft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M14.5 2.00098H13V3.00098H14V4.00098H15V2.50098L14.5 2.00098ZM9 2.00098H11V3.00098H9V2.00098ZM5 2.00098H7V3.00098H5V2.00098ZM14 10.001V11.001V12.001H14.5L15 11.501V10.001H14ZM12 12.001V11.001H10V12.001H12ZM8 11.001H7.5L7.146 11.147L5 13.294V11.501L4.5 11.001H4V12.001V14.501L4.854 14.855L7.707 12.001H8V11.001ZM15 8.00098V6.00098H14V8.00098H15ZM2 11.001V10.001H1V11.501L1.5 12.001H2V11.001ZM2 8.00098V6.00098H1V8.00098H2ZM2 3.00098V4.00098H1V2.50098L1.5 2.00098H3V3.00098H2Z"}}]})(props);
}
export default VscCommentDraft;
