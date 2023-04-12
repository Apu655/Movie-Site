"use client";
import { axios } from "@/config";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`user/get`);
    setUsers(data.data);
    console.log(data);
  };

  useEffect(() => {

    getData();
  },[]);
  return (
    <div className="max-w-7xl mx-auto max-h-96 overflow-auto">

          <Table className="bg-sky-400">
            <Table.Head className="bg-sky-400">
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
            {users.length>=1 &&
        users.map((user) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.name}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>        ))}
            </Table.Body>
          </Table>

    </div>
  );
};

export default page;
