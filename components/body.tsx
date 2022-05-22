import Image from 'next/image';
import { shimmerUrl } from './blur-image';


export default function body() {
    return (
        <div className="flex flex-row space-x-15 ...">
            <div className="flex items-center basis-1/2 text-center">
                <p>
                    <span className='text-center text-5xl font-extrabold' style={{ fontFamily: 'cursive' }}>Join the World NFT community mobilized around protecting our <span>Cats.</span></span><br /><br />
                    <span className='text-center text-2xl font-normal'>Our 2022 Generative NFT project donates 20% of sales and 3% of secondary market sales to independent Cat Rescue Charities.</span>
                </p>
            </div>
            <div className='basis-1/2 flex items-center justify-end'>
                <Image src="/assets/mainlogo.png" width={900} height={800} alt="nekos" placeholder="blur" blurDataURL={shimmerUrl} />
            </div>
        </div>
    )
}
