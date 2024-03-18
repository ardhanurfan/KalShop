import { useEffect, type FC } from "react";

import { Menu2, Search } from "@nxweb/icons/tabler";

import { Box, IconButton } from "@components/material.js";
import { ModeToggler } from "@components/mode-toggler.js";
import { UserDropdown } from "@components/user-dropdown.js";
import type { Settings } from "@hooks/use-settings.js";
import { InputBase } from "@mui/material";
import { useCommand, useStore } from "@models/store";
import CartButton from "@components/cart/CartButton";

interface Props {
  readonly hidden: boolean;
  readonly saveSettings: (values: Settings) => void;
  readonly settings: Settings;
  readonly toggleNavVisibility: () => void;
}

const AppBarContent: FC<Props> = ({
  hidden,
  settings,
  saveSettings,
  toggleNavVisibility,
}) => {
  const [search, dispatch] = useStore((store) => store.search);
  const command = useCommand((cmd) => cmd.search);

  const [__, cartDispatch] = useStore((str) => str.cart)
  const cartCommand = useCommand((cmd) => cmd.cart)

  useEffect(() => {
    cartDispatch(cartCommand.getCart());
  }, [])

  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        className="actions-left"
        sx={{
          alignItems: "center",
          display: "flex",
          mr: 2,
        }}
      >
        {hidden ? (
          <IconButton
            color="inherit"
            sx={{ ml: -2.75 }}
            onClick={toggleNavVisibility}
          >
            <Menu2 fontSize="1.5rem" />
          </IconButton>
        ) : null}
        <CartButton />
        <ModeToggler saveSettings={saveSettings} settings={settings} />
      </Box>
      <Box
        className="actions-right"
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
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
        <Box
          sx={{
            padding: 2,
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  );
};

AppBarContent.displayName = "AppBarContent";

export { AppBarContent };
