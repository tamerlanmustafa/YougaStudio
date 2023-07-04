import blogsData from '../../blogs.json';




const Blogs = () => {


  return (
    <>
    <div className="blogs flex flex-ai-c flex-jc-c">
      {blogsData.map(blog => (
        
        <div key={blog.id}>
          <div className="each-blog flex flex-fd-c flex-jc-c flex-ai-c">
            <img src={blog.img} alt="" />
            <h2>{blog.title}</h2>
            <p>{blog.content}..</p>
            
          </div>
        </div>
      ))} 
      </div>
    </>
  );
}

export default Blogs;



 
