(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[5588],{2381:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),l=n(316),r=n(5444);function c(e){var t=e.translate,n=e.language,l=e.Code;return[{title:"Descriptions",description:"date_object",jsx:a.createElement(a.Fragment,null,a.createElement("p",{style:{fontWeight:"bold"}},t("date_object_v2")),a.createElement(r.Link,{to:"../v2.x/date-object/"},"v2.x ",t("DateObject")))},{title:"Current Moment",description:a.createElement("div",null,a.createElement(l,{title:"gregorian_1"},"const date = new DateObject()\n\nconsole.log(date.year) //2021\nconsole.log(date.month.number) //3\nconsole.log(date.day) //2\nconsole.log(date.calendar) //gregorian\nconsole.log(date.locale) //en"),a.createElement(l,{title:"gregorian_2"},"console.log(date.format()) //2021/03/02"),a.createElement(l,{title:"gregorian_3"},'console.log(date.format("dddd DD MMMM YYYY")) //Tuesday 02 March 2021'),a.createElement(l,{title:"gregorian_4"},'console.log(\n  date.format(\n    "Date: YYYY/MM/DD Time: HH:mm:ss",\n    ["Date", "Time"]\n  )\n) //Date: 2021/03/02 Time: 10:53:00'),a.createElement(l,{title:"gregorian_5"},"const {year, month, day, hour, minute} = date"),a.createElement(l,{title:"gregorian_6"},"const {name, shortName, number, index} = date.month\n\nconsole.log(name, shortName, number, index); //March Mar 3 2"),a.createElement(l,null,"const {name, shortName, number, index} = date.weekDay\n\nconsole.log(name, shortName, number, index); //Tuesday Tue 3 2"),a.createElement(l,{title:"gregorian_7"},"date.toFirstOfMonth()\n\nconsole.log(date.format()); //2021/03/01\n\ndate.toLastOfMonth()\n\nconsole.log(date.format()); //2021/03/31"))},{title:"Adding / Subtracting Time From Original Moment",description:a.createElement(a.Fragment,null,t("add_subtract").map((function(e,t){return a.createElement("p",{key:t},e)})),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:"3"},t("Keys")))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"years"),a.createElement("td",null,"year"),a.createElement("td",null,"y")),a.createElement("tr",null,a.createElement("td",null,"months"),a.createElement("td",null,"month"),a.createElement("td",null,"M")),a.createElement("tr",null,a.createElement("td",null,"days"),a.createElement("td",null,"day"),a.createElement("td",null,"d")),a.createElement("tr",null,a.createElement("td",null,"hours"),a.createElement("td",null,"hour"),a.createElement("td",null,"h")),a.createElement("tr",null,a.createElement("td",null,"minutes"),a.createElement("td",null,"minute"),a.createElement("td",null,"m")),a.createElement("tr",null,a.createElement("td",null,"seconds"),a.createElement("td",null,"second"),a.createElement("td",null,"s")),a.createElement("tr",null,a.createElement("td",null,"milliseconds"),a.createElement("td",null,"millisecond"),a.createElement("td",null,"ms")))),a.createElement(l,{title:"add_subtract_1"},'const date = new DateObject() //2021/03/02\n\ndate.add(5, "days");\n\nconsole.log(date.format()); //2021/03/07'),a.createElement(l,{title:"add_subtract_2"},'date.subtract(1, "month"); \n\nconsole.log(date.format()); //2021/02/07'),a.createElement(l,{title:"add_subtract_3"},'console.log(\n  new DateObject()\n    .add(5, "days")\n    .subtract(1, "month")\n    .format()\n); //2021/02/07'))},{title:"Other Calendar & Locales",description:"other_calendars",jsx:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(r.Link,{to:"../calendars/"+("en"===n?"#calendars":"#تقویم-ها")},t("Calendars"))),a.createElement("p",null,a.createElement(r.Link,{to:"../calendars/"+("en"===n?"#locales":"#زبان-ها")},t("Locales"))))},{title:"Persian Calendar (Solar Hijri) With Farsi Locale",description:t("persian_calendar_farsi_locale"),code:'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n\nconst date = new DateObject({ calendar: persian, locale: persian_fa })\n\nconsole.log(date.format()) //۱۴۰۰/۰۴/۱۳\nconsole.log(date.month.name) //تیر\n'},{title:"Arabic Calendar (Lunar Hijri) With Arabic Locale",code:'import arabic from "react-date-object/calendars/arabic"\nimport arabic_ar from "react-date-object/locales/arabic_ar"\n\nconst date = new DateObject({ calendar: arabic, locale: arabic_ar })\n\nconsole.log(date.format()) //١٤٤٢/١١/٢٤\nconsole.log(date.month.name) //ذیقعده'},{title:"Indian Calendar With Hindi Locale",code:'import indian from "react-date-object/calendars/indian"\nimport indian_hi from "react-date-object/locales/indian_hi"\n\nconst date = new DateObject({ calendar: indian, locale: indian_hi })\n\nconsole.log(date.format()) //१९४३/०४/१३\nconsole.log(date.month.name) //आषाढ़'},{title:"Table of most used properties",jsx:a.createElement(a.Fragment,null,a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{colSpan:"2"},t("Property")),a.createElement("th",{rowSpan:"2"},t("Type")),a.createElement("th",{rowSpan:"2"},t("Example"))),a.createElement("tr",null,a.createElement("th",null,t("DateObject")),a.createElement("th",null,t("Javascript Date")))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"year"),a.createElement("td",{style:{direction:"ltr"}},"getFullYear()"),a.createElement("td",null,"Number"),a.createElement("td",null,"2021")),a.createElement("tr",null,a.createElement("td",null,"month"),a.createElement("td",null,"-"),a.createElement("td",null,"Object"),a.createElement("td",null,"{ length: 31, name: 'March', shortName: 'Mar', index: 2, number: 3, toString: [Function (anonymous)], valueOf: [Function (anonymous)] }")),a.createElement("tr",null,a.createElement("td",null,"month.index"),a.createElement("td",{style:{direction:"ltr"}},"getMonth()"),a.createElement("td",null,"Number"),a.createElement("td",null,"2")),a.createElement("tr",null,a.createElement("td",null,"day"),a.createElement("td",{style:{direction:"ltr"}},"getDate()"),a.createElement("td",null,"Number"),a.createElement("td",null,"2")),a.createElement("tr",null,a.createElement("td",null,"weekDay"),a.createElement("td",null,"-"),a.createElement("td",null,"Object"),a.createElement("td",null,"{ index: 2, number: 3, toString: [Function: toString], valueOf: [Function: valueOf], name: 'Tuesday', shortName: 'Tue' }")),a.createElement("tr",null,a.createElement("td",null,"weekDay.index"),a.createElement("td",{style:{direction:"ltr"}},"getDay()"),a.createElement("td",null,"Number"),a.createElement("td",null,"2")),a.createElement("tr",null,a.createElement("td",null,"hour"),a.createElement("td",{style:{direction:"ltr"}},"getHours()"),a.createElement("td",null,"Number"),a.createElement("td",null,"10")),a.createElement("tr",null,a.createElement("td",null,"minute"),a.createElement("td",{style:{direction:"ltr"}},"getMinutes()"),a.createElement("td",null,"Number"),a.createElement("td",null,"53")),a.createElement("tr",null,a.createElement("td",null,"second"),a.createElement("td",{style:{direction:"ltr"}},"getSeconds()"),a.createElement("td",null,"Number"),a.createElement("td",null,"24")),a.createElement("tr",null,a.createElement("td",null,"millisecond"),a.createElement("td",{style:{direction:"ltr"}},"getMilliseconds()"),a.createElement("td",null,"Number"),a.createElement("td",null,"458")),a.createElement("tr",null,a.createElement("td",{style:{direction:"ltr"}},"valueOf()"),a.createElement("td",{style:{direction:"ltr"}},"valueOf()"),a.createElement("td",null,"Number"),a.createElement("td",null,"1614672704244")),a.createElement("tr",null,a.createElement("td",null,"-"),a.createElement("td",{style:{direction:"ltr"}},"getTimezoneOffset()"),a.createElement("td",null,"Number"),a.createElement("td",null,"-210")),a.createElement("tr",null,a.createElement("td",{style:{direction:"ltr"}},"toUTC()"),a.createElement("td",{style:{direction:"ltr"}},"getUTCDate()"),a.createElement("td",null),a.createElement("td",null)),a.createElement("tr",null,a.createElement("td",{style:{direction:"ltr"}},"setYear()"),a.createElement("td",{style:{direction:"ltr"}},"setFullYear()"),a.createElement("td",null),a.createElement("td",null,"setYear(2021)")),a.createElement("tr",null,a.createElement("td",{style:{direction:"ltr"}},"setMonth()"),a.createElement("td",{style:{direction:"ltr"}},"setMonth()"),a.createElement("td",null),a.createElement("td",{style:{color:"red"}},"setMonth(10)*")),a.createElement("tr",null,a.createElement("td",{style:{direction:"ltr"}},"setDay()"),a.createElement("td",{style:{direction:"ltr"}},"setDate()"),a.createElement("td",null),a.createElement("td",null,"setDay(7)")))),a.createElement("p",{style:{color:"red"}},"*",t("table_1")),a.createElement(l,{title:"table_2"},'const date = new DateObject()\n\ndate.year = 2020\ndate.month = 3\ndate.day = 4\n\nconsole.log(date.format()) //2020/03/04\n\ndate.set({ year: 2010, month: 4, day: 7 })\n\nconsole.log(date.format()) //2010/04/07\n\nconsole.log(\n  date\n    .setYear(2000)\n    .setMonth(1)\n    .setDay(1)\n    .format()\n) //2000/01/01\n\nconsole.log(\n  date\n    .set("year", 1907)\n    .set("month", 7)\n    .set("day", 7)\n    .format()\n) //1907/07/07'))},{title:"New DateObject From String",description:a.createElement("div",null,a.createElement("p",null,t("string_1")),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,t("string_2")),a.createElement("ol",null,a.createElement("li",null,a.createElement("p",null,t("string_3"))),a.createElement("li",null,a.createElement("div",{dangerouslySetInnerHTML:{__html:"<p>"+t("string_4")+"</p>"}}))),a.createElement(l,null,'var date = new DateObject("2020 8 21 11 55 36 100 am");\n\ndate.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/21 11:55:36.100 am\n\ndate = new DateObject("2020/08/01");\n\ndate.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/01 12:00:00.000 am')),a.createElement("li",null,a.createElement(l,{title:"string_5"},'const date = new DateObject({\n  date: "September 04 2021, 12:42 am",\n  format: "MMMM DD YYYY, HH:mm a"\n})\n\nconsole.log(date.format()); //September 04 2021, 12:42 pm'),a.createElement(l,{title:"string_6_v3"},'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n\nconst date = new DateObject({\n  date: "1400/05/14 18:35:44",\n  format: "YYYY/MM/DD HH:mm:ss",\n  calendar: persian,\n  locale: persian_fa\n})\n\nconsole.log(\n  date.format("DD MMMM سال YYYY, ساعت HH و mm دقیقه")\n); //۱۴ مرداد سال ۱۴۰۰, ساعت ۱۸ و ۳۵ دقیقه'))),a.createElement("p",null,t("string_7")),a.createElement("p",null,t("string_8")),a.createElement(l,null,'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n\nconst date = new DateObject({\n  date: "2021/01/01",\n  calendar: persian,\n  locale: persian_fa\n})'),a.createElement("p",null,t("string_9")),a.createElement("p",null,t("string_10")),a.createElement(l,null,'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n\nconst date = new DateObject("2021/01/01").convert(persian, persian_fa)'),a.createElement("p",null,t("string_11")),a.createElement(l,null,"console.log(date.format()) //۱۳۹۹/۱۰/۱۲"),a.createElement("p",null,t("string_12")))},{title:"New DateObject from javascript Date",code:"const date = new DateObject(new Date(2020, 1, 15))\n\nconsole.log(date.format()) //2020/01/15"},{title:"Persian DateObject from javascript Date",code:'import persian from "react-date-object/calendars/persian"\n\nconst date = new DateObject({\n  date: new Date(2020, 1, 15),\n  calendar: persian\n})\n\nconsole.log(date.format()) //1399/10/26'},{title:"New DateObject From Numbers",code:"const date = new DateObject({\n  year:"+("en"===n?"2021":"1400")+",\n  month:10,\n  day:22,\n"+("en"===n?"})":"  calendar: persian,\n  locale: persian_fa\n})")+'\n\nconsole.log(date.format("dddd DD MMMM'+("en"===n?"":" سال")+' YYYY")) //'+("en"===n?"Friday 22 October 2021":"چهارشنبه ۲۲ دی سال ۱۴۰۰")},{title:"New DateObject from Unix Timestamp",description:a.createElement("div",null,a.createElement("div",{dangerouslySetInnerHTML:{__html:"<p>"+t("unix_1")+"</p>"}}),a.createElement("p",null,t("unix_2")),a.createElement("p",null,t("unix_3")),a.createElement(l,null,("fa"===n?'import persian from "react-date-object/calendars/persian"\n\n':"")+"const date = new DateObject("+("en"===n?"{\n  date: 1614678083 * 1000\n}":"{\n  date: 1614678083 * 1000,\n  calendar: persian\n}")+")\n\nconsole.log(date.format()) //"+("en"===n?"2021/03/02":"1399/12/12")),a.createElement(l,{title:"unix_4"},"const date = new DateObject(1614678083 * 1000)"),a.createElement(l,{title:"unix_5"},"console.log(date.toUnix()) //1614678083"))},{title:"Converting Calendars",description:"convert"},{title:"Gregorian Calendar to Persian Calendar",description:"gregorian_to_persian",jsx:a.createElement(a.Fragment,null,a.createElement(l,{title:"gregorian_to_persian_first"},'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n\n//--\x3e 1\nconst date = new DateObject()\nconsole.log(date.format()) //2021/07/05\n//<--\n\n//--\x3e2\ndate.convert(persian, persian_fa)\nconsole.log(date.format()) //۱۴۰۰/۰۴/۱۴\n//<--'),a.createElement(l,{title:"gregorian_to_persian_second"},'import persian from "react-date-object/calendars/persian"\nimport persian_fa from "react-date-object/locales/persian_fa"\n\nconst date = new DateObject().convert(persian, persian_fa)\nconsole.log(date.format()) //۱۴۰۰/۰۴/۱۴'))},{title:"Persian Calendar to Arabic Calendar",description:"persian_to_arabic",code:'import persian from "react-date-object/calendars/persian"\nimport arabic from "react-date-object/calendars/arabic"\nimport arabic_en from "react-date-object/locales/arabic_en"\n\nconst date = new DateObject({calendar:persian, date:"1399/12/24"})\n        \ndate.convert(arabic, arabic_en)\n\nconsole.log(date.format()) //1442/07/30'},{title:"Arabic Calendar to Persian Calendar",code:'import arabic from "react-date-object/calendars/arabic"\nimport persian from "react-date-object/calendars/persian"\nimport persian_en from "react-date-object/locales/persian_en"\n\nconst date = new DateObject({ calendar: arabic, date: "1442/05/10" })\n\ndate.convert(persian, persian_en)\n\nconsole.log(date.format()) //1399/10/05'},{title:"Gregorian Calendar to Indian Calendar",code:'import indian from "react-date-object/calendars/indian"\nimport indian_en from "react-date-object/locales/indian_en"\n\nconsole.log(new DateObject().convert(indian, indian_en).format()) //1942/12/11'}]}function o(e){var t=e.pageContext.language||"en";return a.createElement(l.Z,{language:t,doc:c})}}}]);
//# sourceMappingURL=component---src-pages-date-object-js-9d269075e992cbad46c3.js.map