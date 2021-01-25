(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),a=n.n(s),r=n(20),o=n.n(r),j=(n(27),n(2)),i=n(4),l=n.n(i),b=function(t){var e=t.projectId,n=t.successCallback;return Object(c.jsx)("button",{class:"btn btn-danger",onClick:function(t){l.a.delete("http://localhost:8000/api/project/".concat(e)).then((function(t){return n(e)}))},children:"Delete"})},u=n(9),h=n.n(u),d=function(t){var e=Object(s.useState)([]),n=Object(j.a)(e,2),a=n[0],r=n[1],o=Object(s.useState)(!1),i=Object(j.a)(o,2),u=i[0],d=i[1];Object(s.useEffect)((function(){O()}),[]);var O=function(){l.a.get("http://localhost:8000/api/project").then((function(t){console.log(t.data),r(t.data),d(!0)})).catch((function(t){return console.error(t)}))},p=function(t){r(a.filter((function(e){return e._id!==t})))},x=function(t,e){l.a.put("http://localhost:8000/api/project/".concat(t,"/edit"),{status:e}).then((function(t){console.log(t.data),O()})).catch((function(t){return console.error(t)}))};return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{class:"table",children:[Object(c.jsx)("thead",{class:"table-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("h2",{children:"BackLog"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h2",{children:"In Progress"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h2",{children:"Completed"})})]})}),Object(c.jsx)("tbody",{children:u&&Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:a.filter((function(t){return"backlog"===t.status})).map((function(t,e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h5",{children:[" ",t.name," "]}),Object(c.jsxs)("p",{children:[" Due:  ",h()(t.dueDate).format("MM/DD/YYYY"),"  "]}),Object(c.jsx)("button",{class:"btn btn-warning",onClick:function(e){return x(t._id,"in progress")},children:" Start Project "})]},e)}))}),Object(c.jsx)("td",{children:a.filter((function(t){return"in progress"===t.status})).map((function(t,e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h5",{children:[" ",t.name," "]}),Object(c.jsxs)("p",{children:[" Due: ",h()(t.dueDate).format("MM/DD/YYYY")," "]}),Object(c.jsx)("button",{class:"btn btn-success",onClick:function(e){return x(t._id,"completed")},children:" Move to Completed "})]},e)}))}),Object(c.jsx)("td",{children:a.filter((function(t){return"completed"===t.status})).map((function(t,e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h5",{children:[" ",t.name," "]}),Object(c.jsxs)("p",{children:[" Due: ",h()(t.dueDate).format("MM/DD/YYYY"),"  "]}),Object(c.jsx)(b,{projectId:t._id,successCallback:function(){return p(t._id)}})]},e)}))})]})})})]})})},O=n(3),p=function(){var t=Object(s.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1];Object(s.useEffect)((function(){l.a.get("http://localhost:8000/api/project").then((function(t){a(t.data)})).catch((function(t){return console.log(t)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{to:"/new",children:"Add a Project"}),Object(c.jsx)("button",{class:"btn btn-danger",onClick:function(t){l.a.get("http://localhost:8000/api/logout").then((function(t){console.log(t),Object(O.c)("/")})).catch((function(t){return console.log(t)}))},children:"Logout"}),Object(c.jsx)(d,{data:n})]})},x=n(7),f=n(6),g=function(t){var e=t.onSubmitProp,n=t.handleChange;return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{to:"/project",children:"Back to Dashboard"}),Object(c.jsxs)("form",{onSubmit:e,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Name"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"name",onChange:n})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Due Date"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"date",name:"dueDate",onChange:n})]}),Object(c.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Plan Project"})]})]})},m=function(t){var e=Object(s.useState)([]),n=Object(j.a)(e,2),a=n[0],r=n[1],o=Object(s.useState)({name:"",dueDate:""}),i=Object(j.a)(o,2),b=i[0],u=i[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{newProject:b,onSubmitProp:function(t){console.log(t),t.preventDefault(),l.a.post("http://localhost:8000/api/new",b).then((function(t){Object(O.c)("/project")})).catch((function(t){for(var e=t.response.data.errors,n=[],c=0,s=Object.keys(e);c<s.length;c++){var a=s[c];n.push(e[a].message)}r(n)}))},handleChange:function(t){console.log("e.target.name: ",t.target.name),console.log("e.target.value: ",t.target.value),u(Object(f.a)(Object(f.a)({},b),{},Object(x.a)({},t.target.name,t.target.value)))}}),a.map((function(t,e){return Object(c.jsx)("p",{children:t},e)}))]})},v=function(t){var e=t.setUser,n=Object(s.useState)([]),a=Object(j.a)(n,2),r=a[0],o=a[1],i=Object(s.useState)({email:"",password:""}),b=Object(j.a)(i,2),u=b[0],h=b[1],d=function(t){console.log("changing state"),h(Object(f.a)(Object(f.a)({},u),{},Object(x.a)({},t.target.name,t.target.value)))};return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l.a.post("http://localhost:8000/api/login",u).then((function(t){console.log(t.data.user),e(t.data.user),Object(O.c)("/project")})).catch((function(t){var e=t.response.data.errors;console.log(t.response);for(var n=[],c=0,s=Object.keys(e);c<s.length;c++){var a=s[c];console.log(a),n.push(e[a])}o(n)}))},children:[Object(c.jsxs)("p",{children:["email",Object(c.jsx)("input",{type:"text",name:"email",onChange:d})]}),Object(c.jsxs)("p",{children:["password",Object(c.jsx)("input",{type:"text",name:"password",onChange:d})]}),Object(c.jsx)("button",{type:"submit",children:"Login"}),r.map((function(t,e){return Object(c.jsx)("p",{children:t},e)}))]})},C=function(t){var e=t.setUser,n=Object(s.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),a=Object(j.a)(n,2),r=a[0],o=a[1];console.log(r);var i=Object(s.useState)([]),b=Object(j.a)(i,2),u=b[0],h=b[1];console.log(u);var d=function(t){console.log("changing state"),o(Object(f.a)(Object(f.a)({},r),{},Object(x.a)({},t.target.name,t.target.value)))};return Object(c.jsxs)("form",{onSubmit:function(t){console.log("submitting form"),t.preventDefault(),l.a.post("http://localhost:8000/api/register",r).then((function(t){console.log(t.data),e(t.data.user),Object(O.c)("/project")})).catch((function(t){for(var e=t.response.data.errors,n=[],c=0,s=Object.keys(e);c<s.length;c++){var a=s[c];n.push(e[a].message)}h(n)}))},children:[Object(c.jsxs)("p",{children:["firstName",Object(c.jsx)("input",{type:"text",name:"firstName",onChange:d})]}),Object(c.jsxs)("p",{children:["lastName",Object(c.jsx)("input",{type:"text",name:"lastName",onChange:d})]}),Object(c.jsxs)("p",{children:["email",Object(c.jsx)("input",{type:"text",name:"email",onChange:d})]}),Object(c.jsxs)("p",{children:["password",Object(c.jsx)("input",{type:"text",name:"password",onChange:d})]}),Object(c.jsxs)("p",{children:["confirmPassword",Object(c.jsx)("input",{type:"text",name:"confirmPassword",onChange:d})]}),Object(c.jsx)("button",{type:"submit",children:"Register"}),u.map((function(t,e){return Object(c.jsx)("p",{children:t},e)}))]})},D=function(){var t=Object(s.useState)(null),e=Object(j.a)(t,2),n=(e[0],e[1]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{path:"/register",setUser:n}),Object(c.jsx)(v,{path:"/login",setUser:n})]})};var y=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(O.b,{children:[Object(c.jsx)(D,{path:"/"}),Object(c.jsx)(p,{path:"/project"}),Object(c.jsx)(m,{path:"/new"})]})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),a(t),r(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),S()}},[[53,1,2]]]);
//# sourceMappingURL=main.10ea1b76.chunk.js.map