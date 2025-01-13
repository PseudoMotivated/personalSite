
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogEntry from './BlogEntry';

const BlogCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel className='z-20 m-8 mt-0'  responsive={responsive}>
      <BlogEntry text="Doggo :)" func={() => {window.location.href = "https://stackoverflow.com"}}/>
      <BlogEntry  text="jdjdjdj" image="https://placehold.co/600x400?font=roboto" />
      <BlogEntry/>
      <BlogEntry/>
      <BlogEntry/>
      <BlogEntry/>
      <BlogEntry/>
      <BlogEntry/>
    </Carousel>
  );
};

export default BlogCarousel;
