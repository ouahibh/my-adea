import './slider.css'
import ImageGallery from 'react-image-gallery';


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
   
];
const Slider = () => {
    return (
        <>
            <div className={'container-slider'}>
                <div className={'sub-container-slider'}>
                    <ImageGallery
                        showBullets={true}
                        showIndex={true}
                        items={images}
                    />
                </div>
            </div>
        </>
    )
}
export default Slider;
