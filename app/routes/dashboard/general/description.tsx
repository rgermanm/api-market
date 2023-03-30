import { Box, Button, c, Grid, Table, Tabs, Text } from "@galiciaseguros/system_design";
import { useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import data from "./../../../components/AsideMenu/apis.json";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Description() {


    const sectionMap = {
        "auth": "Authorization",
        "headers": "Headers",
        "errors": "Errors",
        "response": "Response",
        "request": "Request",
    }
    const [searchParams, setSearchParams] = useSearchParams();
    const [section, setSection] = useState("headers")
    const [copied, setCopied] = useState(-1)

    useEffect(() => {
        if (searchParams.get("section") != null) {
            setSection(searchParams.get("section"))
        }
    }, [searchParams.get("section")])

    useEffect(() => {
        console.log("EXEC!")
        if (copied != -1) {
            setTimeout(() =>
                setCopied(-1)
                , 1000)
        }
    }, [copied])
    return (
        <>

            <Box columns={10}>
                <div style={{ marginBottom: 20 }}>
                    <Text type={"S1"}>
                        {sectionMap[section]}
                    </Text>
                </div>
                {data[0].apis[0][section].map((i: any) =>

                    <>
                        <div style={{ marginBottom: 10 }}>
                            <Text type={"S4"}>
                                {i.subtitle}
                            </Text>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <Text type={"S5"}>
                                {i.info}
                            </Text>
                        </div>
                        {i.table && <Table data={i.table} />}
                        {i.json &&
                            <Grid style={{ marginTop: 20, marginBottom: 20 }}>
                                <Box columns={12} style={{ padding: 30, backgroundColor: c({ type: "grey-80" }) }}>
                                    <pre style={{ color: "lightgray" }}>{JSON.stringify(i.json, null, 2)}</pre>
                                    <Grid style={{display:"flex",alignItems:"center"}}>
                                        <Box columns={3}>
                                            <Button
                                                rightIcon={copied != i ? faCopy : faCheck}
                                                onClick={() => {
                                                    navigator.clipboard.writeText(JSON.stringify(i.json, null, 2)).then(() => {
                                                        setCopied(i)
                                                    })
                                                }}

                                                label={copied != i ? "Copy to clipboard" : "Copied"} disabled={copied == i} variant={copied != i ? "primary" : "tertiary"} ></Button>
                                        </Box>
                                        <Box columns={5}>

                                        <a
                                            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                                                JSON.stringify(i.json)
                                            )}`}
                                            download="filename.json"
                                        >
                                      {`Download Json`}
                                        </a>
                                        </Box>
                                    </Grid>
                                </Box>


                            </Grid>
                        }
                    </>

                )}





            </Box>
        </>

    )
}