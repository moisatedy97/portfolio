import { StaticImageData } from "next/image";
import {lalasiaiphone, lalasia1, lalasia2, lalasia3, lalasia4} from '.'

let projects: Array<{ id: string, name: string, description: string, github: string, mainPhoto: StaticImageData, photos: Array<String>}> = [
    {
        id: '0' || '',
        name: 'Lalasia',
        github: 'https://github.com/moisatedy97/lalasia' || '',
        description: 'eCommerce Website recreated with Next.js and Typescript' || '',
        mainPhoto: lalasiaiphone || '',
        photos: [lalasia1.src, lalasia2.src, lalasia3.src, lalasia4.src] || []
    }
] || []; 

export default projects!;