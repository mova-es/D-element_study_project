import { commonComponentProps, getAttrs } from "../../lib/index.js"

export function ModalWindow (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "modal", getCN, message } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
    <div id="modal" class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
    <div class="${getClassName("main", extraClasses)}">
      <button class="${getClassName("close", extraClasses)}"></button>          
      <h3 class="${getClassName("message", extraClasses)}">${message}</h3>
    </div>
  </div>
    `
}
