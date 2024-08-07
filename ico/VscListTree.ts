import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListTree icon from VS Code Icons
 * @module
 */
export function VscListTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"rect",attr:{x:"4",y:"9","width":"9","height":"1"}},{tag:"rect",attr:{x:"4",y:"12","width":"7","height":"1"},child:[]},{tag:"rect",attr:{x:"4",y:"6","width":"10","height":"1"},child:[]},{tag:"rect",attr:{x:"1",y:"3","width":"11","height":"1"},child:[]},{tag:"rect",attr:{x:"4",y:"4","width":"1","height":"9"},child:[]}]})(props);
}
export default VscListTree;
