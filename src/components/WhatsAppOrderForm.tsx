import React, { useState, useRef, DragEvent } from 'react';
import { Send, Phone, Upload, CheckCircle2, AlertCircle, X, Clock, MapPin, User, FileText } from 'lucide-react';
import { WhatsAppOrderInput } from '../types';

export default function WhatsAppOrderForm() {
  const [formData, setFormData] = useState<WhatsAppOrderInput>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: '',
    hasPrescription: false,
    prescriptionFile: null,
    message: '',
    preferredDeliveryTime: 'Anytime (09:00 AM - 09:00 PM)'
  });

  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof WhatsAppOrderInput, string>>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof WhatsAppOrderInput, string>> = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer Name is required';
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.address.trim()) newErrors.address = 'Delivery Address is required';
    if (!formData.medicineName.trim() && !formData.prescriptionFile) {
      newErrors.medicineName = 'Please enter medicine names or upload a prescription';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData(prev => ({
        ...prev,
        prescriptionFile: file,
        hasPrescription: true
      }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        prescriptionFile: file,
        hasPrescription: true
      }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({
      ...prev,
      prescriptionFile: null,
      hasPrescription: false
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build the formatted WhatsApp Message text
    const phoneNum = '8797611171'; // Munna Medical Hall
    
    let text = `Hello *Munna Medical Hall*,\n\n`;
    text += `I would like to place an order/inquiry for medicines. Here are my details:\n\n`;
    text += `👤 *Customer Name:* ${formData.customerName.trim()}\n`;
    text += `📱 *Phone Number:* ${formData.mobileNumber.trim()}\n`;
    if (formData.email.trim()) {
      text += `📧 *Email:* ${formData.email.trim()}\n`;
    }
    text += `🏠 *Delivery Address:* ${formData.address.trim()}\n`;
    text += `🕒 *Preferred Delivery Time:* ${formData.preferredDeliveryTime}\n\n`;
    
    text += `💊 *Medicines Required:*\n`;
    text += formData.medicineName.trim() ? `${formData.medicineName.trim()}\n\n` : `_Details are attached in my prescription._\n\n`;
    
    text += `📄 *Prescription Attached:* ${formData.hasPrescription ? '✅ Yes' : '❌ No'}\n`;
    if (formData.prescriptionFile) {
      text += `📂 *File Name:* ${formData.prescriptionFile.name}\n`;
    }
    
    if (formData.message.trim()) {
      text += `\n📝 *Additional Notes/Instructions:* ${formData.message.trim()}\n`;
    }
    
    text += `\nThank you!`;

    // Encode text for URL
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/91${phoneNum}?text=${encodedText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="whatsapp-order-container" className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 rounded-2xl">
          <Send className="w-6 h-6 text-brand-green animate-pulse-slow" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white">WhatsApp Order Form</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Instantly prefill and send your order via WhatsApp</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name and Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center">
              <User className="w-4 h-4 mr-1.5 text-slate-400" /> Customer Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Rajesh Kumar"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.customerName ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
              } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
            />
            {errors.customerName && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.customerName}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center">
              <Phone className="w-4 h-4 mr-1.5 text-slate-400" /> Mobile Number *
            </label>
            <input
              type="tel"
              placeholder="e.g. 8797611171"
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border ${
                errors.mobileNumber ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
              } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
            />
            {errors.mobileNumber && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.mobileNumber}</p>}
          </div>
        </div>

        {/* Row 2: Email & Preferred Delivery Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. rajesh@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-slate-400" /> Preferred Delivery Time
            </label>
            <select
              value={formData.preferredDeliveryTime}
              onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all cursor-pointer"
            >
              <option>Anytime (09:00 AM - 09:00 PM)</option>
              <option>Morning (09:00 AM - 01:00 PM)</option>
              <option>Afternoon (01:00 PM - 05:00 PM)</option>
              <option>Evening (05:00 PM - 09:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Row 3: Medicine Required */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center">
            <FileText className="w-4 h-4 mr-1.5 text-slate-400" /> Medicine Needed *
          </label>
          <textarea
            rows={3}
            placeholder="Type your medicines list here (e.g., Dolo 650mg - 1 strip, Becadexamin - 1 bottle)"
            value={formData.medicineName}
            onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border ${
              errors.medicineName ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
            } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
          />
          {errors.medicineName && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.medicineName}</p>}
        </div>

        {/* Row 4: Drag & Drop File Upload */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Upload Prescription (JPEG, PNG, PDF)
          </label>
          
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
              isDragging 
                ? 'border-brand-green bg-emerald-50/50 dark:bg-emerald-950/20' 
                : 'border-slate-200 dark:border-slate-800 hover:border-brand-green hover:bg-slate-50 dark:hover:bg-slate-950/30'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="image/*,.pdf"
              className="hidden"
            />
            
            {formData.prescriptionFile ? (
              <div className="flex items-center justify-between bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 p-3 rounded-xl max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center space-x-2.5 text-left">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                  <div className="overflow-hidden">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                      {formData.prescriptionFile.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {(formData.prescriptionFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-full transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-500 dark:text-slate-400">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="text-brand-green font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Upload a clear photo of your doctor’s prescription</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Row 5: Delivery Address */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center">
            <MapPin className="w-4 h-4 mr-1.5 text-slate-400" /> Delivery Address *
          </label>
          <input
            type="text"
            placeholder="e.g. Maroof Ganj, near Bata More, Gaya, Bihar"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border ${
              errors.address ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
            } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
          />
          {errors.address && <p className="text-xs text-red-500 mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.address}</p>}
        </div>

        {/* Row 6: Additional Message */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Special Instructions / Message (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Any specific directions, allergy alerts, or generic substitute preference..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            type="submit"
            className="flex-1 bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-100 dark:shadow-none hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4 mr-2" /> Send Order via WhatsApp
          </button>
          
          <a
            href="tel:08797611171"
            className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400" /> Call Store Now
          </a>
        </div>
      </form>
    </div>
  );
}
