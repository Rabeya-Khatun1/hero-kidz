import Image from "next/image";
import Banner from "./pages/Banner";
import Products from "./product/page";



export default function Home() {
  return (
<div className="space-y-20">
<section><Banner></Banner></section>
<section><Products></Products></section>
</div>

  );
}
