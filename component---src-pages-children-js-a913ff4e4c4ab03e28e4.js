(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[5525],{7556:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var a=t(7294),r=t(5361),l=t(7821);function c(e){var n=e.translate,t=e.language,r=e.otherProps,c=(0,a.useState)(new Date),i=c[0],o=c[1];return[{title:"Calendar With Children",code:'import { useState } from "react"\nimport { Calendar } from "react-multi-date-picker"\n'+("en"===t?"":'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n')+"\nexport default function Example() {\n  const [value, setValue] = useState(new Date())\n\n  return (\n    <Calendar\n      value={value}\n      onChange={setValue}\n    "+("en"===t?">":"  calendar={persian}\n      locale={fa}\n    >")+'\n      <button\n        style={{ margin: "5px" }}\n        onClick={() => setValue(undefined)}\n      >\n        '+n("DESELECT")+'\n      </button>\n      <button\n        style={{ margin: "5px" }}\n        onClick={() => setValue(new Date())}\n      >\n        '+n("TODAY")+"\n      </button>\n    </Calendar>\n  )\n}",jsx:a.createElement(l.f,Object.assign({value:i,onChange:o},r),a.createElement("button",{style:{margin:"5px"},onClick:function(){return o(void 0)}},n("DESELECT")),a.createElement("button",{style:{margin:"5px"},onClick:function(){return o(new Date)}},n("TODAY")))},{title:"DatePicker With Children",code:'import DatePicker from "react-multi-date-picker"\n'+("en"===t?"":'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n')+"\nexport default function Example() {\n  return (\n    <DatePicker"+("en"===t?">":'\n      calendar={persian}\n      locale={fa}\n      calendarPosition="bottom-right"\n    >')+'\n      <button\n        style={{ margin: "5px 0" }}\n        onClick={() => alert("'+n("clicked")+'")}\n      >\n        '+n("click me")+"\n      </button>\n    </DatePicker>\n  )\n}",jsx:a.createElement(l.ZP,r,a.createElement("button",{style:{margin:"5px 0"},onClick:function(){return alert(n("clicked"))}},n("click me")))}]}function i(e){var n=e.pageContext.language||"en";return a.createElement(r.Z,{language:n,doc:c})}}}]);
//# sourceMappingURL=component---src-pages-children-js-a913ff4e4c4ab03e28e4.js.map