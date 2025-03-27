// src/lib/contactService.ts
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'contactSubmissions'), {
      ...formData,
      createdAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};