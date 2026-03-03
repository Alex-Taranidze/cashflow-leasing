import React, { createContext, useContext, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface LeadModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export const LeadModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <LeadModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-corporate-900/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
              <h3 className="text-2xl font-bold text-corporate-900 font-display">Оставить заявку</h3>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-corporate-400 hover:text-corporate-900"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 md:p-10 overflow-y-auto">
              <LeadForm onSuccess={() => {
                // Optional: close modal after some delay on success
                // setTimeout(closeModal, 5000);
              }} />
            </div>
          </div>
        </div>
      )}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = () => {
  const context = useContext(LeadModalContext);
  if (context === undefined) {
    throw new Error('useLeadModal must be used within a LeadModalProvider');
  }
  return context;
};
