import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input {...register('username')} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" {...register('password')} className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <ReCAPTCHA sitekey="Your-Site-Key-Here" />
        </div>
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
