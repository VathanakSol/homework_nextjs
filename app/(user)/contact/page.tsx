import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Product Website",
  description: "Contact Page | E-Commerce Website",
};

export default function contact() {
  return (
    <div className="flex justify-center w-[100vw]">This is contact page</div>
  )
}
