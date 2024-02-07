import { notFound } from "next/navigation";

const BlogDetail = ({ params }) => {
  const id = params?.id;

  if (id === "4") {
    notFound;
  }
  return <div>BlogDetail id: {id}</div>;
};
export default BlogDetail;
