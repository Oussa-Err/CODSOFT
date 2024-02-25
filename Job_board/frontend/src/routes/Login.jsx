import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string("Enter your email").email("Enter a valid email"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
});

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      // alert(JSON.stringify(values, null, 2))
      action.resetForm()
    }
  })

  return (
    <div className="mdp-4 flex items-center justify-center h-[80dvh]">
      <div className="w-full max-w-sm p-4  border rounded-lg shadow sm:p-6 md:p-8 bg-[--background-color] border-gray-700">
        <form onSubmit={formik.handleSubmit} className="space-y-6" action="#">
          <h5 className="text-xl font-medium">
            Log In
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log in
          </button>
          <div className="text-sm font-medium dark:text-gray-600">
            Don't have an account?
            <a
              href="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
