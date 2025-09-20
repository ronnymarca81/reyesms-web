import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { defaultContactInfo } from "../../../components/layout/navbar/types.js";
const GetInTouch: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg ">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
              <p className="text-gray-600">{defaultContactInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
              <p className="text-gray-600">{defaultContactInfo.email}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
              <p className="text-gray-600">{defaultContactInfo.address}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Business Hours
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday — Friday 9am – 5pm</p>
                <p>Saturday — 10am – 3pm</p>
                <p>Sunday — Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
