import Header from "src/components/admins/Header";
import Sidebar from "src/components/admins/Sidebar";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import MaterialTable from "material-table";
import { toast, ToastContainer } from "react-toastify";

const Roles = ({ users, roles, userRoles }) => {
  console.log("🚀 ~ file: roles.js ~ line 10 ~ Roles ~ userRoles", userRoles);
  const [open, setOpen] = useState(false);
  const [rolesData, setRolesData] = useState({
    userId: "",
    roleId: "",
    startDate: "",
    endDate: "",
  });

  const [currentUser, setCurrentUser] = useState({});

  const { userId, roleId, startDate, endDate } = rolesData;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleChange = (e) => {
    setRolesData({ ...rolesData, [e.target.name]: e.target.value });
    console.log(
      "🚀 ~ file: roles.js ~ line 34 ~ handleChange ~ e.target.value",
      e.target.value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("formData", rolesData);

    alert(roleId);

    // axios
    //   .post(`${BASE_URL}/user/UpdateUserRole/${userId}`, {
    //     role: `${roleId}`,
    //   })
    //   .then((res) => {
    //     console.log("🚀 ~ file: roles.js ~ line 49 ~ handleSubmit ~ res", res);
    //     toast.success("Role assigned successfuly!", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     console.log("🚀 ~ file: roles.js ~ line 51 ~ handleSubmit ~ err", err);
    //     toast.error("Something went wrong!", {
    //       position: "top-right",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   });

    axios
      .post(`${BASE_URL}/user/AddUserRole`, {
        userId,
        roleId,
        expiryDate: endDate,
        isTrialUsed: 0,
        effectiveDate: startDate,
        createdBy: currentUser._id,
        createdOn: new Date(),
        status: 1,
        isOwner: 0,
      })
      .then((res) => {
        console.log("🚀 ~ file: roles.js ~ line 49 ~ handleSubmit ~ res", res);
        toast.success("Role assigned successfuly!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("🚀 ~ file: roles.js ~ line 51 ~ handleSubmit ~ err", err);
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <Head>
        <title>Roles - Admin | ShareIt</title>
      </Head>
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1">
          <Header heading="Roles" className={open ? "ml-16" : "ml-60"} />
          <div
            className={`mx-auto p-5 duration-300 ${open ? "ml-16" : "ml-60"}`}
          >
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="my-2">
                    <label className="text-sm font-medium text-gray-600 truncate ">
                      Select User
                    </label>
                    <select
                      name="userId"
                      value={userId}
                      onChange={handleChange}
                      className="my-1 form-select appearance-none block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-1/2"
                    >
                      <option>Select</option>
                      {users?.map((item, index) => {
                        return (
                          <option key={index} value={item._id}>
                            {item.email}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="my-2">
                    <label className="text-sm font-medium text-gray-600 truncate ">
                      Select Role
                    </label>
                    <select
                      name="roleId"
                      // value={roleId}
                      onChange={handleChange}
                      className="my-1 form-select appearance-none block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-1/2"
                    >
                      <option>Select</option>
                      {roles?.map((item, index) => {
                        return (
                          // <option key={index} value={index}>
                          <option key={index} value={item._id}>
                            {item.roleName}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="my-2">
                    <label className="text-sm font-medium text-gray-600 truncate ">
                      From
                    </label>
                    <input
                      name="startDate"
                      value={startDate}
                      onChange={handleChange}
                      type="date"
                      className="my-1 form-control block px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    />
                  </div>
                  <div className="my-2">
                    <label className="text-sm font-medium text-gray-600 truncate ">
                      To
                    </label>
                    <input
                      name="endDate"
                      value={endDate}
                      onChange={handleChange}
                      type="date"
                      className="my-1 form-control block px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    />
                  </div>
                  <ToastContainer />
                  <button
                    disabled={loading ? true : false}
                    type="submit"
                    className={`${
                      loading ? "bg-gray-400" : "bg-gray-700"
                    } text-white py-2 px-10 rounded-full shadow-sm hover:shadow-lg hover:tracking-widest hover:bg-gray-900 duration-300`}
                  >
                    Assign
                  </button>
                </form>
              </div>
              <div className="my-8 w-full">
                <Editable formData={userRoles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Editable({ formData }) {
  const [columns, setColumns] = useState([
    { title: "Id", field: "_id" },
    {
      title: "User Id",
      field: "userId",
    },
    { title: "Role Id", field: "roleId" },
    {
      title: "Created By",
      field: "createdBy",
    },
    {
      title: "Created On",
      field: "createdOn",
    },
    {
      title: "Is Owner",
      field: "isOwner",
    },
    {
      title: "Is Trial Used",
      field: "isTrialUsed",
    },
    {
      title: "Effective Date",
      field: "effectiveDate",
    },
    {
      title: "Expiry Date",
      field: "expiryDate",
    },
  ]);

  const [data, setData] = useState(formData);

  return (
    <MaterialTable
      title="Assigned Roles"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

export async function getServerSideProps(context) {
  const userRes = await axios.get(`${BASE_URL}/user/GetUsers`);
  const roleRes = await axios.get(`${BASE_URL}/user/GetRoles`);
  const userRolesRes = await axios.get(`${BASE_URL}/user/GetUserRoles`);

  return {
    props: {
      users: userRes.data,
      roles: roleRes.data,
      userRoles: userRolesRes.data,
    },
  };
}

export default Roles;
