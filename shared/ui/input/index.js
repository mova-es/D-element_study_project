import { commonComponentProps, getAttrs } from "../../lib/index.js"

export function Input (props) {
    const { type ="text", extraClasses = {}, extraAttrs ={}, baseClass = "input", getCN } = { ...commonComponentProps }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<input type="${type}" class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>`
}
