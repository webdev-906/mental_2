import { useEffect, useState } from "react";
import Translation from './TranslationEngToSpan/Data.json';


export const Articles = (props) => {

  const {language, handleLanguage} = props 
  // const [language,setLanguage]=useState("spanish")
  const [content,setContent]=useState({})

  useEffect(()=>{
      if(language==="english"){
          setContent(Translation.english)
      }else if(language==="spanish"){
          setContent(Translation.spanish)
      }

  },
  [language] 
  )
 
return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
<div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
<a href="/" aria-label="Item" className="mr-3">
<div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
<svg
className="w-12 h-12 text-deep-purple-accent-400"
stroke="currentColor"
viewBox="0 0 52 52"
>
<polygon
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
fill="none"
points="29 13 14 29 25 29 23 39 38 23 27 23"
/>
</svg>
</div>
</a>
<div>
          <select value={language} onChange={(e)=>handleLanguage(e.target.value)}>
              <option>english</option>
              <option>spanish</option>
          </select>
      </div>
<h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-ally2 sm:text-4xl">
<span className="inline-block mb-2"> 
{content.translate1}</span>
<div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
</h2>
</div>
<p className="w-full text-ally9 lg:text-sm lg:max-w-md">
{content.translate2}
</p>
</div>
<div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
<div>
<a href="https://www.cdc.gov/diabetes/spanish/index.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src="https://images.pexels.com/photos/7653093/pexels-photo-7653093.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt=""
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally3">
Diabetes
</p>
<p className="text-ally2">
{content.translate3}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/highbloodpressure.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src="https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt=""
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally3">
{content.translate4}
</p>
<p className="text-ally2">
{content.translate5}
</p>
</div>
<div>
<a href="https://www.cigna.com/es-us/knowledge-center/cholesterol">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src="https://images.pexels.com/photos/4210610/pexels-photo-4210610.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt=""
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally3">
{content.translate6}
</p>
<p className="text-ally2">
{content.translate7}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/obesity.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src="https://images.pexels.com/photos/6942034/pexels-photo-6942034.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt=""
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally3">
{content.translate8}
</p>
<p className="text-ally2">
{content.translate9}
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/hepatitisa.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src="https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
alt=""
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally3">
Hepatitis
</p>
<p className="text-ally2">
{content.translate10} 
</p>
</div>
<div>
<a href="https://medlineplus.gov/spanish/cancer.html">
<img
className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
src="https://images.pexels.com/photos/3900424/pexels-photo-3900424.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
alt=""
/>
</a>
<p className="mb-2 text-xl font-bold leading-none sm:text-2xl text-ally3">
Cancer
</p>
<p className="text-ally2">
{content.translate11}
</p>
</div>
</div>
<div className="text-center">


</div>
</div>

);
};

export default Articles;