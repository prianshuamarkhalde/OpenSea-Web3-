import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAddress, useMarketplace } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import TopNavbarLayout from "../../../layouts/TopNavbarLayout";
import NFTImage from '../../../components/NFTDetails/NFTImage'
import Listings from "../../../components/Home/listings";

const style = {
  wrapper: "flex items-center justify-center",
};

const marketplace = useMarketplace('0x57c8804FcE7b5cE7b5C89F919Ed1C3F8B9Eff05A72946') 
const Address = useAddress();

useEffect(() => {
  getListings()
})

useEffect(() => {
  if(!address) router.replace('/')
},[address])

const getListings = async () => {
  try {
    setLoading(true); 
    const listings = await marketplace.getListing(BigNumber.from(tokenID));
    console.log("running")
    setListings(listing)
    setLoading(false)
  } catch (error) {
    console.log(error);
  } 
};

console.log(listing)

const NFT = () => {
  const router = useRouter();
  const [listing, setListing] = useState()
  const {tokenID} = router.query
  console.log(tokenID)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
  }, []);

  return (
    <TopNavbarLayout>
      <div className={style.wrapper}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className = {"style.nftContainer"}> 
          <div className = {"style.leftContainer"}>
          <div className = {"style.leftElement"}>
          < NFTImage image = {listing ?.asset?.image}/>
          </div>
          <div className = {"style.leftElement"}>
          {/* NFT Details*/}
          </div>
          </div>
          <div className = {"style.rightContainer"}>
          {/* NFT Basic Info*/}

          <div className = {buyoutContainer}>
            {/*<NFT SalesInfo> */}


          </div>
          </div>
          </div>
        )}
      </div>
    </TopNavbarLayout>
  );
};
export default NFT;