import type {CompiledQuery} from 'css-select/lib/types'
import type {AnyNode, Element, NodeWithChildren} from 'domhandler/lib/node'
import * as CssSelect from 'css-select'
import * as domutils from 'domutils'

const _selectors = new Map<string, CompiledQuery<any>>()

export function getSelector<T>(pattern: string): CompiledQuery<T> {
  let selector = _selectors.get(pattern)
  if (!selector) {
    selector = CssSelect.compile(pattern)
    _selectors.set(pattern, selector)
  }
  return selector
}

export function selectAll(
  parent: NodeWithChildren | NodeWithChildren[],
  selector: string,
  minCount?: number,
  maxCount?: number,
) {
  const elems = CssSelect.selectAll<NodeWithChildren, Element>(
    getSelector(selector),
    parent,
  )
  if (minCount != null && elems.length < minCount) {
    throw new Error(`elems.length (${elems.length}) < ${minCount} for: ${selector}`)
  }
  if (maxCount != null && elems.length > maxCount) {
    throw new Error(`elems.length (${elems.length}) > ${minCount} for: ${selector}`)
  }
  return elems
}

export function selectOne(parent: NodeWithChildren | NodeWithChildren[], selector: string) {
  const elems = selectAll(parent, selector, 1, 1)
  return elems[0]
}

export function selectOneOrNull(parent: NodeWithChildren | NodeWithChildren[], selector: string) {
  const elems = selectAll(parent, selector, 0, 1)
  return elems.length ? elems[0] : null
}

export function selectFirst(parent: NodeWithChildren | NodeWithChildren[], selector: string) {
  const elem = CssSelect.selectOne<NodeWithChildren, Element>(
    getSelector(selector),
    parent,
  )
  if (!elem) {
    throw new Error(`elem not found for: ${selector}`)
  }
  return elem
}

export function selectFirstOrNull(parent: NodeWithChildren | NodeWithChildren[], selector: string) {
  const elems = selectAll(parent, selector)
  return elems.length ? elems[0] : null
}

export type InnerTextOptions = {
  separator?: string
  transform?: (text: string) => string
}

export function innerText(elems: AnyNode | (AnyNode)[], options?: InnerTextOptions) {
  if (!elems) {
    return null
  }

  let text: string
  if (options?.separator && Array.isArray(elems)) {
    text = elems.map(elem => domutils.innerText(elems)).join(options?.separator)
  }
  else {
    text = elems && domutils.innerText(elems)
  }

  if (text != null && options?.transform) {
    text = options?.transform(text)
  }

  return text
}

export function innerTextNotEmpty(
  elems: AnyNode | (AnyNode)[],
  options?: InnerTextOptions,
) {
  const text = innerText(elems, options)
  if (!text) {
    throw new Error('innerText is empty')
  }
  return text
}

