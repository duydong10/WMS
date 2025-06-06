// src/pages/Dashboard.jsx
// --------------------------------------------------------
import TableFormat from "../components/Table.jsx";
import translations from "../components/Translations.jsx";

const data = [
  {
    id: "1",
    po: "abc",
    asn: "1223",
  },
  {
    id: "2",
    po: "def",
    asn: "456",
  },
  {
    id: "3",
    po: "cdnlsan",
    asn: "dsabk",
  },
];

function Dashboard() {
  return (
    <article>
      <title>{translations["en"]["dashboard"]}</title>
      <h1 className="text-2xl font-bold mb-4">
        {translations["en"]["monitoring_dashboard"]}
      </h1>
      <TableFormat data={data} />
    </article>
  );
}

export default Dashboard;
