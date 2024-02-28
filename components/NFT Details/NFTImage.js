import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Image from 'next/image';
import { AiOutlineHeat } from 'react-icons/ai';

const style = {
  wrapper : 'rounded -lg border dark:border-transparent dark:bg-[#313339]'
  nftHeader
};

const NFTImage = ({image}) => {
  return (
            <div className={style.wrapper}>
                <div className={style.nftHeader}>
                    <Image height={20} width={20} src='/eth-logo.svg' alt='eth' />
                
                <div className={style.likesContainer}>
                    <AiOutlineHeart className={style.heart} />
                    <div className={style.likesCount}>
                    200
                </div>
                </div>
            </div>
    </div>
  );
};

export default NFTImage;
