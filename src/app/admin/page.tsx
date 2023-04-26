"use client";
import BarChart from "@/components/Charts/BarChart";
import LineChart from "@/components/Charts/LineChart";
import { axios } from "@/config";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ];
  const labels2 = ["2019", "2020", "2021", "2022", "2023"];
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`user/get`);
    setUsers(data.data);
    console.log(data);
  };

  const deleteUser = (id: any) => {
    axios.delete(`user/delete/`, {data:{id:id}});
    // console.log("Detele", data);
    alert("User Deleted!")
    getData()
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2">
      <div className="col-span-1">
        <p className="font-semibold text-lg">Profits throught the years:</p>
        <LineChart labels={labels} />
      </div>
      <div className="col-span-1 ">
        <p className="font-semibold text-lg">Profits throught the years:</p>
        <BarChart labels={labels2} />
      </div>
      <div className="max-h-96 overflow-auto col-span-2 scrollbar-hide">
        <h2 className="text-lg font-semibold my-2">List of Users :</h2>
        <Table className="bg-sky-400">
          <Table.Head className="bg-sky-400">
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>isAdmin</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.length >= 1 &&
              users.map((user) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.id}
                  </Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {user.isAdmin ? "Admin" : "Not-Admin"}
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default page;
