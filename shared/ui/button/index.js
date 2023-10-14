import { commonComponentProps, getAttrs } from "../../lib/index.js"

export function Button (props) {
    const { label ="press me", extraClasses = {}, extraAttrs ={}, baseClass = "btn", getCN, children = false } = { ...commonComponentProps }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<button class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
        ${children || `<span class="${getClassName("label")}">${label}</span>`}
        </button>
    `
}
