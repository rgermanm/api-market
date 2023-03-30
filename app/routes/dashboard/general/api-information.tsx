import { useLocation, useSearchParams } from "@remix-run/react"
import { useEffect } from "react";
import data from "./../../../components/AsideMenu/apis.json";
import { marked } from "marked";

export default function ApiInformation(){
    const  [searchParams, setSearchParams] = useSearchParams();
    
    const html = marked(data[0].apis[searchParams.get("id")].mark);

    
    return(
        <div style={{flexDirection:"column"}}>
        <h2>Api Information </h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        </div>
    )
}