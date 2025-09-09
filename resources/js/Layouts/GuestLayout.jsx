import Photo from "../../../public/build/assets/images/Photo.png";
import {Grid} from '@mui/material';


export default function GuestLayout({children}) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <Grid container spacing={2}>
                <Grid item size={6}>
                    <div>
                        <img
                            src={Photo}
                            alt="photo"
                        />
                    </div>
                    <div className="bg-[#005EB8] mt-1 p-5 text-white">
                        <p className="uppercase font-">Unite compliance</p>
                        <p className="mt-3 ">
                            Join us for a seamless online experience. Access your account effortlessly. Stay secure and
                            enjoy a hassle-free journey.
                        </p>
                    </div>
                </Grid>
                <Grid item size={6}>
                    <div className="w-full overflow-hidden bg-white px-20 py-40 shadow-md sm:max-w-md ">
                        {children}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
