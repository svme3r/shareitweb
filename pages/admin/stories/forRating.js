import Input from "src/components/admins/form/Input";
import Label from "src/components/admins/form/Label";
import Header from "src/components/admins/Header";
import Sidebar from "src/components/admins/Sidebar";

import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import Button from "src/components/admins/form/Button";
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
import StoryTabs from "src/components/admins/Tabs/Tabs";

const ForRating = ({ leagues, stories }) => {
  const [open, setOpen] = useState(false);

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
          <Header
            heading="Stories For Rating"
            className={open ? "ml-16" : "ml-60"}
          />
          <div
            className={` mx-auto p-5 duration-300 ${open ? "ml-16" : "ml-60"}`}
          >
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="my-5">
                <StoryTabs leagues={leagues} stories={stories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const leaguesRes = await axios.get(`${BASE_URL}/leagues/home`);
  const storiesRes = await axios.get(`${BASE_URL}/Stories/homestories`);

  return {
    props: { leagues: leaguesRes.data, stories: storiesRes.data },
  };
};

export default ForRating;
