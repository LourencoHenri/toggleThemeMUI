import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { useMemo, createContext, useState } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ToggleColorMode() {
	const [mode, setMode] = useState<"light" | "dark">("light");
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);
}
