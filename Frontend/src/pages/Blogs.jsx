import { ArrowUpRight } from "lucide-react";

const Blogs = () => {
  // Single blog template data
  const blogData = {
    date: "12th Aug 2024",
    readTime: "12 min read",
    title: "5 AI Tools That Are Changing the Digital Marketing Game in 2025",
    subtitle: "The Ultimate Guide to Transforming Your Space",
  };

  // Create 6 placeholders dynamically
  const blogs = Array(6).fill(blogData);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2
          className="text-4xl mb-4"
          style={{ fontFamily: "Calisga, sans-serif" }}
        >
          Blogs
        </h2>
        <p
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
        >
          Lorem ipsum dolor sit amet consectetur. Lorem praesent ultricies
          viverra sit maecenas commodo. Pretium amet ligula neque est sit.
          Ultrices amet viverra rutrum id volutpat mattis ac. Sapien lacus enim
          tortor arcu augue nunc. Nulla eu ultrices id tortor.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg transition flex flex-col overflow-hidden"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
          >
            {/* Taller gray placeholder */}
            <div
              className="rounded-lg h-80 "
              style={{ backgroundColor: "#D9D9D9" }}
            ></div>

            {/* Content */}
            <div className="p-4">
              {/* Row 1: Date & Read time */}
              <div className="flex justify-between text-sm mb-4">
                <span style={{ color : '#7C7B7B'}}>{blog.date}</span>
                <span style={{ color : '#B7B7B7'}}>{blog.readTime}</span>
              </div>

              {/* Row 2: Title + Subtitle on left, Button on right */}
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                  <p
                    className="text-sm max-w-[300px]"
                    style={{ color: "#434343" }}>
                    {blog.subtitle}
                  </p>
                </div>

                <button
                  className="w-10 h-10 flex items-center justify-center text-black rounded-full transition shrink-0"
                  style={{ backgroundColor: "#A0CB3A" }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
