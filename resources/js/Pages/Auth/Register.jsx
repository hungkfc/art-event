import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        organization: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="w-full space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <div className="flex items-center mb-1">
                            <InputLabel
                                htmlFor="name"
                                value="Your Name"
                                className="block text-sm font-medium text-gray-700"
                            />
                            <span className="text-red-500 ml-1">*</span>
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Input your full name"
                            required
                        />
                        <InputError message={errors.name} className="mt-1 text-sm text-red-600" />
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
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            autoComplete="email"
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Input your email address"
                            required
                        />
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
                        </div>
                        <div className="relative">
                            <TextInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={data.password}
                                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pr-10"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Create a password"
                                required
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
                        <p className="mt-1 text-xs text-gray-500">
                            Must be at least 8 characters, 1 uppercase, 1 number & 1 special character
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center mb-1">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                                className="block text-sm font-medium text-gray-700"
                            />
                            <span className="text-red-500 ml-1">*</span>
                        </div>
                        <TextInput
                            id="password_confirmation"
                            type={showPassword ? 'text' : 'password'}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pr-10"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-1 text-sm text-red-600" />
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                            I agree to the <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Terms & Conditions</a> and <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Privacy Policy</a>
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex w-full justify-center items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Create Account
                            <FaArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </form>

                <div className="pt-4 text-center text-sm text-gray-500">
                    <p>
                        Already have an account?{' '}
                        <Link
                            href={route('login')}
                            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                        >
                            Login <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
