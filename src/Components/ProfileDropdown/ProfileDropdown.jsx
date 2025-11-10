import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, User } from "lucide-react";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const {user,signOutUser} = useAuth();
  console.log(user.photoURL);

  const handleSignOut =()=>{
    signOutUser()
    .then(()=>{
        toast('Sign Out successful')
    })
  }

  const avatar= "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  return (
    <>
        {/* Profile Avatar */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="relative group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm p-1">
              <img
                src={user?.photoURL||avatar}
                alt={avatar}
                className="w-full h-full rounded-full object-cover ring-2 ring-white/40 shadow-md group-hover:ring-white transition-all"
              />
            </div>
          </button>

          {/* Dropdown with Animation */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="absolute right-0 mt-3 w-70 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden z-50"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/20">
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full ring-2 ring-white/30"
                  />
                  <div>
                    <p className="text-sm text-black">Welcome back,</p>
                    <p className="font-semibold text-black">{user?.displayName}</p>
                  </div>
                </div>

                {/* Dropdown Buttons */}
                <div className="flex flex-col text-black">
                  <button
                    className="flex items-center gap-2 px-4 py-3 hover:bg-orange-200 transition-all"
                    onClick={() => alert("Go to Profile")}
                  >
                    <User className="w-4 h-4" /> Profile
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-3 hover:bg-orange-200 transition-all border-t border-white/10"
                    onClick={handleSignOut}
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </>

  );
}
