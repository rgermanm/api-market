import { Box, Grid } from "@galiciaseguros/system_design";
import { Link } from "@remix-run/react";
import logo from "./../../../public/assets/logo.svg"

export default function Navbar() {
    return (
        <Grid style={{position:"absolute",backgroundColor:"white",boxShadow: "0px 2px 4px 1px rgba(231, 231, 231, 0.5)" }}>
            <Box  columns={12}>
                <Grid>
                    <Box style={{minHeight:"8vh",display:"flex",alignItems:"center"}} columns={2}>
                        <img src={logo} height={35} style={{marginLeft:10}}/>

                    </Box>
                    <Box columns={9}>
                            
                    </Box>

                </Grid>
            </Box>

        </Grid>
    )
}