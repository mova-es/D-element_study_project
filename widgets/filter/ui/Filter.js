import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";

export function Filter(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "filter",
        getCN,
        category
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
            <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-filter="" >
            ${category.map(cat => `<label><input ${cat.isChecked ? "checked" : ""} type="checkbox" value="${cat.searchParam}" data-js-search-param="">${cat.name}</label>`).join(" ")}
            </div>
            `
}