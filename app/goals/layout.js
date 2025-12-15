// app/goals/layout.js
import Navbar from '@/components/Navbar';
import '../globals.css'; // Import specific styles if needed

export default function GoalsLayout({ children }) {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  );
}