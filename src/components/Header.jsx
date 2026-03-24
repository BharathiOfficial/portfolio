export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-20">

            {/* Profile Image */}
            <img 
                src="/assets/my image.jpeg" 
                alt="Bharathi" 
                className="w-36 h-36 rounded-full object-cover shadow-lg"
            />

            {/* Name */}
            <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
                Hi! I'm Bharathi
                <img src="/assets/hand-icon.png" alt="" className="w-5" />
            </h3>

            {/* Role */}
            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-Ovo leading-tight">
                Entry-Level Software Developer
            </h1>

            {/* About */}
            <p className="max-w-2xl mx-auto font-Ovo text-gray-600">
                I am a final year Computer Science student from Thoothukudi, passionate about web development and AI-based projects. I enjoy building simple and user-friendly applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">

                <a href="#contact"
                    className="px-8 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2">
                    Contact Me
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

               <a href="/Bharathi_Resume.docx" download
   className="px-8 py-2.5 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center gap-2">

   My Resume
   <img src="./assets/download-icon.png" alt="" className="w-4" />
</a>
            </div>
        </div>
    )
}