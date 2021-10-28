var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { heights, sidePaddings } from "../../config/sizes";
import ArrowDown from '../../icons/ArrowDown';
export var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    position: relative;\n    width: ", ";\n    height: ", "px;\n"], ["\n    box-sizing: border-box;\n    position: relative;\n    width: ", ";\n    height: ", "px;\n"])), function (pr) { return pr.width; }, function (pr) { return heights[pr.innerSize]; });
export var StyledHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    box-sizing: border-box;\n    position: relative;\n\n    input:not([disabled]) {\n        cursor: pointer;\n    }\n"], ["\n    box-sizing: border-box;\n    position: relative;\n\n    input:not([disabled]) {\n        cursor: pointer;\n    }\n"])));
export var StyledArrow = styled(ArrowDown).withConfig({
    shouldForwardProp: function (prop, defPropValFN) {
        return !["innerSize", "upwards"].includes(prop) && defPropValFN(prop);
    },
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-sizing: border-box;\n    position: absolute;\n    right: ", "px;\n    top: 50%;\n    transform: ", ";\n    transition: transform 0.3s;\n\n    pointer-events: none;\n    height: 15px;\n"], ["\n    box-sizing: border-box;\n    position: absolute;\n    right: ", "px;\n    top: 50%;\n    transform: ", ";\n    transition: transform 0.3s;\n\n    pointer-events: none;\n    height: 15px;\n"])), function (pr) { return sidePaddings[pr.innerSize]; }, function (pr) { return pr.upwards ? 'translateY(-50%) rotateZ(180deg)' : 'translateY(-50%)'; });
export var StyledPopover = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transform: translateY(100%);\n\n    width: ", ";\n    box-sizing: border-box;\n    padding: 15px 0;\n    background-color: #fff;\n    box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.2), 0px 4px 5px 1px rgba(0,0,0,0.14), 0px 1px 7px 1px rgba(0,0,0,0.12);\n\n    transition: opacity 0.3s;\n\n    visibility: ", ";\n    opacity: ", ";\n"], ["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    transform: translateY(100%);\n\n    width: ", ";\n    box-sizing: border-box;\n    padding: 15px 0;\n    background-color: #fff;\n    box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.2), 0px 4px 5px 1px rgba(0,0,0,0.14), 0px 1px 7px 1px rgba(0,0,0,0.12);\n\n    transition: opacity 0.3s;\n\n    visibility: ", ";\n    opacity: ", ";\n"])), function (pr) { return pr.width; }, function (pr) { return pr.visible ? 'visible' : 'hidden'; }, function (pr) { return pr.visible ? 1 : 0; });
export var List = styled.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"], ["\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"])));
export var ListItem = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 6px ", "px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #EEEEEE;\n    }\n"], ["\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 6px ", "px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #EEEEEE;\n    }\n"])), function (pr) { return sidePaddings[pr.innerSize]; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map