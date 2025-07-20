import Layout from "@/components/layout/Layout";
import Card from "@/components/ui/Card";

const users = [
  { id: 1, name: "Amira", description: "Software Developer from Ethiopia." },
  { id: 2, name: "Amira", description: "Frontend Lead at Portafy." },
];

const UsersPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <Card key={user.id} title={user.name} description={user.description} />
        ))}
      </div>
    </Layout>
  );
};

export default UsersPage;
