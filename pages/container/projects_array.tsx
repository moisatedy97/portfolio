import { StaticImageData } from "next/image";
import {lalasiaiphone, lalasia1, lalasia2, lalasia3, lalasia4} from '../../assets'

let projects: Array<{ id: string, name: string, description: string, mainPhoto: StaticImageData, photos: Array<StaticImageData>}> = [
    {
        id: '0',
        name: 'Lalasia',
        description: 'eCommerce Website recreated with Next.js and Typescript',
        mainPhoto: lalasiaiphone,
        photos: [lalasia1, lalasia2, lalasia3, lalasia4]
    }
]; 

export default projects;