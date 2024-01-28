import Login from "@/containers/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 | service",
  description: "service",
};
const Page = () => {
  return <Login />;
};
export default Page;
