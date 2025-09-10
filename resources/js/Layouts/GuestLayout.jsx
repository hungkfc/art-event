export default function GuestLayout({ children }) {
    return (
        <div className="h-screen flex sm:flex-row bg-white overflow-hidden align-center">
            {/* Left side - Blue section with image */}
            <div className="w-full sm:w-1/2 flex flex-col">
                {/* Image */}
                <div className="flex-1 flex items-start justify-center overflow-hidden">
                    <img
                        src="/images/Photo.png"
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text content */}
                <div className="mt-2 py-8 px-4 text-center bg-[#005EB8]">
                    <div className="max-w-md mx-auto space-y-4">
                        <h2 className="text-2xl font-bold text-white">UNITE COMPLIANCE</h2>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Join us for a seamless online experience. Access your account effortlessly.
                            Stay secure and enjoy a hassle-free journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Login form */}
            <div className="w-full sm:w-1/2 overflow-y-auto p-10">
                <div className="w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
