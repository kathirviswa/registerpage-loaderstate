import  { useState} from 'react';
import { LoaderCircle, CircleAlert , CircleCheckBig, Eye, EyeOff , X,  } from "lucide-react";
// import { Monitor } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [showPassword, setShowPassword] = useState(false);
  const [setError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  // const [screenSize, setScreenSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  // useEffect(() => {
  //   const handleResize = () => {
  //     // setScreenSize({
  //     //   width: window.innerWidth,
  //     //   height: window.innerHeight,
  //     // });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const getBreakpoint = () => {
  //   const width = screenSize.width;
  //   if (width >= 1536) return 'xxl';
  //   if (width >= 1280) return 'xl';
  //   if (width >= 1024) return 'lg';
  //   if (width >= 768) return 'md';
  //   if (width >= 640) return 'sm';
  //   return 'xs';
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setAlertType('success');
      setShowAlert(true);
      setSubmittedData({ ...formData });
      setFormData({ name: '', email: '', password: '', rememberMe: false });
   
    } catch (error) {
      setAlertType('error');
      setError(error);
      setShowAlert(true);
    } 
    finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      {/* <div className="fixed bottom-4 left-4 bg-white text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2 text-sm z-50"> */}
        {/* <Monitor className="w-4 h-4" />
        <span>{getBreakpoint().toUpperCase()}</span>
        <span className="text-gray-400">
          {screenSize.width}x{screenSize.height}
        </span> */}
      {/* </div> */}

      <div className="w-full  max-w-4xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 bg-black rounded-full  flex items-center justify-center mb-20">
                <span className="text-white font-bold mb-1.5 font-mono text-[17px] ">
                    <span className='text-yellow-300'>F</span>lx</span>
              </div>
              <span className="font-bold text-3xl mb-20 ">RU<span className='text-yellow-300 font-bold'>I</span>X</span>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-center">WELCOME RUIX</h1>
            <p className="text-gray-600 text-center">Welcome to Ruix dashboard Community</p>
          </div>
        {/* ---------------------- */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input type="text" name="name" value={formData.name}
                onChange={handleChange} placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                required
              />
            </div>
            <div>
              <input type="email" name="email"value={formData.email}
                onChange={handleChange} placeholder="Email"
                className="w-full px-4 py-3 text-gray-600 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                required 
              />
            </div>
            {/* ---------------------- */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password" 
                className="w-full px-4 py-3 pr-12text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                required
              />
              {/* ---------------------- */}
              <button type="button" onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">Remember Me</label>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-black text-white py-3 rounded-3xl font-medium hover:bg-gray-900 transition-colors flex items-center justify-center"
            >
              {loading ? <LoaderCircle className="w-5 h-5 animate-spin" /> : 'Register'}
            </button>
       {/* --------------------------- */}
          <div className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <a href="#" className="text-yellow-500 hover:underline">
              Log in
            </a>
            </div>
          </form>
        </div>

        <div className="hidden md:block bg-gradient-to-br from-gray-800 to-black">
          <img src ="https://images.pexels.com/photos/30286786/pexels-photo-30286786/free-photo-of-colorful-kite-in-bali-s-clear-summer-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         alt="pen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {showAlert && (
        <div
          className={`fixed top-4 right-4 p-6 rounded-lg shadow-xl max-w-md w-full ${
            alertType === 'success' ? 'bg-white border-l-4 border-green-500' : 'bg-red-100 text-red-800'
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              {alertType === 'success' ? (
                <>
                  <CircleCheckBig  className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold text-gray-900">Registration Successful!</h3>
                </>
              ) : (
                <>
                  <CircleAlert  className="w-5 h-5" />
                  <h3 className="font-semibold">Registration Failed</h3>
                </>
              )}
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {alertType === 'success' && submittedData && (
            <div className="space-y-2 text-sm text-gray-600">
              <div className="grid grid-cols-3 gap-2">
                <span className="font-medium">Name:</span>
                <span className="col-span-2">{submittedData.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-medium">Email:</span>
                <span className="col-span-2">{submittedData.email}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-medium">Password:</span>
                <span className="col-span-2">{'•'.repeat(submittedData.password.length)}</span>
              </div>
            </div>
          )}

          {alertType === 'error' && <p>Something went wrong. Please try again.</p>}
        </div>
      )}
    </div>
  );
}

export default App;
