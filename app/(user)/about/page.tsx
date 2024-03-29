import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Home | Product Website",
    description: "About Page | E-Commerce Website",
};

export default function page() {
  return (
    <div className="flex justify-center w-[100vw]">This is about page</div>
  )
}
