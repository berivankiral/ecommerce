import BlogItem from "./BlogItem";
import "./Blogs.css";


const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>BLOGLARIMIZ
          </h2>
          <p>Dumanı üstünde nargile yazılarımızı kaçırmayın.gn</p>
        </div>
        <ul className="blog-list">
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
