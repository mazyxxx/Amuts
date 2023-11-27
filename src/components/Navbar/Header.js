'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

    // usepathname untuk validasi bar yang aktif
    const pathname = usePathname()
    return (
        <header className="pt-8">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <Image src={'/img/logo-amuts.png'} alt='...' width={290} height={290}/>
                </div>
                <div className="flex gap-4 p-10 font-semibold items-center text-center">
                    {/* jika page aktif, maka navbar akan diberi background, jika tidak bakal normal */}
                    <Link className={`link ${pathname === '/' ? 'bg-color-secondary rounded-full py-2 px-4' : ''}`} href={'/'} >Beranda</Link>
                    <Link className={`link ${pathname === '/Layanan' ? 'bg-color-secondary rounded-full py-2 px-4' : ''}`} href={'/Layanan'} >Layanan</Link>
                    <Link className={`link ${pathname === '/SetorSampah' ? 'bg-color-secondary rounded-full py-2 px-4' : ''}`} href={'/SetorSampah'} >Setor Sampah</Link>
                    <Link className={`link ${pathname === '/TentangKami' ? 'bg-color-secondary rounded-full py-2 px-4 ' : ''}`} href={'/TentangKami'} >Tentang Kami</Link>  
                </div>
            </div>
        </header>
    )
}

export default Navbar