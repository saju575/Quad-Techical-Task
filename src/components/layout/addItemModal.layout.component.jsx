import { useFormik } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { DataContext, actionTypes } from "../../context/food.context";
const AddItemFormModal = ({ setShowModal, category }) => {
  const { dispatch } = useContext(DataContext);
  const formik = useFormik({
    initialValues: {
      Name: "",
      ImageUrl: "",
      Price: "",
    },
    validationSchema: yup.object({
      Name: yup.string().required("Name is required"),
      ImageUrl: yup
        .string()
        .url("Invalid URL")
        .required("Image URL is required"),
      Price: yup
        .number()
        .typeError("Price must be a number")
        .required("Price is required"),
    }),
    onSubmit: (values) => {
      const newData = {
        ...values,
        IsPopular: category === "popular" ? true : false,
        IsRecommended: category === "recommended" ? true : false,
      };
      dispatch({
        type: actionTypes.ADD_DATA,
        payload: newData,
      });

      setShowModal(false);
    },
  });

  return (
    <>
      {/* <!-- Backdrop --> */}
      <div className="fixed inset-0 bg-black opacity-70 z-20"></div>

      {/* <!-- Modal Container --> */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-md z-30 sm:min-w-[500px]">
        {/* <!-- Close Button --> */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="my-5">
          {category === "popular" ? (
            <h2 className="text-2xl uppercase font-medium mb-4">
              Add Popular Food
            </h2>
          ) : (
            <h2 className="text-2xl uppercase font-medium mb-4">
              Add Recommended Food
            </h2>
          )}
        </div>
        <form onSubmit={formik.handleSubmit}>
          {/* <!-- Modal Content --> */}
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />

            {formik.touched.Name && formik.errors.Name ? (
              <div className="text-red-500 text-sm">{formik.errors.Name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="ImageUrl"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Image URL:
            </label>
            <input
              type="text"
              id="ImageUrl"
              name="ImageUrl"
              value={formik.values.ImageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {formik.touched.ImageUrl && formik.errors.ImageUrl ? (
              <div className="text-red-500 text-sm">
                {formik.errors.ImageUrl}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Price"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Price:
            </label>
            <input
              type="text"
              id="Price"
              name="Price"
              value={formik.values.Price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {formik.touched.Price && formik.errors.Price ? (
              <div className="text-red-500 text-sm">{formik.errors.Price}</div>
            ) : null}
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItemFormModal;
