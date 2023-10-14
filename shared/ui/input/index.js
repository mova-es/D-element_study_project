import { commonComponentProps, getAttrs } from "../../lib/index.js"

export function Input (props) {
    const { type ="", extraClasses = {}, extraAttrs ={}, baseClass = "input", getCN } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<input type="${type}" class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>`
}
