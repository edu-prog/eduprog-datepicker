(self.webpackChunkdate_picker=self.webpackChunkdate_picker||[]).push([[525],{7556:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var a=t(7294),l=t(591),r=t(7821);function c(n,e,t){var l=(0,a.useState)(new Date),c=l[0],i=l[1];return[{title:"Calendar With Children",code:"const [value, setValue] = useState(new Date())\n.\n.\n.\n<Calendar\n  value={value}\n  onChange={setValue}\n"+("en"===e?">":'  calendar="persian"\n  locale="fa"\n>')+'\n  <button\n    style={{ margin: "5px" }}\n    onClick={() => setValue(undefined)}\n  >\n    '+n("DESELECT")+'\n  </button>\n  <button\n    style={{ margin: "5px" }}\n    onClick={() => setValue(new Date())}\n  >\n    '+n("TODAY")+"\n  </button>\n</Calendar>",jsx:a.createElement(r.f,Object.assign({value:c,onChange:i},t),a.createElement("button",{style:{margin:"5px"},onClick:function(){return i(void 0)}},n("DESELECT")),a.createElement("button",{style:{margin:"5px"},onClick:function(){return i(new Date)}},n("TODAY")))},{title:"DatePicker With Children",code:"<DatePicker"+("en"===e?">":'\n  calendar="persian"\n  locale="fa"\n  calendarPosition="auto-right"\n>')+'\n  <button\n    style={{ margin: "5px 0" }}\n    onClick={() => alert("'+n("clicked")+'")}\n  >\n    '+n("click me")+"\n  </button>\n</DatePicker>",jsx:a.createElement(r.ZP,t,a.createElement("button",{style:{margin:"5px 0"},onClick:function(){return alert(n("clicked"))}},n("click me")))}]}function i(n){var e=n.pageContext.language||"en";return a.createElement(l.Z,{language:e,doc:c})}}}]);
//# sourceMappingURL=component---src-pages-children-js-d186fbfcc107e6a3e1e7.js.map