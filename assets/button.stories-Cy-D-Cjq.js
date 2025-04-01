import{j as $}from"./jsx-runtime-D_zvdyIk.js";const t=({children:S,variant:b="primary",size:B="md",fullWidth:C=!1,...O})=>{const j="inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all",w={primary:"bg-primary-600 text-white hover:bg-primary-700",secondary:"bg-neutral-100 text-neutral-900 hover:bg-neutral-200",outline:"border border-neutral-200 text-neutral-900 hover:bg-neutral-100"},L={sm:"h-8 px-3 text-sm",md:"h-10 px-4 text-base",lg:"h-12 px-6 text-lg"},T=C?"w-full":"",_=`${j} ${w[b]} ${L[B]} ${T}`;return $.jsx("button",{className:_,...O,children:S})};t.displayName="Button";t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outline"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline"]},size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"}}},e={args:{children:"Button",variant:"primary",size:"md"}},a={args:{children:"Secondary",variant:"secondary",size:"md"}},r={args:{children:"Outline",variant:"outline",size:"md"}},s={args:{children:"Large Button",size:"lg"}},n={args:{children:"Small Button",size:"sm"}};var o,l,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary",
    size: "md"
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "md"
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline",
    size: "md"
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,y,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,x,z;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "sm"
  }
}`,...(z=(x=n.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const V=["Default","Secondary","Outline","Large","Small"];export{e as Default,s as Large,r as Outline,a as Secondary,n as Small,V as __namedExportsOrder,N as default};
