import type { CompiledQuery } from 'css-select/lib/types';
import type { AnyNode, Element, NodeWithChildren } from 'domhandler/lib/node';
export declare function getSelector<T>(pattern: string): CompiledQuery<T>;
export declare function selectAll(parent: NodeWithChildren | NodeWithChildren[], selector: string, minCount?: number, maxCount?: number): Element[];
export declare function selectOne(parent: NodeWithChildren | NodeWithChildren[], selector: string): Element;
export declare function selectOneOrNull(parent: NodeWithChildren | NodeWithChildren[], selector: string): Element;
export declare function selectFirst(parent: NodeWithChildren | NodeWithChildren[], selector: string): Element;
export declare function selectFirstOrNull(parent: NodeWithChildren | NodeWithChildren[], selector: string): Element;
export declare type InnerTextOptions = {
    separator?: string;
    transform?: (text: string) => string;
};
export declare function innerText(elems: AnyNode | (AnyNode)[], options?: InnerTextOptions): string;
export declare function innerTextNotEmpty(elems: AnyNode | (AnyNode)[], options?: InnerTextOptions): string;
