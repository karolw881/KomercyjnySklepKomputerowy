import CategoryList from "./CategoryList";
import { useState } from "react";
import {BsLaptop} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'
import {TfiGame} from 'react-icons/tfi'
import {GiProcessor} from 'react-icons/gi'
import {AiOutlinePrinter} from 'react-icons/ai'
import {SlScreenDesktop} from 'react-icons/sl'
import {MdCable} from 'react-icons/md'
import {CiPercent} from 'react-icons/ci'

const Categories = () => {

    const [categories, setCategory] = useState([
        { title: 'Komputery i laptopy', icon: <BsLaptop/>,link: "/Komputery" ,id: 1},
        { title: 'Smartfony', icon: <FiSmartphone/>,link: "/Komputery" ,id: 2},
        { title: 'Gaming', icon: <TfiGame/>,link: "/Komputery" ,id: 3},
        { title: 'Podzespoły koputerowe', icon: <GiProcessor/>,link: "/Komputery" ,id: 4},
        { title: 'Urządzenia peryferyjne', icon: <AiOutlinePrinter/>,link: "/Komputery" ,id: 5},
        { title: 'Telewizory', icon: <SlScreenDesktop/>,link: "/Komputery" ,id: 6},
        { title: 'Akcesoria', icon: <MdCable/>,link: "/Komputery" ,id: 7},
        { title: 'Promocje', icon: <CiPercent/>,link: "/Komputery" ,id: 8},
    ]);


    return ( 
        <nav className="navbar-sub">
            <CategoryList categories={categories}/>
        </nav>

     );
}

export default Categories;