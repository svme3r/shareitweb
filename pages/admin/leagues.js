import Input from "../../components/admin/form/Input";
import Label from "../../components/admin/form/Label";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import Button from "../../components/admin/form/Button";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import { TagsInput } from "react-tag-input-component";

// Material Icons
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Head from "next/head";
import { Edit } from "@mui/icons-material";

// firebase
import storage from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../utils/api";
// import { getSession} from "next-auth/react";

// const Leagues = ({ leagues }) => {
const Leagues = () => {
  // const Leagues = () => {
  // console.log("🚀 ~ file: leagues.js ~ line 26 ~ Leagues ~ leagues", leagues);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [leagues, setLeagues] = useState([]);

  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    RulesandRegulation: "",
    Prize: [],
    StartDate: "",
    Deadline: "",
  });

  const { Title, Description, RulesandRegulation, Prize, StartDate, Deadline } =
    formData;

  const getLeagues = async () => {
    const res = await axios.get(`${BASE_URL}/leagues/home`);
    setLeagues(res.data);
  };
  useEffect(() => {
    getLeagues();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      Keywords: selected,
      [e.target.name]: e.target.value,
    });
  };

  // firebase image upload
  const [imageUpload, setImageUpload] = useState(null);
  // const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLeagues();
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUpload === null) return;

    //start loading
    setLoading(true);

    // forebase storage image reference
    const storageRef = ref(storage, `images/${imageUpload.name}`);

    //uploading image to firebase storage
    uploadBytes(storageRef, imageUpload).then((snapshot) => {
      //getting downloadable url
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        alert(downloadURL);

        const data = {
          Title,
          Description,
          RulesandRegulation,
          Prize: [{ firstPrize: Prize }],
          StartDate,
          Deadline,
          Keywords: selected,
          thumbnail: downloadURL,
        };

        axios
          .post(`${BASE_URL}/leagues/create`, data)
          .then((res) => {
            console.log("🚀 ~ file: leagues.js ~ line 107 ~ .then ~ res", res);
            setLoading(false);
            toast.success("League added successfuly!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            //Empty TextBoxes
            setFormData({
              Title: "",
              Description: "",
              RulesandRegulation: "",
              Prize: [],
              StartDate: "",
              Deadline: "",
            });
            setSelected([]);
          })
          .catch((err) => {
            console.log(
              "🚀 ~ file: leagues.js ~ line 99 ~ axios.post ~ err",
              err
            );
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
      });
    });
  };

  return (
    <>
      <Head>
        <title>Leagues - Admin | ShareIt</title>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1">
          <Header heading="Leagues" className={open ? "ml-16" : "ml-60"} />
          <div
            className={` mx-auto p-5 duration-300 ${open ? "ml-16" : "ml-60"}`}
          >
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Label text="Title" htmlFor="title" />
                    <Input
                      name="Title"
                      placeholder="Enter title"
                      className="w-1/2 my-2"
                      value={Title}
                      onChange={handleChange}
                      id="title"
                    />
                  </div>
                  <div>
                    <Label text="Description" htmlFor="desc" />
                    <textarea
                      name="Description"
                      id="desc"
                      value={Description}
                      onChange={handleChange}
                      placeholder="Enter description"
                      className="form-control w-1/2 my-2 block px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    ></textarea>
                  </div>
                  <div>
                    <Label text="Rules and Regulation" htmlFor="Rules" />
                    <textarea
                      name="RulesandRegulation"
                      id="Rules"
                      value={RulesandRegulation}
                      onChange={handleChange}
                      placeholder="Enter Rules and Regulation"
                      className="form-control w-1/2 my-2 block px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    ></textarea>
                  </div>
                  <div>
                    <Label text="Thumbnail" htmlFor="title2" />
                    <Input
                      type="file"
                      onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                      }}
                      className="w-1/2 my-2"
                      id="title2"
                    />
                  </div>
                  <div>
                    <Label text="Start Date" htmlFor="start" />
                    <Input
                      type="date"
                      id="start"
                      name="StartDate"
                      value={StartDate}
                      onChange={handleChange}
                      className="w-1/2 my-2"
                    />
                  </div>
                  <div>
                    <Label text="Deadline" htmlFor="deadline" />
                    <Input
                      type="date"
                      id="deadline"
                      name="Deadline"
                      value={Deadline}
                      onChange={handleChange}
                      className="w-1/2 my-2"
                    />
                  </div>
                  <div>
                    <Label text="Prize" htmlFor="Prize" />
                    <Input
                      type="text"
                      name="Prize"
                      id="Prize"
                      value={Prize}
                      onChange={handleChange}
                      placeholder="Enter Prize"
                      className="w-1/2 my-2"
                    />
                  </div>
                  <div className="w-1/2">
                    <Label
                      text="Keywords"
                      className="my-2"
                      htmlFor="Keywords"
                    />
                    <TagsInput
                      value={selected}
                      onChange={setSelected}
                      name="keywords"
                      className="my-2"
                      placeHolder="Enter Keywords"
                    />
                  </div>
                  <div>
                    <ToastContainer />
                    <Button
                      text="Submit"
                      // text={(<MoonLoader color="#fff" />)}
                      // text={
                      //   loading ? (
                      //     <Oval
                      //       height={30}
                      //       width={30}
                      //       color="#fff"
                      //       wrapperStyle={{}}
                      //       visible={true}
                      //       ariaLabel="oval-loading"
                      //       secondaryColor="#fff"
                      //       strokeWidth={3}
                      //       strokeWidthSecondary={3}
                      //     />
                      //   ) : (
                      //     "Submit"
                      //   )
                      // }
                      type="submit"
                      disabled={loading}
                      className="my-3"
                    />
                  </div>
                </form>
              </div>
              <div className="my-5">
                <LeaguesTable data={leagues} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function LeaguesTable({ data }) {
  return (
    <MaterialTable
      title="Leagues"
      columns={[
        { title: "ID", field: "_id" },
        { title: "Title", field: "Title" },
        { title: "Description", field: "Description" },
        { title: "Rules and regulation", field: "RulesandRegulation" },
        { title: "Keywords", field: "Keywords" },
        { title: "Storeis", field: "Storeis" },
        { title: "Winners", field: "Winners" },
        { title: "Prize", field: "prize" },
        { title: "Thumbnail", field: "thumbnail" },
        { title: "StartDate", field: "StartDate" },
        { title: "Deadline", field: "Deadline" },
      ]}
      data={data.map((i) => ({
        _id: i._id.substring(0, 10) + "...",
        Title: i.Title,
        Description: i.Description.substring(0, 20) + "...",
        RulesandRegulation: i.RulesandRegulation.substring(0, 20) + "...",
        Keywords: i.Keywords,
        Storeis: i.Storeis,
        Winners: i.Winners,
        Prize: i.Prize,
        StartDate: i.StartDate,
        Deadline: i.Deadline,
        thumbnail: <img src={i.thumbnail} width="30" />,
      }))}
      actions={[
        {
          icon: () => <Edit className="text-green-700" />,
          tooltip: "Edit",
          onClick: (event, rowData) => alert("You saved " + rowData._id),
        },
        {
          icon: () => <DeleteIcon className="text-red-700" />,
          tooltip: "Delete",
          onClick: (event, rowData) =>
            confirm("You want to delete " + rowData.name),
        },
      ]}
    />
  );
}

// export async function getServerSideProps(context) {
//   const res = await axios.get(`${BASE_URL}/leagues/home`);

//   return {
//     props: {
//       leagues: res.data,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//       },
//     };
//   }

//   return {
//     props: {
//     },
//   };
// }

export default Leagues;
