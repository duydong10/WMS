// src/components/Menu/Menu.jsx
// --------------------------------------------------------
import { useState } from "react";
import { ListGroup, ListGroupItem } from "flowbite-react";
import { createTheme, ThemeProvider } from "flowbite-react";
import "../../index.css";
import "./Menu.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MenuTheme = createTheme({
  listGroup: {
    root: {
      base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white",
    },
    item: {
      base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
      link: {
        base: "flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",
        active: {
          off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
          on: "bg-cyan-700 text-white dark:bg-gray-800",
        },
        disabled: {
          off: "",
          on: "cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900",
        },
        href: {
          off: "",
          on: "",
        },
        icon: "mr-2 h-4 w-4 fill-current",
      },
    },
  },
});

function MenuFormat() {
  const [showInbound, setShowInbound] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [showController, setShowController] = useState(false);

  function setHiddenItem() {
    setShowController(false);
    setShowInventory(false);
    setShowInbound(false);
  }

  return (
    <ThemeProvider theme={MenuTheme}>
      <ListGroup className="min-h-screen text-md">
        <ListGroupItem
          onClick={() => {
            if (showController) {
              setHiddenItem();
            } else {
              setHiddenItem();
              setShowController(true);
            }
          }}
          className="flex items-center"
        >
          AGV Controller
          {showController ? (
            <IoIosArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          )}
        </ListGroupItem>
        {showController && (
          <>
            <ListGroupItem href="/create_task">
              <p className="list-inside">Create Task</p>
            </ListGroupItem>
            <ListGroupItem href="/continue_task">
              <p className="list-inside">Continue Task</p>
            </ListGroupItem>
            <ListGroupItem href="/cancel_task">
              <p className="list-inside">Cancel Task</p>
            </ListGroupItem>
            <ListGroupItem href="/agv_callback">
              <p className="list-inside">AGV Callback</p>
            </ListGroupItem>
          </>
        )}
        <ListGroupItem>System Management</ListGroupItem>
        <ListGroupItem>System Config</ListGroupItem>
        <ListGroupItem href="/dashboard">Dashboard</ListGroupItem>
        <ListGroupItem
          onClick={() => {
            if (showInbound) {
              setHiddenItem();
            } else {
              setHiddenItem();
              setShowInbound(true);
            }
          }}
        >
          Inbound
          {showInbound ? (
            <IoIosArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          )}
        </ListGroupItem>
        {showInbound && (
          <>
            <ListGroupItem>
              <p className="list-inside">PO</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">ASN</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Receive By Scan</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Quality Check</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Cancel Receiving</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">ASN Group</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">ASN SerialNO</p>
            </ListGroupItem>
          </>
        )}
        <ListGroupItem
          onClick={() => {
            if (showInventory) {
              setHiddenItem();
            } else {
              setHiddenItem();
              setShowInventory(true);
            }
          }}
        >
          Inventory
          {showInventory ? (
            <IoIosArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <IoIosArrowDown className="ml-2 h-4 w-4" />
          )}
        </ListGroupItem>
        {showInventory && (
          <>
            <ListGroupItem>
              <p className="list-inside">Inventory Balance</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Transaction Log</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Hold/Release Document</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Transfer Document</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Movement Document</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Inventory Scan</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="list-inside">Inventory Transfer</p>
            </ListGroupItem>
          </>
        )}
        <ListGroupItem>Outbound</ListGroupItem>
      </ListGroup>
    </ThemeProvider>
  );
}

export default MenuFormat;
