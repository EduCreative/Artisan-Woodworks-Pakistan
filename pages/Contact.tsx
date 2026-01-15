
import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, User } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_LINK, FOCAL_PERSON } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-stone-500 max-w-2xl mx-auto">
          Visit our workshop or contact us online. {FOCAL_PERSON} and our team are here to answer any questions about our furniture or your custom projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex items-start space-x-6">
            <div className="bg-orange-100 text-orange-800 p-4 rounded-xl"><User size={28} /></div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Focal Person</h3>
              <p className="text-stone-700 font-semibold mb-1">{FOCAL_PERSON}</p>
              <p className="text-stone-500 text-sm">Managing Director & Craft Consultant</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex items-start space-x-6">
            <div className="bg-orange-100 text-orange-800 p-4 rounded-xl"><Phone size={28} /></div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Phone & WhatsApp</h3>
              <p className="text-stone-600 mb-4">Available 9:00 AM to 9:00 PM (PKT)</p>
              <div className="flex flex-col space-y-2">
                <a href={`tel:${WHATSAPP_NUMBER}`} className="text-stone-900 font-semibold hover:text-orange-800 transition">Call: {WHATSAPP_NUMBER}</a>
                <a href={WHATSAPP_LINK} className="text-green-600 font-semibold hover:underline flex items-center">
                  <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex items-start space-x-6">
            <div className="bg-orange-100 text-orange-800 p-4 rounded-xl"><MapPin size={28} /></div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Our Workshop</h3>
              <p className="text-stone-600">Latifabad,<br />Hyderabad-Sindh, Pakistan</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm flex items-start space-x-6">
            <div className="bg-orange-100 text-orange-800 p-4 rounded-xl"><Clock size={28} /></div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Business Hours</h3>
              <ul className="text-stone-600 space-y-1">
                <li className="flex justify-between w-64"><span>Sat - Thu:</span> <span className="font-medium">10:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between w-64"><span>Friday:</span> <span className="font-medium">Closed</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[500px] rounded-2xl overflow-hidden bg-stone-200 relative grayscale hover:grayscale-0 transition-all duration-700">
          {/* Hyderabad Google Map Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100">
            <MapPin size={48} className="text-orange-800 mb-4 animate-bounce" />
            <p className="text-stone-500 font-bold">Interactive Map Loading...</p>
            <p className="text-stone-400 text-sm">Latifabad, Hyderabad</p>
            <div className="mt-8 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => <div key={i} className="w-12 h-12 bg-stone-300 rounded"></div>)}
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115291.804!2d68.318239!3d25.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d4447345%3A0x41013d82e39211ad!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Business Location"
            className="opacity-0 hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
