import { useEffect, type FC } from "react";

import { Box } from "@components/material.js";
import { ModeToggler } from "@components/mode-toggler.js";
import { UserDropdown } from "@components/user-dropdown.js";
import type { Settings } from "@hooks/use-settings.js";
import { Search } from "@nxweb/icons/tabler";
import { InputBase } from "@mui/material";
import { useCommand, useStore } from "@models/store";
import CartButton from "@components/cart/CartButton";

interface Props {
  readonly saveSettings: (values: Settings) => void;
  readonly settings: Settings;
}

const AppBarContent: FC<Props> = ({ settings, saveSettings }) => {
  const [search, dispatch] = useStore((store) => store.search);
  const command = useCommand((cmd) => cmd.search);

  const [__, cartDispatch] = useStore((str) => str.cart)
  const cartCommand = useCommand((cmd) => cmd.cart)

  useEffect(() => {
    cartDispatch(cartCommand.getCart());
  }, [])

  return (
    <Box sx={{ alignItems: "center", display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          borderRadius: 2,
          paddingY: 1,
          paddingX: 3,
          gap: 3,
          marginRight: 2,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Search height={20} width={20} />
        <InputBase
          value={search}
          onChange={(e) => dispatch(command.setSearch(e.target.value))}
          placeholder="Search..."
        ></InputBase>
      </Box>
      <CartButton />
      <ModeToggler saveSettings={saveSettings} settings={settings} />
      <UserDropdown settings={settings} />
    </Box>
  );
};

AppBarContent.displayName = "AppBarContent";

export { AppBarContent };
