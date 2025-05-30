// src/components/Table.jsx
// --------------------------------------------------------
import { createTheme, ThemeProvider } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const customTheme = createTheme({
    table: {

        "root": {
            "base": "w-full text-left text-sm text-gray-500 dark:text-gray-400",
            "shadow": "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
            "wrapper": "relative"
        },
        "body": {
            "base": "group/body",
            "cell": {
                "base": "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"
            }
        },
        "head": {
            "base": "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
            "cell": {
                "base": "bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"
            }
        },
        "row": {
            "base": "group/row",
            "hovered": "hover:bg-gray-50 dark:hover:bg-gray-600",
            "striped": "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        }
    }
}
);

const data = [
    {
        "id": "1",
        "po": "abc",
        "asn": "1223"
    },
    {
        "id": "2",
        "po": "def",
        "asn": "456"
    },
    {
        "id": "3",
        "po": "cdnlsan",
        "asn": "dsabk"
    }
]

function TableFormat() {
    return (
        <ThemeProvider theme={customTheme}>
            <div className="overflow-x-auto">
                <Table striped>
                    <TableHead>
                        <TableHeadCell>PO</TableHeadCell>
                        <TableHeadCell>ASN</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {data.map((data) => (
                            <TableRow key={data.id}>
                                <TableCell>{data.po}</TableCell>
                                <TableCell>{data.asn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ThemeProvider>
    );
}

export default TableFormat;