import { Box, c, Grid } from "@galiciaseguros/system_design";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import AsideMenu from "~/components/AsideMenu/AsideMenu";
import Navbar from "~/components/Navbar/Navbar";
import data from "../utils/data.json"

export const loader = async () => {
  return json({
    data
  })
}

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <Navbar></Navbar>
      <div className="row">
        <div className="col-lg-3" style={{paddingTop:"10vh" ,height:"100vh",overflow:"scroll" ,paddingLeft:24,borderStyle:"solid",borderColor:c({type:"grey-40"})}}>
          <AsideMenu />
        </div>
        <div className="col-lg-9"  style={{paddingTop:"10vh",height:"100vh",overflow:"scroll" ,paddingLeft:24}}>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
