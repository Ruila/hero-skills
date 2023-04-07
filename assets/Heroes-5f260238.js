import{u as x,a as i,j as t,R as p,r as o,O as d}from"./index-742e7659.js";import{s as r,g as l}from"./styled-components.browser.esm-51e1bed3.js";const g=r.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  cursor: pointer;
`,m=r.img`
  width: 80px;
  height: 80px;
`;function u({id:a,name:s,image:e}){const n=x();return i(g,{onClick:()=>n(`/heroes/${a}`),children:[t(m,{src:e}),t("div",{children:s})]})}const f=r.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;
`,c=p.memo(({data:a})=>{const s=a.map(e=>t(u,{id:e.id,name:e.name,image:e.image},e.image));return t(f,{children:s})});c.displayName="HeroesBox";const h=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;function v(){const[a,s]=o.useState([]),e=async()=>{const n=await l();s(n.data)};return o.useEffect(()=>{e()},[]),i(h,{children:[t(c,{data:a}),t(d,{})]})}export{v as default};
