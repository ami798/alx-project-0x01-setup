import Layout from "@/components/layout/Layout";
import Card from "@/components/ui/Card";

const posts = [
  { id: 1, title: "Introducing Portafy", description: "Turn resumes into live portfolios instantly." },
  { id: 2, title: "Next.js Tips", description: "Boost your app performance with built-in optimization." },
];

const PostsPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} description={post.description} />
        ))}
      </div>
    </Layout>
  );
};

export default PostsPage;
