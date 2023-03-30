import { useLoaderData } from '@remix-run/react';
import { mdReader } from '../../helpers/readData.server';

export async function loader() {
  const launchpadDescription = await mdReader('launchpadDescription.md');
  return { launchpadDescription };
}


export default function DashboardMain(){
    const { launchpadDescription } = useLoaderData();
    console.log(launchpadDescription)
    
    return(
        <div style={{flexDirection:"column", width:"70%"}}>
        <h1>Contenido principal del dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe hic magnam eum expedita dicta maxime nostrum eligendi cum dolorem, voluptates culpa quis, sint quam magni sit ipsam. Assumenda, velit animi!</p>
        </div>
    )
}