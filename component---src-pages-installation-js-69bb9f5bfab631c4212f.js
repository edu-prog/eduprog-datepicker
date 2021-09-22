(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[4017],{6661:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),l=n(316),r=n(5444);function i(e){var t=e.translate,n=e.language,l=e.Code;return[{title:"npm",description:t("npm_description"),code:"npm install --save react-multi-date-picker"},{title:"yarn",description:t("yarn_description"),code:"yarn add react-multi-date-picker"},{title:"Basic Import",description:a.createElement(a.Fragment,null,a.createElement(l,{title:t("import_datepicker")},'import DatePicker from "react-multi-date-picker"'),a.createElement(l,{title:t("import_calendar")},'import { Calendar } from "react-multi-date-picker"'),"fa"===n&&a.createElement(r.Link,{to:"../calendars/#%D8%AA%D9%88%D8%B6%DB%8C%D8%AD%D8%A7%D8%AA"},"فارسی کردن تقویم"))},{title:t("Important Notes"),jsx:a.createElement(a.Fragment,null,a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,t("important_note_description_part_1")),a.createElement("p",null,t("important_note_description_part_2")),a.createElement("p",null,t("important_note_description_part_3")),a.createElement(l,null,"<DatePicker />"),a.createElement("p",null,t("important_note_description_part_4")),a.createElement(l,null,"const [value, setValue] = useState(initialValue)\n.\n.\n.\n<DatePicker \n  value={value}\n  onChange={handleChange}\n/>\n\nfunction handleChange(value){\n  //"+t("important_note_code_comment_1")+"\n  setValue(value)\n}\n\n")),a.createElement("li",null,a.createElement("p",null,t("important_note_description_part_5")),a.createElement("p",null,t("important_note_description_part_6")),a.createElement("p",null,t("important_note_description_part_7")),a.createElement(l,null,"let [value, setValue] = useState(new Date())\n.\n.\n.\n<DatePicker \n  value={value}\n  onChange={setValue}\n/>\n.\n.\n.\n<button onClick={handleSubmit}>submit</button>\n.\n.\n.\nfunction handleSubmit(){\n  if (value instanceof DateObject) value = value.toDate()\n  \n  submitDate(value)\n}\n\n")),a.createElement("li",null,a.createElement("p",null,t("important_note_description_part_8")),a.createElement("p",null,t("important_note_description_part_9")),a.createElement(l,null,'<DatePicker\n  value="'+("en"===n?"05/18/2020 02:20:36":"۰۵/۱۸/۲۰۲۰ ۰۲:۲۰:۳۶")+'"\n  format="MM/DD/YYYY HH:mm:ss"\n'+("en"===n?"/>":'  calendar="persian"\n  locale="fa"\n/>')))))},{title:t("DatePicker"),code:'import React, { useState } from "react"\nimport DatePicker from "react-multi-date-picker"\n\nexport default function Example() {\n  const [value, setValue] = useState(new Date())\n\n  return (\n    <DatePicker \n      value={value}\n      onChange={setValue}\n    />\n  )\n}'},{title:t("Calendar"),code:'import React, { useState } from "react"\nimport { Calendar } from "react-multi-date-picker"\n\nexport default function Example() {\n  const [value, setValue] = useState(new Date())\n\n  return (\n    <Calendar \n      value={value}\n      onChange={setValue}\n    />\n  )\n}'},{title:"DateObject",description:t("dateobject"),code:'import React from "react"\nimport DatePicker, { DateObject } from "react-multi-date-picker"\n\nexport default function Example() {\n  const [value, setValue] = useState(new DateObject())\n  \n  return (\n    <DatePicker \n      value={value} \n      onChange={setValue} \n    />\n  )\n}'}]}function c(e){var t=e.pageContext.language||"en";return a.createElement(l.Z,{language:t,doc:i})}}}]);
//# sourceMappingURL=component---src-pages-installation-js-69bb9f5bfab631c4212f.js.map