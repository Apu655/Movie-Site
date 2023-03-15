import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
import Link from 'next/link';
import {useContext} from 'react'

const Header= ()=>{

    return(
        <header className='flex flex-col sm:flex-row justify-between m-5 items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <Link href='/'><HeaderItem title='Home' Icon={HomeIcon}></HeaderItem></Link>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}></HeaderItem>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}></HeaderItem>
                <a href="/products"><HeaderItem title='PRODUCTS' Icon={CollectionIcon}></HeaderItem></a>
                <HeaderItem title='SEARCH' Icon={SearchIcon}></HeaderItem>

                <a href="/dashboard"><HeaderItem title={"Apu Islam"} Icon={UserIcon}></HeaderItem></a>
            </div>
            <div className='hover:scale-110  transform origin-x transition duration-300 ease-out'>
                <Link href='/'><p className="   text-5xl font-black bg-clip-text bg-gradient-to-t from-[#810c0c] to-[#270202] text-transparent">JAMBO</p></Link>
            </div>
                {/* <Image className='object-contain' src='https://links.papareact.com/ua6' width={200} height={100}></Image> */}

        </header>
            )
}
export default Header;