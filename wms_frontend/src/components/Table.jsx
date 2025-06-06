// src/components/Table.jsx
// --------------------------------------------------------
import { createTheme, ThemeProvider } from "flowbite-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function TableFormat({ data }) {
  if (!data || data.length === 0) return null;
  // Lấy danh sách key từ object đầu tiên, loại bỏ 'id' nếu không muốn hiển thị
  const keys = Object.keys(data[0]).filter((key) => key !== "id");

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <TableHead>
          <TableRow>
            {keys.map((key) => (
              <TableHeadCell key={key}>{key.toUpperCase()}</TableHeadCell>
            ))}
          </TableRow>
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
  );
}

export default TableFormat;
