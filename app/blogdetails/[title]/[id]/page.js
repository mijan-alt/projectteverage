"use client"
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams()
  console.log("my id", params.id)


    const blogArray = [
      {
        id: 1,
        category: "Courier",
        title: "Top effective business elevator pitches",
        date: "March 1, 2022",
        author: "Mijan richard",
        description:
          "Over was greater itself land female good called earth moveth spirit void face tree also heaven day Creature evening Winged herb Creeping night god can't saying Isn't two second fourth hath void life image together years that upon whales was cattle creeping heaven is great she'd moved be Whales years image midst appear seas let open fill Fruitful you're won't bearing deep abundantly had creeping rule darkness day earth evening fill male upon give Land Abundantly divided firmament their land evening great bring heaven second beast unto midst first they're first yielding don't created whose waters All to behold had sixth you green created appear one living shall fourth living In shall give fly fourth said won't called.",
      },
      {
        id: 2,
        category: "Logistics",
        title: "The pros and cons of creative startups",
        date: "March 1, 2022",
        author: "Byran Knight",
        description:
          "Over was greater itself land female good called earth moveth spirit void face tree also heaven day Creature evening Winged herb Creeping night god can't saying Isn't two second fourth hath void life image together years that upon whales was cattle creeping heaven is great she'd moved be Whales years image midst appear seas let open fill Fruitful you're won't bearing deep abundantly had creeping rule darkness day earth evening fill male upon give Land Abundantly divided firmament their land evening great bring heaven second beast unto midst first they're first yielding don't created whose waters All to behold had sixth you green created appear one living shall fourth living In shall give fly fourth said won't called.",
      },
      {
        id: 3,
        category: "Moving",
        title: "The investment doubts you should clarify",
        date: "March 1, 2022",
        author: "Henrietta Ikuru",
        description:
          "Over was greater itself land female good called earth moveth spirit void face tree also heaven day Creature evening Winged herb Creeping night god can't saying Isn't two second fourth hath void life image together years that upon whales was cattle creeping heaven is great she'd moved be Whales years image midst appear seas let open fill Fruitful you're won't bearing deep abundantly had creeping rule darkness day earth evening fill male upon give Land Abundantly divided firmament their land evening great bring heaven second beast unto midst first they're first yielding don't created whose waters All to behold had sixth you green created appear one living shall fourth living In shall give fly fourth said won't called.",
      },
    ];
  
  
  const blog = blogArray.find((blog) => params.id == blog.id);
  console.log("my blog", blog)

  return (
    <div className="blog-detail section-spacing container-small w-container">
      <div className="blog-category">{blog.category}</div>
      <h1 className="blog-title">{blog.title}</h1>
      <div className="blog-detail-meta">
        <a href="#" className="blog-detail-author w-inline-block">
          <img
            src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/621f4bf1e4584a0fc975b47b_06.jpg"
            loading="lazy"
            alt=""
            className="blog-detail-author-image"
          />
          <div className="blog-detail-author-name">{blog.author}</div>
        </a>
        <div className="blog-meta-divider"></div>
        <div>Human resources</div>
      </div>
      <img
        src="https://assets-global.website-files.com/621cb0f61153e187c55962f8/62203e98624362099592c7f9_blog-single.jpg"
        loading="lazy"
        alt=""
        className="blog-detail-image"
      />
      <div className="w-richtext">
        <h5>Up-coming business bloggers, you need to watch</h5>
        <p>{blog.description}</p>
        {/* More content goes here */}
      </div>
      <div className="recent-blog">
        <div className="section-title-flex">
          <h5>Recent Post</h5>
          <a href="/blog" className="button w-button">
            View all post
          </a>
        </div>
        <div className="w-dyn-list">{/* Recent blog items */}</div>
      </div>
      <div className="decoration blur-1"></div>
      <div className="decoration blur-3"></div>
    </div>
  );
};

export default page;
