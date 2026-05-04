import blogData from "@/data/blog.json";
import StandardPost from "@/components/post-layout/StandardPost";
import StatusSlider from "@/components/post-layout/StatusSlider";
import CornerPost from "@/components/post-layout/CornerPost";
import SidePost from "@/components/post-layout/SidePost";
import TutorialPost from "@/components/post-layout/TutorialPost";
import PostSlider from "@/components/post-layout/PostSlider";
import PostQuote from "@/components/post-layout/PostQuote";
import PostGallery from "@/components/post-layout/PostGallery";
import HeaderImage from "@/components/post-layout/HeaderImage";
import PostImage from "@/components/post-layout/PostImage";
import LinkPost from "@/components/post-layout/LinkPost";
import VideoPost from "@/components/post-layout/VideoPost";
import AudioPost from "@/components/post-layout/AudioPost";

export default async function Page({   params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  switch (blog.layout) {
    case "standard":
      return <StandardPost blog={blog} />;
    case "status":
      return <StatusSlider blog={blog} />;
    case "corner":
      return <CornerPost blog={blog} />;
    case "side":
      return <SidePost blog={blog} />;
    case "tutorial":
      return <TutorialPost blog={blog} />;
    case "slider":
      return <PostSlider blog={blog} />;
    case "quote":
      return <PostQuote blog={blog} />;
    case "gallery":
      return <PostGallery blog={blog} />;
    case "header":
      return <HeaderImage blog={blog} />;
    case "image":
      return <PostImage blog={blog} />;
    case "link":
      return <LinkPost blog={blog} />;
    case "video":
      return <VideoPost blog={blog} />;
    case "audio":
      return <AudioPost blog={blog} />;
    default:
      return <div>Layout not found</div>;
  }
}