import CardSection from "@/Components/CardSection";
import DiscoverProduct from "@/Components/DiscoverProduct";
import FooterSection from "@/Components/FooterSection";
import Navbar from "@/Components/Navbar";
import navbar_data from "@/app/data"




const dataFetch=async()=>{
  const res=await fetch("https://fakestoreapi.com/products");
  const data=await res.json();
  return data;
}





const page = async() => {
  const data=await dataFetch();
  return (
    <main className="">
      <h1 className="text-5xl">jitendra</h1>
      
        
       <Navbar navbar_data={navbar_data}/>
       <DiscoverProduct/>
       <CardSection data={data}/>
       <FooterSection/>

       
        
    </main>
  );
}

export default page
