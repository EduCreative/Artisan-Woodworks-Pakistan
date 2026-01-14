
import React, { useState, useRef } from 'react';
import { Hammer, Upload, MessageCircle, Send, CheckCircle, Image as ImageIcon, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const CustomOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    type: '',
    size: '',
    color: '',
    material: '',
    budget: '',
    notes: ''
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Prepare WhatsApp message
    const msg = `*New Custom Furniture Inquiry*
----------------------------
*Type:* ${formData.type}
*Size:* ${formData.size}
*Material:* ${formData.material}
*Color/Polish:* ${formData.color}
*Budget Range:* ${formData.budget}
*Notes:* ${formData.notes}
${selectedImage ? '\n*Reference Image attached in this web form.*' : ''}
----------------------------
I have some reference images I'd like to share next on WhatsApp.`;

    const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(msg)}`;

    // Simulate database save (e.g. Firestore would happen here)
    // Example: await addDoc(collection(db, "inquiries"), { ...formData, timestamp: serverTimestamp() });
    
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // We open WhatsApp automatically to continue the conversation
      window.open(waLink, '_blank');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <CheckCircle size={48} />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
        <p className="text-stone-600 mb-8">
          Thank you for reaching out. We've opened WhatsApp so you can share your reference images and chat with our craftsman directly. 
          <br /><br />
          <span className="font-semibold text-stone-800">Note:</span> If WhatsApp didn't open, please click the floating green button at the bottom right.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ type: '', size: '', color: '', material: '', budget: '', notes: '' });
            removeImage();
          }}
          className="bg-stone-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-stone-800 transition shadow-lg"
        >
          Start New Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h1 className="text-4xl font-bold text-stone-900 mb-6 tracking-tight">Custom Design</h1>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Tell us about your dream furniture. We can replicate designs from Pinterest, Instagram, or your own sketches.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <div className="bg-orange-100 text-orange-800 p-2 rounded-lg mt-1"><Hammer size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800">Expert Craftsmanship</h4>
                <p className="text-sm text-stone-500">Master woodworkers with decades of experience in solid wood furniture.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <div className="bg-orange-100 text-orange-800 p-2 rounded-lg mt-1"><Upload size={20} /></div>
              <div>
                <h4 className="font-bold text-stone-800">Reference Images</h4>
                <p className="text-sm text-stone-500">Upload a photo below and share more via WhatsApp to get an accurate quote.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl shadow-stone-200 border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Furniture Type</label>
                  <select 
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-orange-800/20 focus:bg-white outline-none transition-all"
                  >
                    <option value="">Select Type...</option>
                    <option value="Sofa/Seating">Sofa / Seating</option>
                    <option value="Bed/Bedroom">Bed / Bedroom</option>
                    <option value="Dining/Table">Dining / Table</option>
                    <option value="Cabinet/Storage">Cabinet / Storage</option>
                    <option value="Office/Desk">Office / Desk</option>
                    <option value="Other">Other (Special Project)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Dimensions (Approx)</label>
                  <input 
                    type="text" 
                    name="size"
                    placeholder="e.g. 6x3 feet"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-orange-800/20 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Material Preference</label>
                  <input 
                    type="text" 
                    name="material"
                    placeholder="e.g. Sheesham, Walnut, Metal"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-orange-800/20 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Budget Range (PKR)</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-orange-800/20 focus:bg-white outline-none transition-all"
                  >
                    <option value="">Select Range...</option>
                    <option value="Under 50k">Under 50,000</option>
                    <option value="50k - 150k">50,000 - 150,000</option>
                    <option value="150k - 300k">150,000 - 300,000</option>
                    <option value="Above 300k">Above 300,000</option>
                  </select>
                </div>
              </div>

              {/* Visually Distinct File Input */}
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Reference Image</label>
                <div 
                  className={`relative border-2 border-dashed rounded-2xl p-4 transition-all ${
                    imagePreview ? 'border-orange-800 bg-orange-50/30' : 'border-stone-200 bg-stone-50 hover:border-orange-300'
                  }`}
                >
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                    id="reference-upload"
                  />
                  
                  {!imagePreview ? (
                    <label 
                      htmlFor="reference-upload" 
                      className="flex flex-col items-center justify-center py-6 cursor-pointer"
                    >
                      <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-stone-400">
                        <ImageIcon size={32} />
                      </div>
                      <p className="text-stone-700 font-medium">Click to upload design photo</p>
                      <p className="text-xs text-stone-400 mt-1">PNG, JPG or HEIC (Max 10MB)</p>
                    </label>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-stone-200 shadow-sm">
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        <button 
                          type="button"
                          onClick={removeImage}
                          className="absolute top-1 right-1 bg-white/90 p-1 rounded-full text-stone-900 hover:bg-white shadow-sm"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-stone-800 truncate max-w-[200px]">{selectedImage?.name}</p>
                        <p className="text-xs text-stone-500">{(selectedImage!.size / 1024 / 1024).toFixed(2)} MB</p>
                        <button 
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-xs font-bold text-orange-800 hover:underline mt-1"
                        >
                          Change Image
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Color / Finish</label>
                <input 
                  type="text" 
                  name="color"
                  placeholder="e.g. Dark Walnut Polish, Matte Grey Paint"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-orange-800/20 focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Additional Notes</label>
                <textarea 
                  name="notes"
                  rows={4}
                  placeholder="Tell us any specific details or requirements like drawer counts, glass types, etc..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:ring-2 focus:ring-orange-800/20 focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="bg-orange-50 p-4 rounded-xl flex items-center space-x-3 text-orange-800 text-sm border border-orange-100">
                <MessageCircle size={20} className="flex-shrink-0" />
                <p>Submit to save your details. We'll open WhatsApp for you to send more photos directly.</p>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg ${
                  loading ? 'bg-stone-300' : 'bg-orange-800 text-white hover:bg-orange-900 active:scale-[0.98]'
                }`}
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing Inquiry...</span>
                  </span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Custom Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;
