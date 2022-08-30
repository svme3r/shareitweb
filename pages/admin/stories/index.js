import Input from "/components/admin/form/Input";
import Label from "/components/admin/form/Label";
import Header from "/components/admin/Header";
import Sidebar from "/components/admin/Sidebar";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import Button from "/components/admin/form/Button";
import MaterialTable from "material-table";
import { useState } from "react";

// Material Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import Head from "next/head";
import { Edit } from "@mui/icons-material";
import axios from "axios";
import { BASE_URL } from "../../../utils/api";
import { useRouter } from "next/router";
// import { getSession } from "next-auth/react";

const Stories = ({ stories }) => {
  console.log("🚀 ~ file: stories.js ~ line 21 ~ Stories ~ stories", stories);
  const [open, setOpen] = useState(false);
  const data = [
    {
      label: "search me",
      value: "searchme",
    },
    {
      label: "search me",
      value: "searchme",
    },
    {
      label: "search me",
      value: "searchme",
    },
  ];

  const onChange = (currentNode, selectedNodes) => {
    console.log("onChange::", currentNode, selectedNodes);
  };
  const onAction = (node, action) => {
    console.log("onAction::", action, node);
  };
  const onNodeToggle = (currentNode) => {
    console.log("onNodeToggle::", currentNode);
  };

  return (
    <>
      <Head>
        <title>Stories - Admin | ShareIt</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className="flex">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1">
          <Header heading="Stories" className={open ? "ml-16" : "ml-60"} />
          <div
            className={` mx-auto p-5 duration-300 ${open ? "ml-16" : "ml-60"}`}
          >
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div>
                <form>
                  <div>
                    <Label text="Title" htmlFor="title" />
                    <Input
                      placeholder="Enter title"
                      className="w-1/2 my-2"
                      id="title"
                    />
                  </div>
                  <div>
                    <Label text="Title" htmlFor="title1" />
                    <Input
                      placeholder="Enter title"
                      className="w-1/2 my-2"
                      id="title1"
                    />
                  </div>
                  <div>
                    <Label text="Title" htmlFor="title" />
                    <DropdownTreeSelect
                      data={data}
                      onChange={onChange}
                      onAction={onAction}
                      onNodeToggle={onNodeToggle}
                    />
                  </div>
                  <div>
                    <Button className="my-3" />
                  </div>
                </form>
              </div>
              <div className="my-5">
                <StoriesTable data={stories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function StoriesTable({ data }) {
  const router = useRouter();
  return (
    <MaterialTable
      title="Stories"
      columns={[
        { title: "ID", field: "_id" },
        { title: "Author id", field: "Author_id" },
        { title: "Title", field: "Title" },
        { title: "Stroy", field: "Stroy" },
        { title: "Thumbnail", field: "Thumbnail" },
        { title: "LeagueId", field: "LeagueId" },
        { title: "Rating", field: "Rating" },
        { title: "Monitor_Rating", field: "Monitor_Rating" },
        { title: "Admin_Rating", field: "Admin_Rating" },
        { title: "Liked", field: "Liked" },
        { title: "Report", field: "Report" },
        { title: "Comments", field: "Comments" },
        { title: "Win", field: "Win" },
      ]}
      data={data.map((i) => ({
        _id: i._id,
        Title: i.Title,
        Author_id: i.Author_id?.substring(0, 20) + "...",
        Stroy: i.Stroy.substring(0, 20) + "...",
        Thumbnail: <img src={i.Thumbnail} width="30" />,
        LeagueId: i.LeagueId?.substring(0, 20) + "...",
        Rating: i.Rating,
        Monitor_Rating: i.Monitor_Rating,
        Admin_Rating: i.Admin_Rating,
        Liked: i.Liked,
        Report: i.Report,
        Comments: i.Comments,
        Win: i.Win,
      }))}
      actions={[
        {
          icon: () => <TaskAltIcon className="text-green-700" />,
          tooltip: "Rank Story",
          onClick: (event, rowData) => alert("You saved " + rowData._id),
        },
        {
          icon: () => <VisibilityIcon className="text-gray-700" />,
          tooltip: "View",
          onClick: (event, rowData) => {
            router.push("/dashboard/league/participants/" + rowData._id);
          },
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

export async function getServerSideProps(context) {
  const res = await axios.get(`${BASE_URL}/Stories/homestories`);
  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/signin",
  //     },
  //   };
  // }

  return {
    props: {
      stories: res.data,
    },
  };
}

export default Stories;
