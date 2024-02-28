import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useMarketplace } from '@thirdweb-dev/react';
import NFTCard from './NFTCard'
import { Sepolia } from "@thirdweb-dev/chains";
//import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// // If used on the FRONTEND pass your 'clientId'
// const sdk = new ThirdwebSDK(Sepolia, {
//   clientId: "0xC028d304d72263B8067d96A9A1aac40CF8063f78",
// });

const style = {
  wrapper: 'mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
}
const Listings = () => {
  const [listings,setListings] = useState([]) 
  const marketplace = useMarketplace("0x57c8804FcE7b5cE7b5C89F919Ed1C3F8B9Eff05A72946");
  console.log(listings)
  useEffect(() => {
    getListings()
  }, [])

  const getListings = async () => {
    try {
      const list = await marketplace.getActiveListings()
      setListings(list)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(listings)
  return (
    <div className = {style.wrapper}>
      {listings.length > 0 ? (
        <>
        {listings?.map((listing, index) => (
          <><Link
            key = {index}
            href={'/assets/${listing.assetContractAddress}/${listings.id}'}
          
          >
            <a>
            <NFTCard listing={listing} />
              </a>
             </Link></>
))}

        </>
      ) : (
        <div>prianshu</div>
      )}
    </div>
  )
}

export default Listings;
