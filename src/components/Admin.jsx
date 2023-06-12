import AdminTable from "./AdminTable";

const Admin = () => {
  return (
    <main className="h-screen w-full p-32 flex flex-col">
      <div>
        <h1 className="text-3xl text-merrygreen-600 font-bold text-center mb-9">
          List of Users
        </h1>
      </div>
      <AdminTable />
    </main>
  );
};

export default Admin;
