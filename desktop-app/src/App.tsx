import { useState } from "react";
import "./App.css";
import { Stack, TextField, Typography } from "@mui/material";
import { sum } from "./utils";

function App() {
  const [a, setA] = useState<string | undefined>();
  const [b, setB] = useState<string | undefined>();

  const numA = a ? parseFloat(a) : 0;
  const numB = b ? parseFloat(b) : 0;

  const result = sum(numA, numB);

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          type="number"
          label="A"
          onChange={(e) => setA(e.target.value)}
          data-testid="number-a"
        />
        <Typography>+</Typography>
        <TextField
          type="number"
          label="B"
          onChange={(e) => setB(e.target.value)}
          data-testid="number-b"
        />
        <Typography>=</Typography>
        <Typography data-testid="result">{result}</Typography>
      </Stack>
    </Stack>
  );
}

export default App;
