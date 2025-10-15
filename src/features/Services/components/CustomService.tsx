import FAQ from "@components/ui/FAQ/FAQ";
import SpecificService from "./SpecificService/SpecificService";


export default function CustomService() {
  return (
    <div className="bg-gray-200">
      <SpecificService />
      <FAQ />
    </div>
  );
}
