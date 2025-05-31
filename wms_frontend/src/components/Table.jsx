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

function TableFormat({ data }) {
    if (!data || data.length === 0) return null;
    // Lấy danh sách key từ object đầu tiên, loại bỏ 'id' nếu không muốn hiển thị
    const keys = Object.keys(data[0]).filter(key => key !== "id");

    return (
        <ThemeProvider theme={customTheme}>
            <div className="overflow-x-auto">
                <Table striped>
                    <TableHead>
                        {keys.map((key) => (
                            <TableHeadCell key={key}>{key.toUpperCase()}</TableHeadCell>
                        ))}
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                {keys.map((key) => (
                                    <TableCell key={key}>{row[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </ThemeProvider>
    );
}

export default TableFormat;