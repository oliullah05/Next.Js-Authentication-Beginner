import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async() => {
  const session =await getServerSession(authOptions)
  console.log();
  return (
    <div>
      {session?.user &&
        <>
      <h1 className="text-4xl text-center mt-10">Welcome {session?.user?.name}</h1>
      <p className="text-4xl text-center mt-10">Logged in user-email : {session?.user?.email}</p>
      {session?.user?.image && <Image className="mx-auto my-10 rounded-badge" width={500} height={500} src={session?.user?.image} alt="User Image"></Image>}
      </>
      }
    </div>
  );
};

export default DashboardPage;
