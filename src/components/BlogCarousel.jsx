
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogEntry from './BlogEntry';
import { getAllPosts } from '../utils/BlogManager';
import { resolveImage } from '../utils/ImageManager';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate();
/// Add blogs here
  const selection = ["no-code", "blog-ynh-lxc", "recovery"]
  
  
  
  
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



  useEffect(() => {
    getAllPosts().then(resp => {
      setBlogs(resp.filter(blog => selection.some(entr => blog.slug == entr)))
    })
  }, [])



  return (
    <Carousel className='z-20 m-8 mt-0' responsive={responsive}>
      {blogs.map(blog => {
        return <BlogEntry text={blog.frontmatter.title} key={blogs.indexOf(blog)} func={() => navigate(`/BlogView/${blog.slug}`)} image={resolveImage(blog.frontmatter.image)} />
      })}
    </Carousel>
  );
};

export default BlogCarousel;
