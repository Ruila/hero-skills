import{j as n,a,b as h,r as u}from"./index-742e7659.js";import{s,a as k,u as b}from"./styled-components.browser.esm-51e1bed3.js";const S=s.div`
  border: ${t=>t.disabled?"2px solid #e5e5e5":"2px solid #000"};
  color: ${t=>t.disabled?"#e5e5e5":"#000"};
  width: 25px;
  height: 25px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;function p({text:t,action:e,disabled:l}){return n(S,{onClick:l?void 0:e,disabled:l,children:t})}const g=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,v=s.div`
  font-size: 20px;
  margin: 0 8px;
  width: 60px;
  text-align: center;
  text-transform: uppercase;
`,w=s.div`
  font-size: 20px;
  margin: 0 4px;
  width: 60px;
  text-align: center;
`;function x({label:t,value:e,add:l,minus:i,restSkill:d}){return a(g,{children:[n(v,{children:t}),n(p,{text:"+",action:()=>l(t),disabled:d===0}),n(w,{children:e}),n(p,{text:"-",action:()=>i(t),disabled:e===0})]})}const y={str:0,int:0,agi:0,luk:0},B=s.div`
  border: ${t=>t.disabled?"2px solid #e5e5e5":"2px solid #000"};
  color: ${t=>t.disabled?"#e5e5e5":"#000"};
  text-align: center;
  padding: 4px 8px;
  width: ${t=>t.width}px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;function j({text:t,width:e,action:l,disabled:i}){return n(B,{width:e,onClick:i?void 0:l,disabled:i,children:t})}const $=s.div`
  display: flex;
  border: 1px solid black;
  padding: 16px;
  flex-wrap: wrap;
`,L=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
`,C=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  min-width: 140px;
`,H=s.div`
  margin-top: 16px;
  margin-bottom: 8px;
`,A=()=>{const{heroId:t}=h(),[e,l]=u.useState(y),[i,d]=u.useState(0),f=async()=>{const o=await k(Number(t));l(o.data)},m=async()=>{const o=await b(Number(t),e);console.info(o)},r=o=>{l({...e,[o]:e[o]+1}),d(i-1)},c=o=>{l({...e,[o]:e[o]-1}),d(i+1)};return u.useEffect(()=>{f()},[t]),a($,{children:[a(L,{children:[n(x,{restSkill:i,label:"str",value:e.str,add:r,minus:c}),n(x,{restSkill:i,label:"int",value:e.int,add:r,minus:c}),n(x,{restSkill:i,label:"agi",value:e.agi,add:r,minus:c}),n(x,{restSkill:i,label:"luk",value:e.luk,add:r,minus:c})]}),a(C,{children:[a(H,{children:["剩餘點數：",i]}),n(j,{text:"Save",width:80,action:m,disabled:i!==0})]})]})};export{A as default};
