import { Breadcrumb, Text, c, Chip } from "@galiciaseguros/system_design";
import { Link } from "@remix-run/react";
import data from "./apis.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation, useSearchParams } from "@remix-run/react"

export default function AsideMenu() {

    const [expanded, setExpanded] = useState({
        section:-1,
        api:-1
    });

    const methodMap = (e="info") => {
        
        switch (e) {
            case "GET": return "Info";
            case "POST": return "Warning";
            case "DELETE": return "Danger";
            default: return "Brand"
        }
    }

    return (
        <div >
            {<Breadcrumb list={[{ label: "API Market", href: "/" }, { label: "Negocio", href: "/" }]}></Breadcrumb>
            }


            <nav style={{ paddingTop: (20), paddingLeft: (10) }}>
                {data.map((o,j) => (<div style={{marginBottom:20}}>

                    <Text color={c({ type: "black" })} type={"S4"} bold style={{ marginTop: (20) }}>{o.section}</Text>
                    {o.apis.map((a, i) => (
                        <div style={{ paddingLeft: 5, marginTop: 10 }}>
                            <div className="row" style={{ display: "flex", alignItems: "center" }}>
                                <div onClick={() => setExpanded(expanded.api == i&&expanded.section==j ? {section:-1,api:-1} : {section:j,api:i})} className="col-lg-9" style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                                    <FontAwesomeIcon icon={expanded.api == i&&expanded.section==j? faChevronDown : faChevronRight} style={{ fontSize: 12, marginRight: 5 }} />
                                    <Text color={c({ type: "primary" })} type={"S4"} >{a.name}</Text>
                                </div>
                                <div className="col-lg-2">
                                    <Chip variant="light" state={methodMap(a.method)} label={a.method}></Chip>
                                </div>
                            </div>
                            {expanded.api == i&&expanded.section==j && <ul style={{ listStyle: "none", marginBottom: 10 }}>


                                <div style={{ paddingLeft: 10 }}>
                                    <Link className={"accLink"} prefetch="intent" to={"general/api-information?id=" + i}>
                                        <Text type="S5">Introducción</Text>
                                    </Link>
                                    <Link className={"accLink"} prefetch="intent" to={"general/description?id=" + i + "&section=auth"}>
                                        <Text type="S5">Autenticación</Text>
                                    </Link>
                                    <Link className={"accLink"} prefetch="intent" to={"general/description?id=" + i + "&section=headers"}>
                                        <Text type="S5">Headers</Text>
                                    </Link>
                                    <Link className={"accLink"} prefetch="intent" to={"general/description?id=" + i + "&section=request"}>
                                        <Text type="S5">Request</Text>
                                    </Link>
                                    <Link className={"accLink"} prefetch="intent" to={"general/description?id=" + i + "&section=response"}>
                                        <Text type="S5">Response</Text>
                                    </Link>
                                    <Link className={"accLink"} prefetch="intent" to={"general/description?id=" + i + "&section=errors"}>
                                        <Text type="S5">Errors</Text>
                                    </Link>
                                </div>

                            </ul>}
                        </div>
                    ))}

                </div>))}
            </nav>
        </div>
    )
}