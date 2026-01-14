
import React from 'react';
import { Hammer, Heart, Users, MapPin } from 'lucide-react';
import { FOCAL_PERSON } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Built with Passion, Crafted for Life.</h1>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            Based in Latifabad, Hyderabad-Sindh, Artisan Woodworks started as a vision to merge classic woodworking artistry with modern living needs.
          </p>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            Under the guidance of {FOCAL_PERSON}, we have built a team of dedicated craftsmen who combine heritage techniques with contemporary design aesthetics. Every piece that leaves our workshop is inspected for structural integrity and aesthetic perfection.
          </p>
          
          <div className="grid grid-cols-2 gap-8 py-8 border-t border-stone-100">
            <div>
              <h3 className="text-3xl font-bold text-orange-800">15+</h3>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-800">500+</h3>
              <p className="text-stone-500 text-sm font-medium uppercase tracking-wider">Happy Homes</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541625602330-2277a4c4b28d?auto=format&fit=crop&q=80&w=1000" 
              alt="Workshop" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 text-orange-800 p-2 rounded-lg"><Hammer size={24} /></div>
              <div>
                <p className="font-bold text-stone-900">Pure Solid Wood</p>
                <p className="text-stone-500 text-xs uppercase tracking-tight">Our Quality Promise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-stone-100 text-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Our Values</h3>
          <p className="text-stone-600">Integrity in our materials, honesty in our pricing, and absolute dedication to our customers' satisfaction.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-stone-100 text-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Our Team</h3>
          <p className="text-stone-600">Our woodworkers aren't just employees; they are artists who treat every plank of wood with respect.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-stone-100 text-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Our Origin</h3>
          <p className="text-stone-600">Rooted in Latifabad, Hyderabad, we bring the finest craftsmanship of Sindh to the forefront of Pakistani furniture.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
