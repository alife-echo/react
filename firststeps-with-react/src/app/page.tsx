import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";

export default function Page (){
   return (
      <> 
       <h1 className="font-bold text-lg bg-blue-600 text-white" >Olá Mundo</h1>
       <h3>Algum outro texto</h3>
       <GeoForm/>
       <Person/>
      </>
   )
}
