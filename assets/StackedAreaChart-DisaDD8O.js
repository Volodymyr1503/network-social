import{j as t}from"./index-CQwiO5uf.js";import{R as n,y as d}from"./generateCategoricalChart-DuRVXbPy.js";import{A as c}from"./AreaChart-GbLrDLp4.js";import{C as l,X as m,Y as p}from"./YAxis-p9FyoFA4.js";import{A as r}from"./Area-nBbc6W60.js";const x={open:"Відкритих",completed:"Зроблених",inProgress:"В процесі"},h=({active:e,payload:o,label:a})=>e&&o&&o.length?t.jsxs("div",{style:{backgroundColor:"white",border:"1px solid #ccc",padding:"10px"},children:[t.jsx("p",{children:`Дата: ${a}`}),o.map((s,i)=>t.jsx("p",{style:{color:s.color},children:`${x[s.name]}: ${s.value}`},`item-${i}`))]}):null,y=({data:e})=>t.jsx(n,{width:"100%",height:"100%",children:t.jsxs(c,{width:500,height:400,data:e,margin:{top:80,right:50,left:10,bottom:20},children:[t.jsx(l,{strokeDasharray:"3 3"}),t.jsx(m,{dataKey:"name"}),t.jsx(p,{}),t.jsx(d,{content:t.jsx(h,{})}),t.jsx(r,{type:"monotone",dataKey:"open",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.jsx(r,{type:"monotone",dataKey:"completed",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.jsx(r,{type:"monotone",dataKey:"inProgress",stackId:"1",stroke:"#ffc658",fill:"#ffc658"})]})});export{y as default};
