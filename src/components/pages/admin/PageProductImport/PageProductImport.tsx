import { useState } from "react";
import { Alert } from "@mui/material";
import API_PATHS from "~/constants/apiPaths";
import ProductsTable from "~/components/pages/admin/PageProductImport/components/ProductsTable";
import CSVFileImport from "~/components/pages/admin/PageProductImport/components/CSVFileImport";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

type ValueType = { message: string; code: number };

export default function PageProductImport() {
  const [error, setError] = useState<ValueType | null>(null);

  return (
    <Box py={3}>
      {error && (
        <Alert severity="error">{`${error.code} ${error.message}`}</Alert>
      )}
      <Box mb={2} display="flex" justifyContent="space-between">
        <CSVFileImport
          url={`${API_PATHS.import}/import`}
          title="Import Products CSV"
          setError={setError}
        />
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ alignSelf: "end" }}
          component={Link}
          to={"/admin/product-form"}
        >
          Create product
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}
