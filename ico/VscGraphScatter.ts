import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GraphScatter icon from VS Code Icons
 * @module
 */
export function VscGraphScatter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M15 13V14H1.5L1 13.5V0H2V13H15Z"}},{tag:"rect",attr:{x:"5",y:"2","width":"2","height":"2"},child:[]},{tag:"rect",attr:{x:"12",y:"1","width":"2","height":"2"},child:[]},{tag:"rect",attr:{x:"8",y:"5","width":"2","height":"2"},child:[]},{tag:"rect",attr:{x:"5",y:"9","width":"2","height":"2"},child:[]},{tag:"rect",attr:{x:"12",y:"8","width":"2","height":"2"},child:[]}]})(props);
}
export default VscGraphScatter;
