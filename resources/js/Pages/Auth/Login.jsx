import { useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FaEye, FaEyeSlash, FaGoogle, FaApple } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

export default function Login({ status, canResetPassword }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        organization: '',
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            
            <div className="w-full space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">Login to your account</h1>
                
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <div className="flex items-center mb-1">
                            <InputLabel 
                                htmlFor="organization" 
                                value="Organisation Reference" 
                                className="block text-sm font-medium text-gray-700" 
                            />
                            <span className="text-red-500 ml-1">*</span>
                        </div>
                        <div className="relative">
                            <TextInput
                                id="organization"
                                type="text"
                                name="organization"
                                value={data.organization}
                                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setData('organization', e.target.value)}
                                placeholder="Organisation reference"
                            />
                        </div>
                        <InputError message={errors.organization} className="mt-1 text-sm text-red-600" />
                    </div>

                    <div>
                        <div className="flex items-center mb-1">
                            <InputLabel 
                                htmlFor="email" 
                                value="Email Address" 
                                className="block text-sm font-medium text-gray-700" 
                            />
                            <span className="text-red-500 ml-1">*</span>
                        </div>
                        <div className="relative">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Input your registered email"
                            />
                        </div>
                        <InputError message={errors.email} className="mt-1 text-sm text-red-600" />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center">
                                <InputLabel 
                                    htmlFor="password" 
                                    value="Password" 
                                    className="block text-sm font-medium text-gray-700" 
                                />
                                <span className="text-red-500 ml-1">*</span>
                            </div>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>
                        <div className="relative">
                            <TextInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={data.password}
                                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pr-10"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Input your password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <InputError message={errors.password} className="mt-1 text-sm text-red-600" />
                    </div>

                    <div className="flex items-center">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex w-full justify-center items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Login
                            <FaArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </form>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or login with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <a
                            href="#"
                            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                            <FaGoogle className="h-5 w-5 text-red-500" />
                            <span>Google</span>
                        </a>
                        <a
                            href="#"
                            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                            <FaApple className="h-5 w-5 text-gray-900" />
                            <span>Apple</span>
                        </a>
                    </div>
                </div>

                <div className="pt-4 text-center text-sm text-gray-500">
                    <p>
                        You're new in here?{' '}
                        <Link 
                            href={route('register')} 
                            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                        >
                            Create Account <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
