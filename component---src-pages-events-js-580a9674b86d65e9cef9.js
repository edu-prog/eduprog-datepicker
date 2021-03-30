(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[651],{4835:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var a=t(7294),l=t(591),o=t(7821);function r(n,e,t){var l=(0,a.useState)({format:"MM/DD/YYYY"}),r=l[0],i=l[1],c=r.date,s=r.format,d=r.gregorian,u=void 0===d?"":d,p=r.persian,m=void 0===p?"":p,Y=r.arabic,v=void 0===Y?"":Y,g=r.indian,h=void 0===g?"":g,D=r.jsDate,f=void 0===D?"":D,E=function(n,e){void 0===e&&(e=r.format);var t={date:n,format:e};i(Object.assign({gregorian:new o.NT(t).convert("gregorian").format(),persian:new o.NT(t).convert("persian").format(),arabic:new o.NT(t).convert("arabic").format(),indian:new o.NT(t).convert("indian").format(),jsDate:n.toDate()},t))},M=function(n){var e=n.children;return a.createElement("span",{style:{fontWeight:"bold"}},e)},b=(0,a.useState)(!1),C=b[0],S=b[1],j=(0,a.useState)(!1),O=j[0],k=j[1];return[{title:"On Change (single mode)",description:"on_change",code:'const [state, setState] = useState({ format: "MM/DD/YYYY" })\n\nconst {\n  date,\n  format,\n  gregorian = "",\n  persian = "",\n  arabic = "",\n  indian = "",\n  jsDate = ""\n} = state\n  \nconst convert = (date, format = state.format) => {\n  let object = { date, format }\n  \n  setState({\n    gregorian: new DateObject(object)'+("en"===e?"":'.convert("gregorian")')+".format(),\n    persian: new DateObject(object)"+("en"===e?'.convert("persian")':"")+'.format(),\n    arabic: new DateObject(object).convert("arabic").format(),\n    indian: new DateObject(object).convert("indian").format(),\n    jsDate: date.toDate(),\n    ...object\n  })\n}\n  \nconst Span = ({ children }) => <span style={{ fontWeight: "bold" }}>{children}</span>\n\nreturn(\n  <div>\n    <div>\n      <div>\n        <Span>'+n("click to select")+": </Span>\n        <DatePicker\n          value={date}\n          onChange={convert}\n        "+("en"===e?"/>":'  calendar="persian"\n          locale="fa"\n          calendarPosition="auto-right"\n        />')+"\n      </div>\n      <div>\n        <Span>"+n("format")+': </Span>\n        <select\n          value={format}\n          onChange={e => convert(date, e.target.value)}\n          className="select"\n        >\n          <option>MM/DD/YYYY</option>\n          <option>DD-MM-YYYY</option>\n          <option>YYYY,MM,DD</option>\n          <option>dddd DD MMMM YYYY</option>\n          <option>ddd MMM DD YYYY HH:mm:ss</option>\n          <option>MMM/DD/YYYY hh:mm:ss a</option>\n          <option>MMM/DD/YYYY HH:mm:ss</option>\n        </select>\n      </div>\n      <div>\n        <Span>'+n("gregorian")+": </Span>\n        <span>{gregorian}</span>\n      </div>\n      <div>\n        <Span>"+n("persian")+": </Span>\n        <span>{persian}</span>\n      </div>\n      <div>\n        <Span>"+n("arabic")+": </Span>\n        <span>{arabic}</span>\n      </div>\n      <div>\n        <Span>"+n("indian")+": </Span>\n        <span>{indian}</span>\n      </div>\n      <div>\n        <Span>"+n("javascript date")+": </Span>\n        <span>{jsDate.toString()}</span>\n      </div>\n    </div>\n  </div>\n)\n",jsx:a.createElement("div",null,a.createElement("div",null,a.createElement("div",null,a.createElement(M,null,n("click to select"),": "),a.createElement(o.ZP,Object.assign({value:c,onChange:E},t))),a.createElement("div",null,a.createElement(M,null,n("format"),": "),a.createElement("select",{value:s,onChange:function(n){return E(c,n.target.value)},className:"select",onBlur:function(){}},a.createElement("option",null,"MM/DD/YYYY"),a.createElement("option",null,"DD-MM-YYYY"),a.createElement("option",null,"YYYY,MM,DD"),a.createElement("option",null,"dddd DD MMMM YYYY"),a.createElement("option",null,"ddd MMM DD YYYY HH:mm:ss"),a.createElement("option",null,"MMM/DD/YYYY hh:mm:ss a"),a.createElement("option",null,"MMM/DD/YYYY HH:mm:ss"))),a.createElement("div",null,a.createElement(M,null,n("gregorian"),": "),a.createElement("span",null,u)),a.createElement("div",null,a.createElement(M,null,n("persian"),": "),a.createElement("span",null,m)),a.createElement("div",null,a.createElement(M,null,n("arabic"),": "),a.createElement("span",null,v)),a.createElement("div",null,a.createElement(M,null,n("indian"),": "),a.createElement("span",null,h)),a.createElement("div",null,a.createElement(M,null,n("javascript date"),": "),a.createElement("span",null,f.toString()))))},{title:"On Change (multiple mode)",code:"<DatePicker\n  multiple\n  onChange={array => { //"+n("Array of Dateobjecs")+'\n    alert("'+n("selected dates")+' :\\n" + array.join(",\\n"))\n  }}\n/>',jsx:a.createElement(o.ZP,Object.assign({multiple:!0,onChange:function(e){alert(n("selected dates")+" :\n"+e.join(",\n"))}},t))},{title:"OnOpen",description:"on_open",code:"const [shouldOpenCalendar, setShouldOpenCalendar] = useState(false)\n.\n.\n.\n<div>\n  <DatePicker\n    onOpen={() => shouldOpenCalendar}\n  "+("en"===e?"/>":'  calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  />')+'\n  <label>\n    <input\n      type="checkbox"\n      checked={shouldOpenCalendar}\n      onChange={() => setShouldOpenCalendar(!shouldOpenCalendar)}\n    />\n    '+n("Should open calendar")+"\n  </label>\n</div>",jsx:a.createElement("div",null,a.createElement(o.ZP,Object.assign({onOpen:function(){return O}},t)),a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:O,onChange:function(){return k(!O)}}),n("Should open calendar")))},{title:"OnClose",code:"const [shouldCloseCalendar, setShouldCloseCalendar] = useState(false)\n.\n.\n.\n<div>\n  <DatePicker\n    onClose={() => shouldCloseCalendar}\n  "+("en"===e?"/>":'  calendar="persian"\n    locale="fa"\n    calendarPosition="auto-right"\n  />')+'\n  <label>\n    <input\n      type="checkbox"\n      checked={shouldCloseCalendar}\n      onChange={() => setShouldCloseCalendar(!shouldCloseCalendar)}\n    />\n    '+n("Should close calendar")+"\n  </label>\n</div>",jsx:a.createElement("div",null,a.createElement(o.ZP,Object.assign({onClose:function(){return C}},t)),a.createElement("label",null,a.createElement("input",{type:"checkbox",checked:C,onChange:function(){return S(!C)}}),n("Should close calendar")))},{title:"onPositionChange",description:"on_position_change",code:"<DatePicker\n  onPositionChange={data => console.log(data)}\n/>",jsx:a.createElement(o.ZP,Object.assign({onPositionChange:function(n){return console.log(n)}},t))}]}function i(n){var e=n.pageContext.language||"en";return a.createElement(l.Z,{language:e,doc:r})}}}]);
//# sourceMappingURL=component---src-pages-events-js-580a9674b86d65e9cef9.js.map